import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
// import { ToastContainer} from 'react-toastify';
import ForgotPassword from './pages/ForgotPassword'
import getCurrentUser from './customHooks/getCurrentUser'
import { useSelector } from 'react-redux'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Dashboard from './pages/admin/Dashboard'
import Courses from './pages/admin/Courses'
import AllCouses from './pages/AllCouses'
import AddCourses from './pages/admin/AddCourses'
import CreateCourse from './pages/admin/CreateCourse'
import CreateLecture from './pages/admin/CreateLecture'
import EditLecture from './pages/admin/EditLecture'






// import ClinicsPage from "./pages/ClinicsPage";


import ServicePage from './pages/ServicePage'
import ProductDetail from './pages/ProductDetail'
import ShopPage from './pages/ShopPage'
import ClinicsPage from './pages/ClinicsPage'


import getCouseData from './customHooks/getCouseData'
import ViewCourse from './pages/ViewCourse'
import ScrollToTop from './components/ScrollToTop'
import getCreatorCourseData from './customHooks/getCreatorCourseData'
import EnrolledCourse from './pages/EnrolledCourse'
import ViewLecture from './pages/ViewLecture'
import SearchWithAi from './pages/SearchWithAi'
import getAllReviews from './customHooks/getAllReviews'


// New pages
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import BlogCreate from './pages/BlogCreate'
import BlogEdit from './pages/BlogEdit'
import BlogManage from './pages/BlogManage'
import CoursePage from './pages/CoursePage'
import CourseIndex from './pages/CourseIndex'
import CoursePurchase from './pages/CoursePurchase'
import PermanentMakeupPage from './pages/PermanentMakeupPage'
import CosmetologyPage from './pages/CosmetologyPage'
import FacialAestheticsPage from './pages/FacialAestheticsPage'
import FellowshipCoursesPage from './pages/FellowshipCoursesPage'
import LaserPractisePage from './pages/LaserPractisePage'
import Treatments from './pages/Treatments'
import Websitecourses from './pages/Websitecourses'
import PermanentMakeupServices from './pages/PermanentMakeupServices'
import ServiceCategoryPage from './pages/ServiceCategoryPage'
import ServiceCategoryPagelanding from './pages/ServiceCategoryPagelanding'
import Servicesfacialaesthetics from './pages/Servicesfacialaesthetics'
import Dentistry from './pages/Dentistry'
import IndividualServicePage from './pages/IndividualServicePage'
import MediaPage from './pages/MediaPage'
import AcademyPage from './pages/AcademyPage'
import ContactPage from './pages/ContactPage.jsx'
import AboutUs from './pages/AboutUs'
import DemoRoutes from './pages/DemoRoutes'
import TestRoute from './pages/TestRoute'
import LeadsPage from './pages/admin/LeadsPage'

// export const serverUrl = "https://new-website-backend-2.onrender.com"
 export const serverUrl = "https://new-website-backend-2.onrender.com"

 
