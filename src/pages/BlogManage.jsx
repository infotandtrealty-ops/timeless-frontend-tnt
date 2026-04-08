// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Nav from '../components/Nav';
// import Footer from '../components/Footer';
// import { useSelector } from 'react-redux';

// const serverUrl = "https://new-website-backend-2.onrender.com"
// // const serverUrl = "https://new-website-backend-2.onrender.com"

// const BlogManage = () => {
//   const { userData } = useSelector(state => state.user);
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (userData) {
//       fetchAllBlogs();
//     }
//   }, [userData]);

//   const fetchAllBlogs = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await fetch(`${serverUrl}/api/blogs?status=all`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       const data = await response.json();
      
//       if (data.success) {
//         setBlogs(data.data);
//       } else {
//         setError('Failed to fetch blogs');
//       }
//     } catch (error) {
//       setError('Error connecting to server');
//       console.error('Error fetching blogs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (blogId) => {
//     if (!window.confirm('Are you sure you want to delete this blog?')) {
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`${serverUrl}/api/blogs/${blogId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const data = await response.json();

//       if (data.success) {
//         setBlogs(blogs.filter(blog => blog._id !== blogId));
//         alert('Blog deleted successfully');
//       } else {
//         alert('Failed to delete blog');
//       }
//     } catch (error) {
//       alert('Error deleting blog');
//       console.error('Error deleting blog:', error);
//     }
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   if (!userData) {
//     return (
//       <div className='w-[100%] overflow-hidden'>
//         <Nav />
//         <div className='min-h-screen flex justify-center items-center'>
//           <div className='text-center'>
//             <h2 className='text-2xl font-bold text-gray-900 mb-4'>Please Login</h2>
//             <p className='text-gray-600 mb-6'>You need to be logged in to access this page.</p>
//             <Link 
//               to='/login'
//               className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
//             >
//               Go to Login
//             </Link>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className='w-[100%] overflow-hidden'>
//       <Nav />
      
//       <div className='min-h-screen bg-gray-50 py-8 px-4'>
//         <div className='max-w-7xl mx-auto'>
//           <div className='flex justify-between items-center mb-8'>
//             <h1 className='text-3xl font-bold text-gray-900'>Blog Management</h1>
//             <Link 
//               to='/admin/blog/create'
//               className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
//             >
//               Create New Blog
//             </Link>
//           </div>

//           {loading ? (
//             <div className='flex justify-center items-center py-20'>
//               <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
//             </div>
//           ) : error ? (
//             <div className='text-center py-20'>
//               <p className='text-red-600 text-lg mb-4'>{error}</p>
//               <button 
//                 onClick={fetchAllBlogs}
//                 className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
//               >
//                 Try Again
//               </button>
//             </div>
//           ) : blogs.length === 0 ? (
//             <div className='text-center py-20'>
//               <p className='text-gray-600 text-lg mb-6'>No blogs found</p>
//               <Link 
//                 to='/admin/blog/create'
//                 className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
//               >
//                 Create Your First Blog
//               </Link>
//             </div>
//           ) : (
//             <div className='bg-white rounded-lg shadow-md overflow-hidden'>
//               <div className='overflow-x-auto'>
//                 <table className='w-full'>
//                   <thead className='bg-gray-50 border-b border-gray-200'>
//                     <tr>
//                       <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                         Title
//                       </th>
//                       <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                         Author
//                       </th>
//                       <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                         Status
//                       </th>
//                       <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                         Created
//                       </th>
//                       <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className='bg-white divide-y divide-gray-200'>
//                     {blogs.map((blog) => (
//                       <tr key={blog._id} className='hover:bg-gray-50'>
//                         <td className='px-6 py-4'>
//                           <div className='text-sm font-medium text-gray-900'>
//                             {blog.title}
//                           </div>
//                           {blog.slug && (
//                             <div className='text-sm text-gray-500'>
//                               /blogs/{blog.slug}
//                             </div>
//                           )}
//                         </td>
//                         <td className='px-6 py-4 text-sm text-gray-600'>
//                           {blog.author}
//                         </td>
//                         <td className='px-6 py-4'>
//                           <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                             blog.status === 'published' 
//                               ? 'bg-green-100 text-green-800' 
//                               : 'bg-yellow-100 text-yellow-800'
//                           }`}>
//                             {blog.status}
//                           </span>
//                         </td>
//                         <td className='px-6 py-4 text-sm text-gray-600'>
//                           {formatDate(blog.createdAt)}
//                         </td>
//                         <td className='px-6 py-4 text-sm'>
//                           <div className='flex space-x-2'>
//                             <Link
//                               to={`/blogs/${blog.slug}`}
//                               target='_blank'
//                               className='text-blue-600 hover:text-blue-900'
//                             >
//                               View
//                             </Link>
//                             <Link
//                               to={`/admin/blog/edit/${blog._id}`}
//                               className='text-indigo-600 hover:text-indigo-900'
//                             >
//                               Edit
//                             </Link>
//                             <button
//                               onClick={() => handleDelete(blog._id)}
//                               className='text-red-600 hover:text-red-900'
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default BlogManage;















