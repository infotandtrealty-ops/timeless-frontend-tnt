import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { serverUrl } from "../App";
// Adjusted icon imports for stability and added new icons
import { FaArrowLeftLong, FaRegStar } from "react-icons/fa6"; 
import { FaLock, FaPlayCircle, FaStar } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa'; 
import img from "../assets/empty.jpg"
import Card from "../components/Card.jsx" 
import { setSelectedCourseData } from '../redux/courseSlice';
import { toast } from 'react-toastify';

function ViewCourse() {

    const { courseId } = useParams();
    const navigate = useNavigate()
    const { courseData } = useSelector(state => state.course)
    const { userData } = useSelector(state => state.user)
    const [creatorData, setCreatorData] = useState(null)
    const dispatch = useDispatch()
    const [selectedLecture, setSelectedLecture] = useState(null);
    const { lectureData } = useSelector(state => state.lecture)
    const { selectedCourseData } = useSelector(state => state.course)
    const [selectedCreatorCourse, setSelectedCreatorCourse] = useState([])
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");


    const handleReview = async () => {
        if (rating === 0) {
            toast.error("Please select a star rating.");
            return;
        }
        try {
            const result = await axios.post(serverUrl + "/api/review/givereview", { rating, comment, courseId }, { withCredentials: true })
            toast.success("Review Added Successfully!")
            console.log(result.data)
            setRating(0)
            setComment("")
            // Optionally, refresh course data to show new review
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }


    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
    };

    const avgRating = calculateAverageRating(selectedCourseData?.reviews);


    const fetchCourseData = () => {
        courseData.map((item) => {
            if (item._id === courseId) {
                dispatch(setSelectedCourseData(item))
                return null;
            }
        })
    }

    const checkEnrollment = () => {
        const verify = userData?.enrolledCourses?.some(c => {
            const enrolledId = typeof c === 'string' ? c : c._id;
            return enrolledId?.toString() === courseId?.toString();
        });

        if (verify) {
            setIsEnrolled(true);
        }
    };

    useEffect(() => {
        fetchCourseData()
        checkEnrollment()
    }, [courseId, courseData, lectureData, userData]); 


    // Fetch creator info once course data is available
    useEffect(() => {
        const getCreator = async () => {
            if (selectedCourseData?.creator) {
                try {
                    const result = await axios.post(
                        `${serverUrl}/api/course/getcreator`,
                        { userId: selectedCourseData.creator },
                        { withCredentials: true }
                    );
                    setCreatorData(result.data);
                } catch (error) {
                    console.error("Error fetching creator:", error);
                }
            }
        };

        getCreator();


    }, [selectedCourseData]);


    useEffect(() => {
        if (creatorData?._id && courseData.length > 0) {
            const creatorCourses = courseData.filter(
                (course) =>
                    course.creator === creatorData._id && course._id !== courseId // Exclude current course
            );
            setSelectedCreatorCourse(creatorCourses);
        }
    }, [creatorData, courseData]);


    const handleEnroll = async (courseId, userId) => {
        try {
            // 1. Create Order
            const orderData = await axios.post(serverUrl + "/api/payment/create-order", {
                courseId,
                userId
            }, { withCredentials: true });

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
                amount: orderData.data.amount,
                currency: "INR",
                name: "Your LMS Platform Name",
                description: "Course Enrollment Payment",
                order_id: orderData.data.id,
                handler: async function (response) {
                    try {
                        const verifyRes = await axios.post(serverUrl + "/api/payment/verify-payment", {
                            ...response,
                            courseId,
                            userId
                        }, { withCredentials: true });

                        setIsEnrolled(true)
                        toast.success(verifyRes.data.message);
                    } catch (verifyError) {
                        toast.error("Payment verification failed.");
                        console.error("Verification Error:", verifyError);
                    }
                },
                prefill: {
                    name: userData.name,
                    email: userData.email,
                },
                theme: {
                    color: "#D4AF37" // Changed theme color to Soft Gold
                }
            };

            const rzp = new window.Razorpay(options)
            rzp.open()

        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong while enrolling.");
            console.error("Enroll Error:", err);
        }
    };

    // Placeholder data for demonstration (Using actual data is highly recommended)
    const courseHighlights = [
        "10+ hours of high-definition video content",
        "Lifetime access to all course materials & updates",
        "Downloadable resources and coding exercises",
        "Certificate of completion included",
        "Dedicated Q&A support forum"
    ];

    return (
        // Soft Light Background
        <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
            
            {/* Main Content Card - Premium White/Gold Look */}
            <div className="max-w-7xl mx-auto bg-white shadow-2xl shadow-gray-200 rounded-3xl p-6 lg:p-10 space-y-10 relative border border-gray-100">

                {/* Top Section - Hero */}
                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* Thumbnail/Media */}
                    <div className="w-full md:w-5/12 relative">
                        {/* Back Button - Soft Gold on Dark BG */}
                        <FaArrowLeftLong
                            className='absolute top-4 left-4 z-10 text-[#D4AF37] w-7 h-7 cursor-pointer bg-[#3B2F2F]/70 p-1 rounded-full hover:bg-[#3B2F2F] transition-all duration-300 shadow-md'
                            onClick={() => navigate("/")}
                        />
                        <img
                            src={selectedCourseData?.thumbnail || img}
                            alt="Course Thumbnail"
                            className="rounded-2xl w-full object-cover shadow-xl border-4 border-[#D4AF37]/50 transition-transform duration-500 hover:scale-[1.01]" 
                        />
                    </div>

                    {/* Course Info & Action */}
                    <div className="flex-1 space-y-5 md:mt-0">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#3B2F2F] leading-tight"> {/* Deep Espresso Title */}
                            {selectedCourseData?.title}
                        </h1>
                        <p className="text-xl text-gray-500 font-light italic">{selectedCourseData?.subTitle}</p>

                        {/* Rating & Price */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 border-y border-[#D4AF37]/30"> {/* Gold Border Separator */}
                            <div className="text-xl font-bold flex items-center gap-2 text-[#D4AF37]"> {/* Soft Gold Rating */}
                                <FaStar className="w-6 h-6" /> {avgRating}{" "}
                                <span className="text-gray-500 text-sm font-normal">
                                    ({selectedCourseData?.reviews?.length || 0} reviews)
                                </span>
                            </div>
                            <div className="mt-3 sm:mt-0">
                                <span className="text-4xl font-extrabold text-[#3B2F2F]"> {/* Deep Espresso Price */}
                                    ₹{selectedCourseData?.price}
                                </span>{" "}
                                {selectedCourseData?.price !== 'Free' && (
                                    <span className="line-through text-lg text-gray-400 ml-2">₹599</span>
                                )}
                            </div>
                        </div>

                        {/* Highlights (Enhanced with Gold Checkmark) */}
                        <ul className="text-md text-[#3B2F2F] space-y-2 pt-2">
                            {courseHighlights.map((highlight, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#D4AF37] w-5 h-5 shadow-sm" /> {/* Soft Gold Checkmark */}
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>


                        {/* Enroll Button - Primary CTA */}
                        <div className="pt-4">
                            {!isEnrolled ? (
                                <button
                                    // Soft Gold Button with Deep Espresso text
                                    className="w-full sm:w-auto bg-[#D4AF37] text-[#3B2F2F] px-10 py-4 rounded-xl text-xl font-bold shadow-xl shadow-[#D4AF37]/50 hover:bg-[#c29e31] transform hover:scale-[1.02] transition-all duration-300"
                                    onClick={() => handleEnroll(courseId, userData._id)}
                                >
                                    Start Learning Today
                                </button>
                            ) : (
                                <button
                                    // Enrolled Button - Green for continuation
                                    className="w-full sm:w-auto bg-green-600 text-white px-10 py-4 rounded-xl text-xl font-bold shadow-xl shadow-green-300 hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-300"
                                    onClick={() => navigate(`/viewlecture/${courseId}`)}
                                >
                                    <FaPlayCircle className="inline-block mr-3" /> Continue Watching
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- Section Separator --- */}
                <hr className="my-8 border-t-2 border-gray-100" />


                {/* Description and Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* What You'll Learn */}
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-bold text-[#3B2F2F] mb-3 border-b-2 border-[#D4AF37]/50 pb-1">What You’ll Learn</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2 marker:text-[#D4AF37]"> {/* Gold list markers */}
                            <li>Master **{selectedCourseData?.category}** Fundamentals</li>
                            <li>Build 5 Real-World Projects</li>
                            <li>Prepare for certification exams</li>
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-bold text-[#3B2F2F] mb-3 border-b-2 border-[#D4AF37]/50 pb-1">Requirements</h2>
                        <p className="text-gray-700">Basic understanding of computing is beneficial. No prior experience needed for this course.</p>
                    </div>

                    {/* Who This Course Is For */}
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-bold text-[#3B2F2F] mb-3 border-b-2 border-[#D4AF37]/50 pb-1">Who This Course is For</h2>
                        <p className="text-gray-700">
                            Beginners, aspiring developers, and professionals looking to upgrade their skills in **{selectedCourseData?.category}**.
                        </p>
                    </div>
                </div>

                {/* --- Section Separator --- */}
                <hr className="my-8 border-t-2 border-gray-100" />


                {/* Course Curriculum & Preview Video */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    
                    {/* Left Side - Curriculum (2/5 width on large screens) */}
                    <div className="lg:col-span-2 bg-gray-50 p-6 rounded-2xl shadow-inner border border-[#D4AF37]/20 overflow-y-auto max-h-[600px]">
                        <h2 className="text-2xl font-bold mb-2 text-[#3B2F2F]">Course Curriculum</h2>
                        <p className="text-sm text-gray-500 mb-6 font-medium">{selectedCourseData?.lectures?.length} Lectures available</p>

                        <div className="flex flex-col gap-3">
                            {selectedCourseData?.lectures?.map((lecture, index) => (
                                <button
                                    key={index}
                                    disabled={!lecture.isPreviewFree && !isEnrolled}
                                    onClick={() => {
                                        if (lecture.isPreviewFree || isEnrolled) {
                                            setSelectedLecture(lecture);
                                        }
                                    }}
                                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left w-full
                                        ${lecture.isPreviewFree || isEnrolled
                                            ? "hover:bg-[#D4AF37]/10 hover:shadow-sm cursor-pointer border border-[#D4AF37]/20" // Soft Gold hover
                                            : "cursor-not-allowed opacity-50 border border-gray-100"
                                        }
                                        ${selectedLecture?.lectureTitle === lecture.lectureTitle
                                            ? "bg-[#D4AF37]/20 border-[#D4AF37] shadow-md text-[#3B2F2F]" // Active Gold Lecture
                                            : "bg-white text-gray-700"
                                        }`}
                                >
                                    <span className="text-sm font-medium">
                                        <span className="text-gray-400 mr-2">{index + 1}.</span> {lecture.lectureTitle}
                                    </span>
                                    <span className={`text-xl ${selectedLecture?.lectureTitle === lecture.lectureTitle ? "text-[#D4AF37]" : "text-gray-500"}`}>
                                        {lecture.isPreviewFree || isEnrolled ? <FaPlayCircle /> : <FaLock />}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Video Player (3/5 width on large screens) */}
                    <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-xl border border-[#3B2F2F]/10">
                        <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-[#3B2F2F] flex items-center justify-center shadow-2xl">
                            {selectedLecture?.videoUrl ? (
                                <video
                                    src={selectedLecture.videoUrl}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="p-8 text-center">
                                    <FaPlayCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-3" /> {/* Gold Player Icon */}
                                    <span className="text-white text-lg font-semibold block">
                                        Select a lecture to preview the content
                                    </span>
                                    <p className="text-gray-400 text-sm mt-1">Free preview lectures are available.</p>
                                </div>
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-[#3B2F2F] mb-1">
                            {selectedLecture?.lectureTitle || "Lecture Preview"}
                        </h3>
                        <p className="text-gray-600 text-md font-medium">
                            Course: {selectedCourseData?.title}
                        </p>
                    </div>
                </div>

                {/* --- Section Separator --- */}
                <hr className="my-8 border-t-2 border-gray-100" />


                {/* Review & Instructor Info */}
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Write Review Section */}
                    <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-[#D4AF37]/20 shadow-inner">
                        <h2 className="text-2xl font-bold mb-4 text-[#3B2F2F]">Share Your Experience</h2>
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">Rate this Course</h3>
                        <div className="flex gap-2 mb-4 text-3xl cursor-pointer">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`transition-all duration-200 ${star <= rating ? "text-[#D4AF37] transform scale-105" : "text-gray-300 hover:text-[#D4AF37]/50"}`} // Soft Gold star
                                />
                            ))}
                        </div>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="What did you like about the course? What could be improved?"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                            rows="4"
                        />
                        <button
                            // Secondary button: Soft Gold border, Espresso text
                            onClick={handleReview}
                            className="bg-white border-2 border-[#D4AF37] text-[#3B2F2F] mt-4 px-6 py-2 rounded-lg font-medium hover:bg-[#D4AF37]/10 transition-all shadow-md"
                        >
                            Submit Review
                        </button>
                    </div>


                    {/* Instructor Info Section (Enhanced) */}
                    <div className="pt-4 border-t-4 lg:border-t-0 border-[#D4AF37]/50 lg:pt-0">
                        <h2 className="text-2xl font-bold mb-4 text-[#3B2F2F]">Meet the Instructor</h2>
                        <div className="flex items-center gap-6 p-6 rounded-xl border border-[#3B2F2F]/10 bg-white shadow-xl transform hover:scale-[1.005] transition-all duration-300">
                            <img
                                src={creatorData?.photoUrl || img}
                                alt="Instructor"
                                className="w-20 h-20 rounded-full object-cover border-4 border-[#D4AF37] shadow-md" // Gold Instructor Border
                            />
                            <div>
                                <h3 className="text-xl font-bold text-[#3B2F2F]">{creatorData?.name || "Instructor Name"}</h3>
                                <p className="text-md text-gray-700 mt-1">{creatorData?.description || "Course creator and expert."}</p>
                                <p className="text-sm text-[#D4AF37] mt-1">Expert in {selectedCourseData?.category}</p> {/* Gold Accent */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Section Separator --- */}
                <hr className="my-8 border-t-2 border-gray-100" />

                {/* Other Courses Section */}
                <div className='mt-8'>
                    <h2 className='text-2xl font-bold mb-6 text-[#3B2F2F]'>More Courses by {creatorData?.name || 'This Educator'}</h2>
                    <div className='flex flex-wrap gap-8 justify-center lg:justify-start'>
                        {/* Assuming Card.jsx is styled to match the new aesthetic */}
                        {selectedCreatorCourse?.length > 0 ? (
                            selectedCreatorCourse.map((item, index) => (
                                <Card
                                    key={index}
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    id={item._id}
                                    price={item.price}
                                    category={item.category}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500">No other courses found from this creator.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewCourse;