const blogPosts = [
  {
    title: "The Future of AI Automation in Indian Business",
    excerpt: "Discover how AI is transforming the landscape of Indian businesses...",
    date: "March 15, 2024",
    category: "AI & Automation"
  },
  {
    title: "Streamlining Operations with Startup in a Box",
    excerpt: "Learn how our comprehensive solution can revolutionize your business processes...",
    date: "March 10, 2024",
    category: "Product Updates"
  },
  {
    title: "5 Ways to Automate Your Marketing Strategy",
    excerpt: "Explore effective automation strategies for your marketing campaigns...",
    date: "March 5, 2024",
    category: "Marketing"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Latest from Our <span className="text-primary">Blog</span>
          </h1>
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02] animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.excerpt}</p>
                <button className="mt-4 text-primary font-medium hover:underline">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;