import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// const serverUrl = "https://new-website-backend-2.onrender.com";
const serverUrl = "https://new-website-backend-2.onrender.com";

const BlogManage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const fetchAllBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${serverUrl}/api/blogs?status=all`);
      const data = await response.json();

      if (data.success) {
        setBlogs(data.data);
      } else {
        setError('Failed to fetch blogs');
      }
    } catch (error) {
      setError('Error connecting to server');
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`${serverUrl}/api/blogs/${blogId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setBlogs(prev => prev.filter(blog => blog._id !== blogId));
        alert('Blog deleted successfully');
      } else {
        alert(data.message || 'Failed to delete blog');
      }
    } catch (error) {
      alert('Error deleting blog');
      console.error('Error deleting blog:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className='w-full overflow-hidden'>
      <Nav />

      <div className='min-h-screen bg-gray-50 py-8 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900'>Blog Management</h1>

            <Link
              to='/admin/blog/create'
              className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              Create New Blog
            </Link>
          </div>

          {loading ? (
            <div className='flex justify-center items-center py-20'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            </div>
          ) : error ? (
            <div className='text-center py-20'>
              <p className='text-red-600 text-lg mb-4'>{error}</p>
              <button
                onClick={fetchAllBlogs}
                className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
              >
                Try Again
              </button>
            </div>
          ) : blogs.length === 0 ? (
            <div className='text-center py-20'>
              <p className='text-gray-600 text-lg mb-6'>No blogs found</p>
              <Link
                to='/admin/blog/create'
                className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
              >
                Create Your First Blog
              </Link>
            </div>
          ) : (
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b'>
                    <tr>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Title</th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Author</th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Status</th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Created</th>
                      <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Actions</th>
                    </tr>
                  </thead>

                  <tbody className='divide-y'>
                    {blogs.map(blog => (
                      <tr key={blog._id} className='hover:bg-gray-50'>
                        <td className='px-6 py-4'>
                          <div className='font-medium'>{blog.title}</div>
                          {blog.slug && (
                            <div className='text-sm text-gray-500'>/blogs/{blog.slug}</div>
                          )}
                        </td>
                        <td className='px-6 py-4 text-sm'>{blog.author}</td>
                        <td className='px-6 py-4'>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            blog.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {blog.status}
                          </span>
                        </td>
                        <td className='px-6 py-4 text-sm'>
                          {formatDate(blog.createdAt)}
                        </td>
                        <td className='px-6 py-4 text-sm flex gap-3'>
                          <Link
                            to={`/blogs/${blog.slug}`}
                            target='_blank'
                            className='text-blue-600 hover:underline'
                          >
                            View
                          </Link>
                          <Link
                            to={`/admin/blog/edit/${blog._id}`}
                            className='text-indigo-600 hover:underline'
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className='text-red-600 hover:underline'
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogManage;
