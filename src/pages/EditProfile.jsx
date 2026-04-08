import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function EditProfile() {
  let { userData } = useSelector((state) => state.user);
  let [name, setName] = useState(userData.name || "");
  let [description, setDescription] = useState(userData.description || "");
  let [photoUrl, setPhotoUrl] = useState(null);
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("photoUrl", photoUrl);

  const updateProfile = async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        serverUrl + "/api/user/updateprofile",
        formData,
        { withCredentials: true }
      );

      dispatch(setUserData(result.data));
      toast.success("Profile Updated Successfully");
      navigate("/");
    } catch (error) {
      toast.error("Profile Update Error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center px-4 py-14">

      {/* Card */}
      <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl
      border border-[#e5d3a1] rounded-3xl p-10 w-full max-w-xl">

        {/* Back Button */}
        <FaArrowLeftLong
          className="absolute top-6 left-6 text-[#d2a847] hover:text-black transition cursor-pointer"
          size={24}
          onClick={() => navigate("/profile")}
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-center 
        bg-gradient-to-r from-[#d2a847] to-[#6f5c2e] bg-clip-text text-transparent mb-8">
          Edit Profile
        </h2>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

          {/* Profile Photo */}
          <div className="flex flex-col items-center gap-4">
            {userData.photoUrl ? (
              <img
                src={userData.photoUrl}
                className="w-28 h-28 rounded-full object-cover 
                border-4 border-[#e5d3a1] shadow-xl"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-[#fff5da] text-[#b8922c]
              text-4xl flex items-center justify-center border border-[#e8d9ac] shadow-md">
                {userData?.name?.slice(0, 1)?.toUpperCase()}
              </div>
            )}
          </div>

          {/* Upload */}
          <div>
            <label className="text-sm font-medium text-[#a88d36]">Profile Photo</label>
            <input
              type="file"
              className="w-full mt-2 px-4 py-2 border border-[#e8d9ac] bg-white
              text-black rounded-lg focus:ring-2 focus:ring-[#d2a847]"
              onChange={(e) => setPhotoUrl(e.target.files[0])}
            />
          </div>

          {/* FULL NAME */}
          <div>
            <label className="text-sm font-medium text-[#a88d36]">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-3 bg-white border border-[#e8d9ac] 
              text-black rounded-lg focus:ring-2 focus:ring-[#d2a847]"
              placeholder={userData.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-[#a88d36]">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 bg-gray-100 border border-[#e8d9ac]
              rounded-lg text-gray-500"
              readOnly
              placeholder={userData.email}
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium text-[#a88d36]">Description</label>
            <textarea
              className="w-full mt-2 px-4 py-3 bg-white border border-[#e8d9ac] 
              text-black rounded-lg resize-none focus:ring-2 focus:ring-[#d2a847]"
              rows={4}
              placeholder="Tell us about yourself"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#d2a847] to-[#ad8c2f] 
            text-white font-semibold py-3 rounded-xl shadow-lg hover:opacity-90 
            active:scale-95 transition"
            disabled={loading}
            onClick={updateProfile}
          >
            {loading ? <ClipLoader size={30} color="white" /> : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditProfile;
