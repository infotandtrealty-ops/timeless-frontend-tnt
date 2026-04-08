import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Nav";
import Footer from "../components/Footer";

const MediaPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogPosts, setBlogPosts] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = location.pathname.split("/").filter(Boolean);
    const type = path[1];

    if (type === "blogs") {
      setActiveTab("blogs");
      loadBlogPosts();
    } else if (type === "gallery") {
      setActiveTab("gallery");
      loadGalleryItems();
    } else {
      setActiveTab("blogs");
      loadBlogPosts();
    }
  }, [location.pathname]);

  const loadBlogPosts = () => {
    setLoading(true);
    const posts = [
      {
        id: "1",
        title: "The Complete Guide to Permanent Makeup Aftercare",
        excerpt: "Learn everything about caring for your permanent makeup.",
        author: "Dr. Anshul",
        date: "2024-01-15",
        category: "Permanent Makeup",
        image: "/assets/blogs/1.jfif",
        readTime: "5 min read"
      },
      {
        id: "2",
        title: "Understanding Different Types of Chemical Peels",
        excerpt: "A guide to choosing the right chemical peel for you.",
        author: "Dr. Anshul",
        date: "2024-01-10",
        category: "Cosmetology",
        image: "/assets/blogs/2.jfif",
        readTime: "7 min read"
      }
    ];
    setBlogPosts(posts);
    setLoading(false);
  };

  const loadGalleryItems = () => {
    setLoading(true);
    const items = Array.from({ length: 6 }, (_, i) => ({
      id: String(i + 1),
      title: `Gallery Image ${i + 1}`,
      description: "Beautiful transformation results",
      image: `/images/gallery/${i + 1}.png`,
      date: "2024-01-01",
    }));
    setGalleryItems(items);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* HERO SECTION */}
      <div
        className="relative text-white py-28 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/filler.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {activeTab === "blogs" ? "Our Blog" : "Gallery"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {activeTab === "blogs"
              ? "Stay updated with the latest trends and insights"
              : "Explore our amazing before & after results"}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-16">
        {/* BLOG SECTION */}
        {activeTab === "blogs" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition p-0" key={post.id}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs border rounded">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="font-bold text-lg line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 line-clamp-3 mt-1">{post.excerpt}</p>

                  <div className="flex justify-between text-sm text-gray-500 mt-4 mb-5">
                    <span>👤 {post.author}</span>
                    <span>📅 {new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="block w-full text-center py-2 bg-black text-white rounded hover:bg-gray-900 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        ) : (
          /* GALLERY SECTION */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />
                </div>

                <div className="p-5">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 my-4">
                    📅 <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full text-center py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MediaPage;