function App() {
  
  let {userData} = useSelector(state=>state.user)

  getCurrentUser()
  getCouseData()
  getCreatorCourseData()
  getAllReviews()
  return (
    <>
    
      {/* <ToastContainer /> */}
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/book-appointment' element={<BookAppointment/>}/> */}
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/:slug' element={<BlogDetail/>}/>


         <Route path='/admin/blog/create' element={userData ? <BlogCreate/> : <Navigate to="/login"/>}/> 
        <Route path='/admin/blog/edit/:id' element={userData ? <BlogEdit/> : <Navigate to="/login"/>}/>
        <Route path='/admin/blogs' element={userData ? <BlogManage/> : <Navigate to="/login"/>}/> 
      
      
      {/* <Route path='/admin/blog/create' element={<BlogCreate />} />
      <Route path='/admin/blog/edit/:id' element={<BlogEdit />} />
      <Route path='/admin/blogs' element={<BlogManage />} /> */}



        <Route path='/demo-routes' element={<DemoRoutes/>}/>
        <Route path='/test' element={<TestRoute/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={!userData ? <SignUp/> : <Navigate to="/"/>}/>
        <Route path='/profile' element={userData ? <Profile/> : <Navigate to="/signup"/>}/>
        {/* <Route path='/allcourses' element={userData?<AllCouses/>:<Navigate to={"/signup"}/>}/>  */}
        <Route path='/allcourses' element={<AllCouses />} />

        <Route path='/viewcourse/:courseId' element={userData ? <ViewCourse/> : <Navigate to="/signup"/>}/>
        <Route path='/editprofile' element={userData ? <EditProfile/> : <Navigate to="/signup"/>}/>
        <Route path='/enrolledcourses' element={userData ? <EnrolledCourse/> : <Navigate to="/signup"/>}/>
         <Route path='/viewlecture/:courseId' element={userData ? <ViewLecture/> : <Navigate to="/signup"/>}/>
         <Route path='/searchwithai' element={userData ? <SearchWithAi/> : <Navigate to="/signup"/>}/>
        
        
        <Route path='/dashboard' element={userData?.role === "educator" ? <Dashboard/> : <Navigate to="/signup"/>}/>
        <Route path='/dashboard/leads' element={userData?.role === "educator" ? <LeadsPage/> : <Navigate to="/signup"/>}/>
        {/* Public Courses landing for non-educators, educator sees their Courses page */}
        <Route path='/courses' element={userData?.role === "educator" ? <Courses/> : <CourseIndex/>}/>
        {/* Top-level course category landing pages */}
        <Route path='/courses/permanent-makeup' element={<PermanentMakeupPage/>}/>
        <Route path='/courses/cosmetology' element={<CosmetologyPage/>}/>
        <Route path='/courses/facial-aesthetics' element={<FacialAestheticsPage/>}/>
        <Route path='/courses/fellowship' element={<FellowshipCoursesPage/>}/>
        <Route path='/courses/laser-practise' element={<LaserPractisePage/>}/>
        {/* Fallback for nested specific course items */}
        <Route path='/courses/*' element={<CoursePage/>}/>
        {/* Course Purchase */}
        <Route path='/course/purchase/:courseId' element={<CoursePurchase/>}/>
        <Route path='/addcourses/:courseId' element={userData?.role === "educator" ? <AddCourses/> : <Navigate to="/signup"/>}/>
        <Route path='/createcourses' element={userData?.role === "educator" ? <CreateCourse/> : <Navigate to="/signup"/>}/>
        <Route path='/createlecture/:courseId' element={userData?.role === "educator" ? <CreateLecture/> : <Navigate to="/signup"/>}/>
        <Route path='/editlecture/:courseId/:lectureId' element={userData?.role === "educator" ? <EditLecture/> : <Navigate to="/signup"/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>


      
    






      

        {/* Specific Course Routes - handled by CoursePage */}
        <Route path='/courses/permanent-makeup/masters-eyebrows' element={<CoursePage/>}/>
        <Route path='/courses/permanent-makeup/master-scalp' element={<CoursePage/>}/>
        <Route path='/courses/permanent-makeup/pg-diploma' element={<CoursePage/>}/>
        <Route path='/courses/permanent-makeup/cert-lip' element={<CoursePage/>}/>

        
        <Route path='/courses/permanent-makeup/Medical-Micropigmentation' element={<CoursePage/>}/>




        <Route path='/courses/permanent-makeup/cert-brows-lash' element={<CoursePage/>}/>
        <Route path='/courses/permanent-makeup/cert-scalp' element={<CoursePage/>}/>
        <Route path='/courses/permanent-makeup/cert-laser-hair' element={<CoursePage/>}/>   
        <Route path='/courses/permanent-makeup/cert-skin-tech' element={<CoursePage/>}/>
        <Route path='/courses/permanent-makeup/Medical-micropigmentation' element={<CoursePage/>}/>
        <Route path='/courses/cosmetology/master-chemical-peels' element={<CoursePage/>}/>
        <Route path='/courses/cosmetology/diploma-advanced' element={<CoursePage/>}/>
        <Route path='/courses/cosmetology/cert-professional' element={<CoursePage/>}/>
        <Route path='/courses/cosmetology/cert-hydrafacial' element={<CoursePage/>}/>
        <Route path='/courses/cosmetology/cert-chemical-peels' element={<CoursePage/>}/>




        <Route path='/courses/facial-aesthetics/medical' element={<CoursePage/>}/>



        <Route path='/courses/facial-aesthetics/masters' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/master-lipolytic' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/master-nose' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/master-acne' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/master-plasma' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/master-undereye' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/master-fillers' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/pg-diploma' element={<CoursePage/>}/>
        <Route path='/courses/facial-aesthetics/cert-lipolytic' element={<CoursePage/>}/>
        <Route path='/courses/fellowship/permanent-cosmetology' element={<CoursePage/>}/>
        <Route path='/courses/fellowship/facial-permanent-cosmetology' element={<CoursePage/>}/>
        <Route path='/courses/fellowship/facial-aesthetics' element={<CoursePage/>}/>
        <Route path='/courses/fellowship/permanent-micropigmentation' element={<CoursePage/>}/>
        <Route path='/courses/fellowship/facial-permanent-micropigmentation' element={<CoursePage/>}/>








      <Route path="/permanent-makeup" element={<PermanentMakeupServices />} />

        
        {/* Laser Practise nested */}
        <Route path='/courses/laser-practise/permanent-cosmetology' element={<CoursePage/>}/>
        <Route path='/courses/laser-practise/facial-permanent-cosmetology' element={<CoursePage/>}/>
        {/* Services category pages */}
        <Route path='/services/permanent-makeup' element={<ServiceCategoryPage/>}/>
        <Route path='/services/cosmetology' element={<ServiceCategoryPagelanding/>}/>
        <Route path='/services/facial-aesthetics' element={<Servicesfacialaesthetics/>}/>
        <Route path='/services/dentistry' element={<Dentistry/>}/>
        {/* Individual Services */}
        <Route path='/services/permanent-makeup/microblading' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/ombre-brows' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/powder-brows' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/combination-brows' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/lip-color' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/beauty-spot' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/lash-lift' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/eyebrows-lamination' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/scalp-micropigmentation' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/stretch-mark-camouflage' element={<IndividualServicePage/>}/>
        <Route path='/services/permanent-makeup/vitiligo-camouflage' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/vampire-facial' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/mesotherapy' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/prp-hair' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/hydrafacial' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/dermaplaning' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/medicated-facial' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/laser-hair-reduction' element={<IndividualServicePage/>}/>
        <Route path='/services/cosmetology/wellness-drips' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/botox' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/face-lift' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/thread-lift' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/nose-fillers' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/chin-jawline' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/lip-fillers' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/chemical-peels' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/acne-scar' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/vitamin-drips' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/pdrn' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/profhilo' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/hyperhidrosis' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/polynucleotides' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/exosomes' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/neck-rejuvenation' element={<IndividualServicePage/>}/>
        <Route path='/services/facial-aesthetics/hands-rejuvenation' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/veneers-dentures' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/smile-designing' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/invisalign' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/extractions' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/gum-surgeries' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/orthodontics' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/teeth-whitening' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/dental-implants' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/crown-bridges' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/gum-depigmentation' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/root-canal' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/tooth-colored-fillings' element={<IndividualServicePage/>}/>
        <Route path='/services/dentistry/oral-cancer' element={<IndividualServicePage/>}/>




        <Route path='/websitecourses' element={<Websitecourses/>}/>
        <Route path='/treatments' element={<Treatments/>}/>









                 {/* Clinics Pages */}
           <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/clinics/amritsar" element={<ClinicsPage />} />
          <Route path="/clinics/gurgaon" element={<ClinicsPage />} />
          <Route path="/clinics/jammu" element={<ClinicsPage />} />

          {/* Shop Pages */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/permanent-makeup" element={<ShopPage />} />
          <Route path="/shop/cosmetology" element={<ShopPage />} />
          <Route path="/shop/facial-aesthetics" element={<ShopPage />} />

          <Route path="/shop/product/:id" element={<ProductDetail />} />


          {/* Dynamic Service Pages (Legacy) */}
          <Route path="/services/:slug" element={<ServicePage title="" description="" />} />










        {/* Media */}
        <Route path='/media/gallery' element={<MediaPage/>}/>
        {/* Academy */}
        <Route path='/academy' element={<AcademyPage/>}/>
        {/* Contact */}
        <Route path='/contact' element={<ContactPage/>}/>
        {/* About */}
        <Route path='/about' element={<AboutUs/>}/>
         </Routes>

         </>
   
  )
}

export default App
