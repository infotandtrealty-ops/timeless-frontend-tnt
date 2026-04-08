import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function EnrolledCourse() {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const enrolledCourses = userData?.enrolledCourses || [];

  return (
    <div className="min-h-screen w-full px-4 py-12 bg-[#f8f5ef]">

      {/* Back Button */}
      <FaArrowLeftLong
        className="absolute top-5 left-5 w-7 h-7 text-[#3B2F2F] hover:text-[#D4AF37] transition cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Title */}
      <h1 className="text-4xl text-center font-extrabold mb-12
      bg-gradient-to-r from-[#D4AF37] to-[#3B2F2F] bg-clip-text text-transparent tracking-wide">
        My Enrolled Courses
      </h1>

      {/* No Courses Message */}
      {enrolledCourses.length === 0 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-[#3B2F2F] bg-white border border-[#D4AF37]/40 
          px-7 py-4 rounded-2xl shadow-lg text-lg backdrop-blur-sm">
            You haven’t enrolled in any course yet.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">

          {enrolledCourses.map((course) => (
            <div
              key={course._id}
              className="w-[90%] sm:w-[280px] bg-white rounded-2xl shadow-xl
              border border-[#D4AF37]/30 overflow-hidden hover:shadow-2xl 
              hover:-translate-y-2 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-44 object-cover rounded-t-2xl"
                />

                <span
                  className="absolute bottom-2 right-2 bg-[#D4AF37]/90 text-black font-semibold text-xs 
                  px-3 py-1 rounded-full shadow"
                >
                  {course.level}
                </span>
              </div>

              {/* Details */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#3B2F2F]">
                  {course.title}
                </h2>

                <p className="text-sm text-[#6b5b5b] mt-1">
                  {course.category}
                </p>

                <div className="mt-5">
                  <button
                    className="w-full py-2 bg-gradient-to-r from-[#D4AF37] to-[#c09a34]
                    text-white font-semibold rounded-xl shadow-lg hover:opacity-90 
                    active:scale-95 transition"
                    onClick={() => navigate(`/viewlecture/${course._id}`)}
                  >
                    🎬 Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default EnrolledCourse;
