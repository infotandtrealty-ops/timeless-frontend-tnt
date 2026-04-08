import React, { useEffect, useState } from 'react';
import Card from "../components/Card.jsx";
import { FaArrowLeftLong, FaFilter, FaMagnifyingGlass } from "react-icons/fa6"; 
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import ai from '../assets/SearchAi.png';
import { useSelector } from 'react-redux';

function AllCourses() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();
  
  // State
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filterCourses, setFilterCourses] = useState([]);
  
  const { courseData } = useSelector(state => state.course);

  // Toggle Category Logic
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // Filter Logic
  const applyFilter = () => {
    let courseCopy = courseData.slice();

    // 1. Filter by Search
    if (searchQuery) {
      courseCopy = courseCopy.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 2. Filter by Category
    if (category.length > 0) {
      courseCopy = courseCopy.filter(item => category.includes(item.category));
    }

    setFilterCourses(courseCopy);
  };

  useEffect(() => {
    setFilterCourses(courseData);
  }, [courseData]);

  useEffect(() => {
    applyFilter();
  }, [category, searchQuery]); 

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF8] font-sans">
      
      {/* --- TOP NAV (FIXED) --- */}
      {/* Added 'fixed', 'w-full', 'bg-white' to ensure it sits on top and is opaque */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#E8E2D4]">
        <Nav />
      </div>

      {/* --- MAIN LAYOUT --- */}
      {/* Added 'pt-[80px]' here. This pushes the entire content down so it doesn't hide behind the Nav */}
      <div className="flex flex-1 relative pt-[80px]">
        
        {/* Mobile Toggle Button (Floating) */}
        <button
          onClick={() => setIsSidebarVisible(prev => !prev)}
          className="fixed bottom-6 right-6 z-50 bg-[#D4AF37] text-white p-4 rounded-full shadow-2xl md:hidden hover:bg-[#b5952f] transition-all"
        >
          <FaFilter className="text-xl" />
        </button>

        {/* --- SIDEBAR --- */}
        <aside
          className={`
            w-[280px] h-[calc(100vh-80px)] overflow-y-auto
            bg-white border-r border-[#E8E2D4]
            fixed md:sticky top-[80px] left-0 
            p-6 shadow-[4px_0_24px_rgba(0,0,0,0.02)]
            z-40 transition-transform duration-300 ease-in-out
            ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
          `}
        >
          {/* Back Button */}
          <div 
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-[#8A8A8A] hover:text-[#D4AF37] cursor-pointer mb-8 transition-colors"
          >
            <FaArrowLeftLong className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-[#3B2F2F] mb-6 border-b border-[#E8E2D4] pb-4">
            Filters
          </h3>

          <div className="mb-8 p-4 bg-gradient-to-br from-[#FAF8F3] to-[#FFF] rounded-2xl border border-[#E8E2D4] shadow-sm text-center">
            <img src={ai} alt="AI Search" className="w-16 h-16 mx-auto mb-2 opacity-90" />
            <p className="text-xs text-[#8A8A8A] font-medium">Find your perfect course</p>
          </div>

          {/* Category Filter Group */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#3B2F2F] uppercase tracking-wider">Categories</h4>
            <div className="flex flex-col gap-3">
              {['Permanent Makeup', 'Cosmotology', 'Denstiry', 'Others'].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-5 h-5 border-2 border-[#D1D1D1] rounded bg-white checked:bg-[#D4AF37] checked:border-[#D4AF37] transition-all"
                      value={cat}
                      onChange={toggleCategory}
                    />
                    <svg className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[#5A5A5A] group-hover:text-[#3B2F2F] transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 p-6 md:p-10 w-full">
          
          {/* Page Header & Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#3B2F2F]">
                Explore Courses
              </h1>
              <p className="text-[#8A8A8A] mt-2">
                Master the art of aesthetics with our premium curriculum.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8E2D4] rounded-full focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] shadow-sm transition-all"
              />
            </div>
          </div>

          {/* Results Grid */}
          {filterCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {filterCourses.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-[#E8E2D4] hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-300 h-full flex flex-col"
                >
                  <Card
                    thumbnail={item.thumbnail}
                    title={item.title}
                    price={item.price}
                    category={item.category}
                    id={item._id}
                    reviews={item.reviews}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-70">
              <div className="bg-[#FAF8F3] p-6 rounded-full mb-4">
                 <FaMagnifyingGlass className="text-4xl text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#3B2F2F]">No courses found</h3>
              <p className="text-[#8A8A8A]">Try adjusting your search or filters.</p>
              <button 
                onClick={() => {setCategory([]); setSearchQuery("");}}
                className="mt-4 text-[#D4AF37] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AllCourses;