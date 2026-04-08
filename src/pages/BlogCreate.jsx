import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// const serverUrl = "https://new-website-backend-2.onrender.com";
const serverUrl = "https://new-website-backend-2.onrender.com";

const BlogCreate = () => {
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
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
      const response = await fetch(`${serverUrl}/api/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Blog created successfully!');
        setTimeout(() => navigate('/admin/blogs'), 1500);
      } else {
        setError(data.message || 'Failed to create blog');
      }
    } catch (err) {
      setError('Server connection error. Please try again.');
      console.error('Error creating blog:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full overflow-hidden'>
      <Nav />

      <div className='min-h-screen bg-gray-50 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-md p-6 md:p-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>
              Create New Blog
            </h1>

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
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Blog Title *
                </label>
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
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Thumbnail URL
                </label>
                <input
                  type='url'
                  name='thumbnail'
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Meta Title
                </label>
                <input
                  type='text'
                  name='metaTitle'
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Meta Description
                </label>
                <textarea
                  name='metaDescription'
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows={3}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Author
                </label>
                <input
                  type='text'
                  name='author'
                  value={formData.author}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Content *
                </label>
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
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Status
                </label>
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
                  {loading ? 'Creating...' : 'Create Blog'}
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

export default BlogCreate;
