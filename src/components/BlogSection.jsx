


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const serverUrl = "https://new-website-backend-2.onrender.com";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomeBlogs();
  }, []);

  const fetchHomeBlogs = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/blogs?page=1&limit=3`);
      const data = await response.json();

      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error("Error fetching home blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10">
        Latest <span style={{ color: "#D4AF37" }}>Blogs</span>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog._id} className="border-b pb-6">
              <img
                src={blog.thumbnail || "https://via.placeholder.com/600x400"}
                alt={blog.title}
                className="w-full h-52 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                <Link to={`/blogs/${blog.slug}`}>
                  {blog.title}
                </Link>
              </h3>

              <Link
                to={`/blogs/${blog.slug}`}
                className="text-sm font-bold"
                style={{ color: "#D4AF37" }}
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link
          to="/blogs"
          className="px-6 py-2 border"
          style={{ borderColor: "#D4AF37", color: "#D4AF37" }}
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;




// export default BlogSection;