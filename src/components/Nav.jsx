import React, { useState, useRef, useEffect } from 'react';
import { IoMdPerson } from 'react-icons/io';
import { GiHamburgerMenu, GiSplitCross } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'; 
import { IoCall } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from "../App";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import logo from "../assets/logo.png"; // Assuming this path is correct

// --- Helper Components for Navigation Structure ---

// Single Nav Item for Desktop (with dropdown logic)
const DesktopNavItem = ({ item, navigate, openMenu, setOpenMenu, index }) => {
    return (
        <div
            className="relative text-white group"
            onMouseEnter={() => item.submenu && setOpenMenu(index)}
            onMouseLeave={() => item.submenu && setOpenMenu(null)}
            role="navigation"
        >
            <button
                className="px-3 py-2 rounded-lg transition duration-200 hover:bg-white hover:text-black cursor-pointer flex items-center gap-1 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => {
                    if (item.link) navigate(item.link);
                    setOpenMenu(null); // Close menu if clicked main link
                }}
                aria-label={item.label}
                aria-expanded={item.submenu && openMenu === index}
                aria-haspopup={item.submenu ? "true" : "false"}
            >
                {item.label}
                {item.submenu && <IoIosArrowDown className="w-3 h-3 ml-1" />}
            </button>

            {/* Level 1 Submenu Dropdown */}
            {item.submenu && openMenu === index && (
<div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 p-2 grid grid-cols-1 gap-1 min-w-[280px] z-50"
                role="menu"
                aria-label="submenu"
            >
                    {item.submenu.map((sub, sIdx) => (
                        <div key={sIdx} className="relative group/sub">
                            <div
                                className="px-3 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer transition duration-150 flex items-center justify-between"
                                onClick={() => {
                                    if (sub.link) {
                                        navigate(sub.link);
                                        setOpenMenu(null); // Close all on navigation
                                    }
                                }}
                            >
                                <span>{sub.label}</span>
                                {sub.submenu && <IoIosArrowForward className="w-4 h-4" />}
                            </div>

                            {/* Level 2 Submenu Dropdown */}
                            {sub.submenu && (
                                <div className="absolute top-0 left-full -ml-1 bg-white text-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 p-2 grid grid-cols-1 gap-1 min-w-[280px] hidden group-hover/sub:block z-50">
                                    {sub.submenu.map((leaf, lIdx) => (
                                        <div
                                            key={lIdx}
                                            className="px-3 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer transition duration-150 text-sm"
                                            onClick={() => {
                                                navigate(leaf.link);
                                                setOpenMenu(null); // Close all on navigation
                                            }}
                                        >
                                            {leaf.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Mobile Nav Item (Toggleable)
const MobileNavItem = ({ item, navigate, openMenu, setOpenMenu, index }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isLeafMenuOpen, setIsLeafMenuOpen] = useState({});

    // Reset local state when mobile menu closes
    useEffect(() => {
        if (!openMenu) {
            setIsSubMenuOpen(false);
            setIsLeafMenuOpen({});
        }
    }, [openMenu]);

    const handleMainClick = () => {
        if (item.link) {
            navigate(item.link);
            setOpenMenu(false); // Close entire sidebar on navigation
        } else {
            setIsSubMenuOpen(prev => !prev);
        }
    };

    const handleSubClick = (sub, sIdx) => {
        if (sub.link) {
            navigate(sub.link);
            setOpenMenu(false); // Close entire sidebar on navigation
        } else {
            setIsLeafMenuOpen(prev => ({
                ...prev,
                [sIdx]: !prev[sIdx]
            }));
        }
    };

    const handleLeafClick = (leaf) => {
        navigate(leaf.link);
        setOpenMenu(false); // Close entire sidebar on navigation
    };

    return (
        <div className="w-full">
            <div
                className="px-4 py-3 border-b border-gray-700 text-white flex justify-between items-center cursor-pointer hover:bg-gray-800 transition duration-150 font-semibold"
                onClick={handleMainClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleMainClick()}
                aria-label={item.label}
                aria-expanded={isSubMenuOpen}
                aria-haspopup={item.submenu ? "true" : "false"}
            >
                {item.label}
                {item.submenu && <IoIosArrowDown className={`w-4 h-4 transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />}
            </div>

            {/* Level 1 Submenu for Mobile */}
            {item.submenu && isSubMenuOpen && (
                <div className="pl-4 border-l border-gray-600 my-1">
                    {item.submenu.map((sub, sIdx) => (
                        <div key={sIdx}>
                            <div
                                className="px-3 py-2 text-white/90 flex justify-between items-center cursor-pointer hover:bg-gray-700 transition duration-150 text-sm"
                                onClick={() => handleSubClick(sub, sIdx)}
                            >
                                <span>{sub.label}</span>
                                {sub.submenu && <IoIosArrowForward className={`w-3 h-3 transition-transform duration-300 ${isLeafMenuOpen[sIdx] ? 'rotate-90' : 'rotate-0'}`} />}
                            </div>
                            
                            {/* Level 2 Submenu for Mobile */}
                            {sub.submenu && isLeafMenuOpen[sIdx] && (
                                <div className="pl-3 border-l border-gray-500 my-1">
                                    {sub.submenu.map((leaf, lIdx) => (
                                        <div
                                            key={lIdx}
                                            className="px-3 py-2 text-white/70 hover:bg-gray-600 cursor-pointer text-xs transition duration-150"
                                            onClick={() => handleLeafClick(leaf)}
                                        >
                                            {leaf.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Main Nav Component ---
function Nav() {
    // Existing states
    let [showHam, setShowHam] = useState(false);
    let [showPro, setShowPro] = useState(false); // For desktop profile dropdown
    let [openMenu, setOpenMenu] = useState(null); // For desktop multi-level menu
    
    // Existing hooks and redux
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let { userData } = useSelector(state => state.user);

    // FIX 1: Close desktop profile dropdown when mobile menu is toggled
    useEffect(() => {
        if (showHam) {
            setShowPro(false);
        }
    }, [showHam]); 

    // Existing navigation data structure
    const navigationItems = [
        { label: 'Home', link: '/' },
        // ... (Courses, Services, Media, Our Clinics, Shop, Academy, Contact Us data structure remains the same)
        {
            label: 'Courses',
            submenu: [
              {
                label: 'Permanent Makeup',
                submenu: [
                  { label: "Master's in Permanent Eyebrows", link: '/courses/permanent-makeup/masters-eyebrows' },
                  { label: 'Master class in Scalp Micropigmentation', link: '/courses/permanent-makeup/master-scalp' },
                  { label: 'PG Diploma in Permanent Make up', link: '/courses/permanent-makeup/pg-diploma' },
                  { label: 'Certificate Course in Lip Micropigmentation', link: '/courses/permanent-makeup/cert-lip' },
                  { label: 'Certificate in Brows and Lash Lift', link: '/courses/permanent-makeup/cert-brows-lash' },
                  { label: 'Certificate in Scalp Micropigmentation', link: '/courses/permanent-makeup/cert-scalp' },
                  { label: 'Certificate course in Laser Hair Reduction', link: '/courses/permanent-makeup/cert-laser-hair' },
                  { label: 'Certificate Course Skin Technicial', link: '/courses/permanent-makeup/cert-skin-tech' },
                ]
              },
              {
                label: 'Cosmetology',
                submenu: [
                  { label: 'Master Class in Chemical Peels', link: '/courses/cosmetology/master-chemical-peels' },
                  { label: 'Diploma in Advanced Cosmetology', link: '/courses/cosmetology/diploma-advanced' },
                  { label: 'Certificate in Professional Cosmetology', link: '/courses/cosmetology/cert-professional' },
                  { label: 'Certificate Course in Medicated Hydrafacial', link: '/courses/cosmetology/cert-hydrafacial' },
                  { label: 'Certificate Courses in Chemical Peels', link: '/courses/cosmetology/cert-chemical-peels' }
                ]
              },
              {
                label: 'Facial Aesthetics',
                submenu: [
                  { label: 'Masters in Facial Aesthetics', link: '/courses/facial-aesthetics/masters' },
                  { label: 'Master Class In Lipolytic Injections', link: '/courses/facial-aesthetics/master-lipolytic' },
                  { label: 'Master Class in Nose correction', link: '/courses/facial-aesthetics/master-nose' },
                  { label: 'Master Class In Acne Scar Treatment', link: '/courses/facial-aesthetics/master-acne' },
                  { label: 'Masters Class in Plasma Pen', link: '/courses/facial-aesthetics/master-plasma' },
                  { label: 'Master class in Under eye rejuvenation', link: '/courses/facial-aesthetics/master-undereye' },
                  { label: 'Master class in Lip Fillers', link: '/courses/facial-aesthetics/master-fillers' },
                  { label: 'PG Diploma in Facial Aesthetics', link: '/courses/facial-aesthetics/pg-diploma' },
                  { label: 'Certificate Course in Lipolytic Injections', link: '/courses/facial-aesthetics/cert-lipolytic' }
                ]
              },
              {
                label: 'Fellowship',
                submenu: [
                  { label: 'Fellowship in Permanent Make up and Cosmetology', link: '/courses/fellowship/permanent-cosmetology' },
                  { label: 'Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology', link: '/courses/fellowship/facial-permanent-cosmetology' },
                  { label: 'Fellowship in Facial Aesthetics', link: '/courses/fellowship/facial-aesthetics' },
                  { label: 'Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen', link: '/courses/fellowship/permanent-micropigmentation' },
                  { label: 'Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen', link: '/courses/fellowship/facial-permanent-micropigmentation' }
                ]
              },



              {
                label: 'Laser Practise',
                submenu: [
                  { label: 'Fellowship in Permanent make up and cosmetology', link: '/courses/fellowship/permanent-cosmetology' },
                  { label: 'Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology', link: '/courses/fellowship/facial-permanent-cosmetology' },
                    ]
              }






            ]
          },
          {
            label: 'Services',
            submenu: [
              {
                label: 'Permanent Makeup',
                submenu: [
                  { label: 'Microblading', link: '/services/permanent-makeup/microblading' },
                  { label: 'Ombre Brows', link: '/services/permanent-makeup/ombre-brows' },
                  { label: 'Powder Brows', link: '/services/permanent-makeup/powder-brows' },
                  { label: 'Combination Brows', link: '/services/permanent-makeup/combination-brows' },
                  { label: 'Permanent Lip Color', link: '/services/permanent-makeup/lip-color' },
                  { label: 'Permanent Beauty Spot', link: '/services/permanent-makeup/beauty-spot' },
                  { label: 'Eye Lash Lift', link: '/services/permanent-makeup/lash-lift' },
                  { label: 'Eyebrows Lamination', link: '/services/permanent-makeup/eyebrows-lamination' },
                  { label: 'Scalp Micro Pigmentation', link: '/services/permanent-makeup/scalp-micropigmentation' },
                  { label: 'Stretch Mark Camouflage', link: '/services/permanent-makeup/stretch-mark-camouflage' },
                  { label: 'Vitiligo Camouflage', link: '/services/permanent-makeup/vitiligo-camouflage' }
                ]
              },
              {
                label: 'Cosmetology',
                submenu: [
                  { label: 'Vampire Facial', link: '/services/cosmetology/vampire-facial' },
                  { label: 'Mesotherapy', link: '/services/cosmetology/mesotherapy' },
                  { label: 'PRP for Hair', link: '/services/cosmetology/prp-hair' },
                  { label: 'HydraFacial', link: '/services/cosmetology/hydrafacial' },
                  { label: 'Dermaplaning', link: '/services/cosmetology/dermaplaning' },
                  { label: 'Medicated Facial', link: '/services/cosmetology/medicated-facial' },
                  { label: 'Laser Hair Reduction', link: '/services/cosmetology/laser-hair-reduction' },
                  { label: 'Wellness Drips', link: '/services/cosmetology/wellness-drips' }
                ]
              },
              {
                label: 'Facial Aesthetics',
                submenu: [
                  { label: 'Botox', link: '/services/facial-aesthetics/botox' },
                  { label: 'Face Lift', link: '/services/facial-aesthetics/face-lift' },
                  { label: 'Thread Lift', link: '/services/facial-aesthetics/thread-lift' },
                  { label: 'Nose Fillers', link: '/services/facial-aesthetics/nose-fillers' },
                  { label: 'Chin & Jawline Augmentation', link: '/services/facial-aesthetics/chin-jawline' },
                  { label: 'Lip Fillers', link: '/services/facial-aesthetics/lip-fillers' },
                  { label: 'Chemical Peels', link: '/services/facial-aesthetics/chemical-peels' },
                  { label: 'Acne Scar Treatment', link: '/services/facial-aesthetics/acne-scar' },
                  { label: 'Vitamin Drips', link: '/services/facial-aesthetics/vitamin-drips' },
                  { label: 'PDRN', link: '/services/facial-aesthetics/pdrn' },
                  { label: 'Profhilo', link: '/services/facial-aesthetics/profhilo' },
                  { label: 'Hyperhidrosis', link: '/services/facial-aesthetics/hyperhidrosis' },
                  { label: 'Polynucleotides', link: '/services/facial-aesthetics/polynucleotides' },
                  { label: 'Exosomes', link: '/services/facial-aesthetics/exosomes' },
                  { label: 'Neck Rejuvenation', link: '/services/facial-aesthetics/neck-rejuvenation' },
                  { label: 'Hands Rejuvenation', link: '/services/facial-aesthetics/hands-rejuvenation' }
                ]
              },
              {
                label: 'Dentistry',
                submenu: [
                  { label: 'Veneers Dentures', link: '/services/dentistry/veneers-dentures' },
                  { label: 'Smile Designing', link: '/services/dentistry/smile-designing' },
                  { label: 'Invisalign', link: '/services/dentistry/invisalign' },
                  { label: 'Extractions', link: '/services/dentistry/extractions' },
                  { label: 'Gum Surgeries', link: '/services/dentistry/gum-surgeries' },
                  { label: 'Orthodontics', link: '/services/dentistry/orthodontics' },
                  { label: 'Teeth Whitening', link: '/services/dentistry/teeth-whitening' },
                  { label: 'Dental Implants', link: '/services/dentistry/dental-implants' },
                  { label: 'Crown & Bridges', link: '/services/dentistry/crown-bridges' },
                  { label: 'Gum Depigmentation', link: '/services/dentistry/gum-depigmentation' },
                  { label: 'Root Canal Treatment', link: '/services/dentistry/root-canal' },
                  { label: 'Tooth Colored Fillings', link: '/services/dentistry/tooth-colored-fillings' },
                  { label: 'Oral Cancer Screening', link: '/services/dentistry/oral-cancer' }
                ]
              }
            ]
          },
        {
            label: 'Media',
            submenu: [
                { label: 'Gallery', link: '/media/gallery' }
            ]
        },
        {
            label: 'Our Clinics',
            submenu: [
                { label: 'Amritsar', link: '/clinics/amritsar' },
                { label: 'Gurgaon', link: '/clinics/gurgaon' },
                { label: 'Jammu', link: '/clinics/jammu' }
            ]
        },
        {
            label: 'Shop',
            submenu: [
                { label: 'Permanent Makeup', link: '/shop/permanent-makeup' },
                { label: 'Cosmetology', link: '/shop/cosmetology' },
                { label: 'Facial Aesthetics', link: '/shop/facial-aesthetics' }
            ]
        },
        { label: 'Academy', link: '/academy' },
        { label: 'Contact Us', link: '/contact' }
    ];

    // Existing logout functionality
    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
            console.log(result.data);
            await dispatch(setUserData(null));
            toast.success("LogOut Successfully");
            setShowPro(false); // Close dropdown after logout
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
            toast.error("Logout Failed");
        }
    };

    return (
        <>
        {/* Skip to main content link for screen readers */}
        <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#D4AF37] text-white px-4 py-2 rounded-md z-50"
        >
            Skip to main content
        </a>
        
        <nav className='w-full bg-black shadow-lg'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>

                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <img 
                            src={logo} 
                            className='w-[150px] md:w-[200px] rounded-md cursor-pointer' 
                            onClick={() => navigate("/")} 
                            alt="Logo" 
                        />
                    </div>

                    {/* Desktop Navigation (Hidden on smaller screens) */}
                    <div className='hidden lg:flex items-center space-x-2'>
                        {navigationItems.map((item, idx) => (
                            <DesktopNavItem
                                key={idx}
                                item={item}
                                navigate={navigate}
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                                index={idx}
                            />
                        ))}
                    </div>

                    {/* Profile & Actions (Desktop) / Hamburger (Mobile) */}
                    <div className='flex items-center space-x-3 relative'> 
                        
                        {/* Desktop actions (Hidden on mobile) */}
                        <div className='hidden lg:flex items-center space-x-3'> 
                            {/* Call Button */}
                            <a
  href="tel:+919654009966"
  title="Call Now"  
  className="w-10 h-10 flex items-center justify-center bg-black text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
>
  <IoCall className="w-5 h-5" />
</a>                       {userData?.role === "educator" && (
                                <span 
                                    className='px-4 py-2 border border-white text-white rounded-lg text-sm font-medium cursor-pointer transition duration-200 hover:bg-white hover:text-black' 
                                    onClick={() => navigate("/dashboard")}
                                >
                                    Dashboard
                                </span>
                            )}

                            <div className="relative">
                                <div
                                    className='w-10 h-10 rounded-full flex items-center justify-center text-white border-2 border-white bg-gray-900 cursor-pointer'
                                    onClick={() => setShowPro(prev => !prev)}
                                >
                                    {userData ? (
                                        userData.photoUrl ? (
                                            <img src={userData.photoUrl} className='w-full h-full rounded-full object-cover' alt="Profile" />
                                        ) : (
                                            <div className='text-lg'>{userData.name.slice(0, 1).toUpperCase()}</div>
                                        )
                                    ) : (
                                        <IoMdPerson className='w-6 h-6' />
                                    )}
                                </div>
                                
                                {/* Desktop Profile Dropdown (FIX 2 applied here: hidden lg:block) */}
                                {showPro && (
                                    <div className='absolute top-full right-0 mt-3 bg-white text-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 p-2 grid grid-cols-1 gap-1 min-w-[150px] z-50 **hidden lg:block**'>
                                        {userData ? (
                                            <>
                                                <span 
                                                    className='px-3 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer text-sm' 
                                                    onClick={() => { navigate("/profile"); setShowPro(false); }}
                                                >
                                                    My Profile
                                                </span>
                                                <span 
                                                    className='px-3 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer text-sm' 
                                                    onClick={() => { navigate("/enrolledcourses"); setShowPro(false); }}
                                                >
                                                    My Courses
                                                </span>
                                                <span 
                                                    className='px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer text-sm font-semibold mt-1' 
                                                    onClick={handleLogout}
                                                >
                                                    LogOut
                                                </span>
                                            </>
                                        ) : (
                                            <span 
                                                className='px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 cursor-pointer text-sm font-semibold' 
                                                onClick={() => { navigate("/login"); setShowPro(false); }}
                                            >
                                                Login
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Mobile Menu Button (Hamburger) - This is always visible on mobile */}
                        <div className='flex lg:hidden items-center'>
                            <button
                                type="button"
                                className='p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={() => setShowHam(prev => !prev)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <GiHamburgerMenu className='w-6 h-6' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Sidebar/Drawer Menu */}
<div
  className={`fixed top-0 right-0 w-[80vw] sm:w-[60vw] md:w-[50vw] max-w-sm min-h-screen bg-black overflow-y-auto transform transition-transform duration-300 ease-in-out z-[100] ${
    showHam ? "translate-x-0" : "translate-x-full"
  }`}
>                
                {/* Close Button */}
                <button
                    className='absolute top-4 right-4 p-2 text-white hover:text-gray-300 z-[101]'
                    onClick={() => setShowHam(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <GiSplitCross className='w-6 h-6' />
                </button>

                {/* Mobile Menu Content */}
                <div className='flex flex-col p-4 pt-16'>
                    {/* User Info / Actions in Mobile Menu */}
                    <div className='flex items-center justify-between p-2 mb-4 border-b border-gray-700'>
                         <div
                            className='flex items-center space-x-3 text-white'
                            onClick={() => {if(userData) { navigate("/profile"); setShowHam(false); }}}
                        >
                             <div
                                className='w-10 h-10 rounded-full flex items-center justify-center text-white border-2 border-white bg-gray-900 cursor-pointer'
                            >
                                {userData ? (
                                    userData.photoUrl ? (
                                        <img src={userData.photoUrl} className='w-full h-full rounded-full object-cover' alt="Profile" />
                                    ) : (
                                        <div className='text-lg'>{userData.name.slice(0, 1).toUpperCase()}</div>
                                    )
                                ) : (
                                    <IoMdPerson className='w-6 h-6' />
                                )}
                            </div>
                            <span className='font-semibold'>{userData ? userData.name : 'Guest'}</span>
                        </div>
                        
                        {/* Login/Logout Button */}
                        {!userData ? (
                            <span 
                                className='px-3 py-1 bg-green-600 text-white rounded-lg text-sm font-semibold cursor-pointer' 
                                onClick={() => { navigate("/login"); setShowHam(false); }}
                            >
                                Login
                            </span>
                        ) : (
                            <span 
                                className='px-3 py-1 bg-red-600 text-white rounded-lg text-sm font-semibold cursor-pointer' 
                                onClick={handleLogout}
                            >
                                LogOut
                            </span>
                        )}
                    </div>

                    {/* Mobile Navigation List */}
                    <div className='w-full'>
                        {userData?.role === "educator" && (
                            <div 
                                className='px-4 py-3 border-b border-gray-700 text-white flex justify-between items-center cursor-pointer hover:bg-gray-800 transition duration-150 font-semibold' 
                                onClick={() => { navigate("/dashboard"); setShowHam(false); }}
                            >
                                Dashboard
                            </div>
                        )}
                        {userData && (
                             <div 
                                className='px-4 py-3 border-b border-gray-700 text-white flex justify-between items-center cursor-pointer hover:bg-gray-800 transition duration-150 font-semibold' 
                                onClick={() => { navigate("/enrolledcourses"); setShowHam(false); }}
                            >
                                My Courses
                            </div>
                        )}

                        {navigationItems.map((item, idx) => (
                            <MobileNavItem
                                key={idx}
                                item={item}
                                navigate={navigate}
                                openMenu={showHam} // Pass showHam as a flag to reset mobile state
                                setOpenMenu={setShowHam} // Pass setShowHam to close the menu on navigation
                                index={idx}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {showHam && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={() => setShowHam(false)}
                />
            )}
        </nav>
        </>
    );
}

export default Nav;