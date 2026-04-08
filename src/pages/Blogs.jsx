import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// const serverUrl = "https://new-website-backend-2.onrender.com"
const serverUrl = "https://new-website-backend-2.onrender.com"



const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const THEME_COLOR = "#D4AF37"; // Aapka Gold Color

  useEffect(() => {
    fetchBlogs();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${serverUrl}/api/blogs?page=${page}&limit=6`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.data);
        setTotalPages(data.pagination.pages);
      } else {
        setError('Unable to load blogs at the moment.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      if (error.message.includes('Unexpected token')) {
        setError('Server returned invalid response. Please check if backend is deployed correctly.');
      } else {
        setError('Server connection error.');
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className='w-full bg-white'>
      <Nav />
      
      {/* Header Section */}
      <div className='pt-32 pb-16 px-4 border-b border-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2'>
            Timeless <span style={{ color: THEME_COLOR }}>Blogs</span>
          </h1>
          <p className='text-gray-500 text-sm tracking-wide uppercase'>
            Latest Trends in Permanent Makeup & Aesthetics
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-12'>
        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='h-80 bg-gray-50 animate-pulse rounded-lg'></div>
            ))}
          </div>
        ) : error ? (
          <div className='text-center py-20'>
            <p className='text-gray-600 mb-4'>{error}</p>
            <button 
              onClick={fetchBlogs} 
              className='px-6 py-2 border rounded-md transition-all'
              style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {blogs.map((blog) => (
                <article key={blog._id} className='group border-b border-gray-100 pb-8'>
                  <Link to={`/blogs/${blog.slug}`} className='block mb-5 overflow-hidden rounded-sm'>
                    <img 
                      src={blog.thumbnail || 'https://via.placeholder.com/600x400'} 
                      alt={blog.title}
                      className='w-full h-60 object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500'
                    />
                  </Link>

                  <div className='space-y-3'>
                    <div className='flex items-center text-[10px] tracking-widest uppercase text-gray-400 font-bold'>
                      <span>{formatDate(blog.createdAt)}</span>
                      <span className='mx-2'>|</span>
                      <span style={{ color: THEME_COLOR }}>{blog.author}</span>
                    </div>
                    
                    <h2 className='text-xl font-semibold text-gray-900 leading-tight group-hover:opacity-70 transition-opacity'>
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h2>
                    
                    <p className='text-gray-600 text-sm line-clamp-2 font-light leading-relaxed'>
                      {blog.metaDescription || "Click to read the full clinical insights on this procedure."}
                    </p>
                    
                    <Link 
                      to={`/blogs/${blog.slug}`}
                      className='inline-block pt-2 text-xs font-bold uppercase tracking-tighter border-b-2 transition-all'
                      style={{ borderBottomColor: THEME_COLOR }}
                    >
                      Read Full Story
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className='flex justify-center items-center mt-16 space-x-6'>
                <button
                  onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className='text-sm uppercase tracking-widest disabled:opacity-30'
                  style={{ color: page === 1 ? '#ccc' : THEME_COLOR }}
                >
                  Prev
                </button>
                
                <span className='text-xs font-bold text-gray-400'>
                  {page} / {totalPages}
                </span>
                
                <button
                  onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                  className='text-sm uppercase tracking-widest disabled:opacity-30'
                  style={{ color: page === totalPages ? '#ccc' : THEME_COLOR }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;