import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Profile() {
  let { userData } = useSelector((state) => state.user);
  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f6f1] flex items-center justify-center px-4 py-10">

      {/* CARD */}
      <div className="relative bg-white/90 backdrop-blur-xl border border-[#D4AF37]/30 
      shadow-2xl rounded-3xl p-10 w-full max-w-xl">

        {/* BACK BUTTON */}
        <FaArrowLeftLong
          className="absolute top-6 left-6 text-[#3B2F2F] hover:text-[#D4AF37] cursor-pointer transition"
          size={24}
          onClick={() => navigate("/")}
        />

        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center text-center">
          {userData.photoUrl ? (
            <img
              src={userData.photoUrl}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-[#D4AF37]/40 shadow-xl"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-[#3B2F2F]/10 text-[#3B2F2F] 
            flex items-center justify-center text-4xl font-bold border border-[#D4AF37]/40 shadow-xl">
              {userData?.name?.slice(0, 1)?.toUpperCase()}
            </div>
          )}

          <h2 className="text-3xl font-bold mt-4 text-[#3B2F2F]">{userData.name}</h2>
          <p className="text-sm text-[#6f5e5e]">{userData.role}</p>
        </div>

        {/* INFO BOXES */}
        <div className="mt-8 space-y-5 text-[#3B2F2F]">

          <div className="p-4 rounded-xl bg-[#fff7e6] border border-[#D4AF37]/30 
          shadow-sm flex justify-between">
            <span className="font-semibold">Email</span>
            <span className="text-[#6b5b2b]">{userData.email}</span>
          </div>

          <div className="p-4 rounded-xl bg-[#fff7e6] border border-[#D4AF37]/30 
          shadow-sm flex justify-between">
            <span className="font-semibold">Bio</span>
            <span className="text-[#6b5b2b]">
              {userData.description || "—"}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#fff7e6] border border-[#D4AF37]/30 
          shadow-sm flex justify-between">
            <span className="font-semibold">Enrolled Courses</span>
            <span className="text-[#6b5b2b]">
              {userData.enrolledCourses?.length}
            </span>
          </div>

        </div>

        {/* ACTION BUTTON */}
        <div className="mt-10 flex justify-center">
          <button
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#b68b2a]
            text-white font-semibold shadow-lg hover:opacity-90 active:scale-95 transition"
            onClick={() => navigate("/editprofile")}
          >
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;
