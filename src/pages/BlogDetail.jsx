import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const serverUrl = "https://new-website-backend-2.onrender.com";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);

      // Fetch Main Blog
      const response = await fetch(`${serverUrl}/api/blogs/slug/${slug}`);
      const data = await response.json();

      if (data.success) {
        setBlog(data.data);
        document.title = `${data.data.title} | Timeless Aesthetics`;
      } else {
        setError('Blog post not found');
      }

      // Fetch Other Blogs for Sidebar
      const response2 = await fetch(`${serverUrl}/api/blogs?page=1&limit=6`);
      const data2 = await response2.json();

      if (data2.success) {
        const filtered = data2.data.filter(b => b.slug !== slug);
        setOtherBlogs(filtered.slice(0, 4));
      }

    } catch (error) {
      setError('Connection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center bg-white'>
        <div className='w-10 h-10 border-2 border-gray-200 border-t-[#D4AF37] rounded-full animate-spin'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className='w-full bg-[#FCFAFA] selection:bg-[#D4AF37]/10'>
      <Nav />

      <article className='pt-28 pb-24'>

        {/* Header */}
        <header className='max-w-3xl mx-auto px-6 mb-12 text-center'>
          <div className='mb-6 flex items-center justify-center gap-4'>
            <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]'>
              Clinical Journal
            </span>
            <span className='w-1 h-1 bg-gray-300 rounded-full'></span>
            <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400'>
              {new Date(blog.createdAt).toLocaleDateString('en-GB', {
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>

          <h1 className='text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug mb-6'>
            {blog.title}
          </h1>

          <div className='h-[2px] w-12 bg-[#D4AF37] mx-auto'></div>
        </header>

        {/* Feature Image */}
        {blog.thumbnail && (
          <div className='max-w-4xl mx-auto px-6 mb-16'>
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className='w-full h-[400px] object-cover rounded-lg shadow-lg'
            />
          </div>
        )}

        {/* ===== CONTENT + SIDEBAR GRID ===== */}
        <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12'>

          {/* LEFT SIDE - MAIN BLOG */}
          <div className='lg:col-span-2'>

            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className='prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-li:marker:text-[#D4AF37]'
            />

            {/* Author Section */}
            <footer className='mt-20 pt-8 border-t border-gray-100 flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-black text-[#D4AF37] flex items-center justify-center rounded-full font-serif text-lg'>
                  {blog.author?.charAt(0)}
                </div>
                <div className='flex flex-col'>
                  <span className='text-[9px] uppercase tracking-widest text-gray-400 font-bold'>
                    Published By
                  </span>
                  <span className='text-sm font-semibold text-gray-900'>
                    {blog.author}
                  </span>
                </div>
              </div>

              <Link
                to='/blogs'
                className='text-[10px] font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2 group'
              >
                <span className='w-6 h-[1px] bg-[#D4AF37] group-hover:w-10 transition-all'></span>
                All Stories
              </Link>
            </footer>
          </div>

          {/* RIGHT SIDE - SIDEBAR */}
          <div className='lg:col-span-1'>
            <div className='sticky top-28'>

              <h3 className='text-xs uppercase tracking-widest text-gray-400 mb-6'>
                More Articles
              </h3>

              {otherBlogs.map((item) => (
                <Link
                  key={item._id}
                  to={`/blogs/${item.slug}`}
                  className='flex gap-4 mb-6 group'
                >
                  <img
                    src={item.thumbnail || 'https://via.placeholder.com/150'}
                    alt={item.title}
                    className='w-20 h-20 object-cover rounded-md'
                  />

                  <div>
                    <p className='text-[10px] text-gray-400 mb-1'>
                      {new Date(item.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>

                    <h4 className='text-sm font-semibold text-gray-800 group-hover:text-[#D4AF37] transition'>
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}

            </div>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;