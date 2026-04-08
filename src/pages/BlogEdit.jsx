// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Nav from '../components/Nav';
// import Footer from '../components/Footer';
// import { useSelector } from 'react-redux';

// const serverUrl = "https://new-website-backend-2.onrender.com"
// // const serverUrl = "https://new-website-backend-2.onrender.com"

// const BlogEdit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { userData } = useSelector(state => state.user);
  
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     thumbnail: '',
//     metaTitle: '',
//     metaDescription: '',
//     author: 'Timeless Aesthetics',
//     status: 'draft'
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [fetchLoading, setFetchLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Check if user is authenticated
//   useEffect(() => {
//     if (!userData) {
//       navigate('/login');
//     }
//   }, [userData, navigate]);

//   // Fetch existing blog data
//   useEffect(() => {
//     fetchBlog();
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`${serverUrl}/api/blogs/admin/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const data = await response.json();

//       if (data.success) {
//         setFormData({
//           title: data.data.title,
//           content: data.data.content,
//           thumbnail: data.data.thumbnail || '',
//           metaTitle: data.data.metaTitle || '',
//           metaDescription: data.data.metaDescription || '',
//           author: data.data.author,
//           status: data.data.status
//         });
//       } else {
//         setError('Blog not found');
//       }
//     } catch (error) {
//       setError('Failed to fetch blog data');
//       console.error('Error fetching blog:', error);
//     } finally {
//       setFetchLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`${serverUrl}/api/blogs/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSuccess('Blog updated successfully!');
//         setTimeout(() => {
//           navigate('/blogs');
//         }, 2000);
//       } else {
//         setError(data.message || 'Failed to update blog');
//       }
//     } catch (error) {
//       setError('Server connection error. Please try again.');
//       console.error('Error updating blog:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!userData) {
//     return (
//       <div className='w-[100%] overflow-hidden'>
//         <Nav />
//         <div className='min-h-screen flex justify-center items-center'>
//           <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   if (fetchLoading) {
//     return (
//       <div className='w-[100%] overflow-hidden'>
//         <Nav />
//         <div className='min-h-screen flex justify-center items-center'>
//           <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className='w-[100%] overflow-hidden'>
//       <Nav />
      
//       <div className='min-h-screen bg-gray-50 py-8 px-4'>
//         <div className='max-w-4xl mx-auto'>
//           <div className='bg-white rounded-lg shadow-md p-6 md:p-8'>
//             <h1 className='text-3xl font-bold text-gray-900 mb-8'>Edit Blog</h1>
            
//             {error && (
//               <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
//                 {error}
//               </div>
//             )}
            
//             {success && (
//               <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700'>
//                 {success}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className='space-y-6'>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Blog Title *
//                 </label>
//                 <input
//                   type='text'
//                   name='title'
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                   placeholder='Enter blog title'
//                 />
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Thumbnail URL
//                 </label>
//                 <input
//                   type='url'
//                   name='thumbnail'
//                   value={formData.thumbnail}
//                   onChange={handleChange}
//                   className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                   placeholder='https://example.com/image.jpg'
//                 />
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Meta Title
//                 </label>
//                 <input
//                   type='text'
//                   name='metaTitle'
//                   value={formData.metaTitle}
//                   onChange={handleChange}
//                   className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                   placeholder='SEO title (optional)'
//                 />
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Meta Description
//                 </label>
//                 <textarea
//                   name='metaDescription'
//                   value={formData.metaDescription}
//                   onChange={handleChange}
//                   rows={3}
//                   className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                   placeholder='SEO description (optional)'
//                 />
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Author
//                 </label>
//                 <input
//                   type='text'
//                   name='author'
//                   value={formData.author}
//                   onChange={handleChange}
//                   className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                   placeholder='Author name'
//                 />
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Content *
//                 </label>
//                 <textarea
//                   name='content'
//                   value={formData.content}
//                   onChange={handleChange}
//                   required
//                   rows={15}
//                   className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                   placeholder='Write your blog content here (HTML supported)'
//                 />
//                 <p className='mt-2 text-sm text-gray-500'>
//                   You can use HTML tags for formatting (e.g., &lt;p&gt;, &lt;h1&gt;, &lt;strong&gt;, etc.)
//                 </p>
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Status
//                 </label>
//                 <select
//                   name='status'
//                   value={formData.status}
//                   onChange={handleChange}
//                   className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                 >
//                   <option value='draft'>Draft</option>
//                   <option value='published'>Published</option>
//                 </select>
//               </div>

//               <div className='flex gap-4'>
//                 <button
//                   type='submit'
//                   disabled={loading}
//                   className='flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
//                 >
//                   {loading ? 'Updating...' : 'Update Blog'}
//                 </button>
                
//                 <button
//                   type='button'
//                   onClick={() => navigate('/blogs')}
//                   className='flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors'
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default BlogEdit;





import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const serverUrl = "https://new-website-backend-2.onrender.com";
// const serverUrl = "https://new-website-backend-2.onrender.com";

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    thumbnail: '',
    metaTitle: '',
    metaDescription: '',
    author: 'Timeless Aesthetics',
    status: 'draft',
  });

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setFetchLoading(true);
      setError('');

      const response = await fetch(`${serverUrl}/api/blogs/${id}`);
      const data = await response.json();

      if (data.success) {
        setFormData({
          title: data.data.title,
          content: data.data.content,
          thumbnail: data.data.thumbnail || '',
          metaTitle: data.data.metaTitle || '',
          metaDescription: data.data.metaDescription || '',
          author: data.data.author || 'Timeless Aesthetics',
          status: data.data.status || 'draft',
        });
      } else {
        setError('Blog not found');
      }
    } catch (err) {
      setError('Failed to fetch blog data');
      console.error('Error fetching blog:', err);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${serverUrl}/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Blog updated successfully!');
        setTimeout(() => navigate('/admin/blogs'), 1500);
      } else {
        setError(data.message || 'Failed to update blog');
      }
    } catch (err) {
      setError('Server connection error');
      console.error('Error updating blog:', err);
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className='w-full overflow-hidden'>
        <Nav />
        <div className='min-h-screen flex justify-center items-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='w-full overflow-hidden'>
      <Nav />

      <div className='min-h-screen bg-gray-50 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-md p-6 md:p-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>Edit Blog</h1>

            {error && (
              <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
                {error}
              </div>
            )}

            {success && (
              <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700'>
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Blog Title *</label>
                <input
                  type='text'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Thumbnail URL</label>
                <input
                  type='url'
                  name='thumbnail'
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Meta Title</label>
                <input
                  type='text'
                  name='metaTitle'
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Meta Description</label>
                <textarea
                  name='metaDescription'
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows={3}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Author</label>
                <input
                  type='text'
                  name='author'
                  value={formData.author}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Content *</label>
                <textarea
                  name='content'
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={15}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Status</label>
                <select
                  name='status'
                  value={formData.status}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg'
                >
                  <option value='draft'>Draft</option>
                  <option value='published'>Published</option>
                </select>
              </div>

              <div className='flex gap-4'>
                <button
                  type='submit'
                  disabled={loading}
                  className='flex-1 bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50'
                >
                  {loading ? 'Updating...' : 'Update Blog'}
                </button>

                <button
                  type='button'
                  onClick={() => navigate('/admin/blogs')}
                  className='flex-1 bg-gray-200 py-3 rounded-lg'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogEdit;
