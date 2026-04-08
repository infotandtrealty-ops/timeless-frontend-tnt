import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';
import { FaArrowLeftLong } from "react-icons/fa6";

function ViewLecture() {
  const { courseId } = useParams();
  const { courseData } = useSelector((state) => state.course);
  const { userData } = useSelector((state) => state.user);

  const selectedCourse = courseData?.find((course) => course._id === courseId);
  const [selectedLecture, setSelectedLecture] = useState(
    selectedCourse?.lectures?.[0] || null
  );

  const navigate = useNavigate();
  const courseCreator = userData?._id === selectedCourse?.creator ? userData : null;

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6 flex flex-col md:flex-row gap-6">

      {/* BACK BUTTON */}
      <FaArrowLeftLong
        className="absolute top-6 left-6 text-[#3B2F2F] w-[28px] h-[28px] cursor-pointer hover:text-[#D4AF37] transition"
        onClick={() => navigate("/")}
      />

      {/* LEFT SECTION */}
      <div className="w-full md:w-2/3 bg-white rounded-3xl shadow-lg p-6 border border-[#EDE7D9]">
        
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#3B2F2F]">
          {selectedCourse?.title}
        </h1>

        {/* TAGS */}
        <div className="mt-3 flex gap-4 text-sm text-[#6c5f5b] font-medium">
          <span className="px-3 py-1 bg-[#FAF5E6] border border-[#D4AF37] text-[#3B2F2F] rounded-full">
            {selectedCourse?.category}
          </span>
          <span className="px-3 py-1 bg-[#FAF5E6] border border-[#D4AF37] text-[#3B2F2F] rounded-full">
            {selectedCourse?.level}
          </span>
        </div>

        {/* VIDEO PLAYER */}
        <div className="aspect-video mt-6 bg-black rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md">
          {selectedLecture?.videoUrl ? (
            <video
              src={selectedLecture.videoUrl}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              Select a lecture to start watching
            </div>
          )}
        </div>

        {/* SELECTED LECTURE TITLE */}
        <p className="mt-4 text-xl font-semibold text-[#3B2F2F]">
          {selectedLecture?.lectureTitle}
        </p>
      </div>

      {/* RIGHT SECTION - LECTURE LIST */}
      <div className="w-full md:w-1/3 bg-white rounded-3xl shadow-lg p-6 border border-[#EDE7D9] h-fit">

        <h2 className="text-2xl font-bold mb-4 text-[#3B2F2F]">Course Lectures</h2>

        <div className="flex flex-col gap-3 mb-6">
          {selectedCourse?.lectures?.length > 0 ? (
            selectedCourse.lectures.map((lecture) => (
              <button
                key={lecture._id}
                onClick={() => setSelectedLecture(lecture)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                  ${selectedLecture?._id === lecture._id
                    ? 'bg-[#FAF5E6] border-[#D4AF37] shadow-md'
                    : 'bg-white hover:bg-[#F7F3E8] border-[#E0D5C1]'
                  }`}
              >
                <span className="text-[#3B2F2F] font-medium text-sm">
                  {lecture.lectureTitle}
                </span>

                <FaPlayCircle
                  className={
                    selectedLecture?._id === lecture._id
                      ? "text-[#D4AF37] text-2xl"
                      : "text-[#3B2F2F] text-2xl"
                  }
                />
              </button>
            ))
          ) : (
            <p className="text-[#6c5f5b]">No lectures available.</p>
          )}
        </div>

        {/* INSTRUCTOR SECTION */}
        {courseCreator && (
          <div className="mt-6 border-t border-[#E0D5C1] pt-4">
            <h3 className="text-lg font-semibold text-[#3B2F2F] mb-3">
              Instructor
            </h3>

            <div className="flex items-center gap-4">
              <img
                src={courseCreator.photoUrl || '/default-avatar.png'}
                alt="Instructor"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
              />

              <div>
                <h4 className="text-base font-medium text-[#3B2F2F]">
                  {courseCreator.name}
                </h4>
                <p className="text-sm text-[#6c5f5b]">
                  {courseCreator.description || 'No bio available.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default ViewLecture;
