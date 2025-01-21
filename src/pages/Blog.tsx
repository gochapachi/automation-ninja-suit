import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Bookmark,
  ChevronRight,
  Filter,
  Search,
  Tag
} from "lucide-react";

const categories = [
  "All Posts",
  "AI & Automation",
  "Marketing",
  "Sales",
  "HR Tech",
  "Support",
  "Accounting",
  "Industry News"
];

const generateBlogPosts = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `The Future of ${i % 2 === 0 ? 'AI' : 'Automation'} in Indian Business ${i + 1}`,
    excerpt: "Discover how AI is transforming the landscape of Indian businesses...",
    date: new Date(2024, 2, 15 - i).toLocaleDateString(),
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    readTime: `${Math.floor(Math.random() * 10) + 5} min read`,
    bookmarks: Math.floor(Math.random() * 100) + 10
  }));
};

const Blog = () => {
  const [posts, setPosts] = useState(generateBlogPosts(6));
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView) {
        // Load more posts when the user scrolls to the bottom
        setPosts(prev => [...prev, ...generateBlogPosts(3)]);
      }
    },
  });

  const filteredPosts = posts.filter(post => 
    (selectedCategory === "All Posts" || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 flex items-center justify-between group ${
                        selectedCategory === category ? 'bg-primary/10 text-primary' : 'text-gray-600'
                      }`}
                    >
                      <span>{category}</span>
                      <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${
                        selectedCategory === category ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="grid gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="group perspective-1000 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {post.readTime}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Bookmark className="w-4 h-4" />
                            {post.bookmarks}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Button 
                          variant="ghost"
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors"
                        >
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Infinite Scroll Trigger */}
            <div ref={ref} className="h-20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;