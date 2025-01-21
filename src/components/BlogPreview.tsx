import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const BlogPreview = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  });

  useEffect(() => {
    // Cleanup function
    return () => {
      if (entry?.target) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
      }
    };
  }, [entry]);

  const posts = [
    {
      title: "The Future of AI Automation in Indian Business",
      description: "Explore how AI automation is transforming the Indian business landscape and what it means for your company.",
      date: "Mar 16, 2024",
      category: "AI & Automation",
    },
    {
      title: "Maximizing Efficiency with Startup in a Box",
      description: "Learn how our comprehensive solution can streamline your business operations and boost productivity.",
      date: "Mar 15, 2024",
      category: "Product",
    },
    {
      title: "5 Ways to Automate Your Marketing Operations",
      description: "Discover practical strategies to leverage automation in your marketing efforts for better results.",
      date: "Mar 14, 2024",
      category: "Marketing",
    },
  ];

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Our Blog
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Insights & Updates
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay updated with the latest trends in AI automation and business
            efficiency.
          </p>
        </div>
        <div
          ref={ref}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {posts.map((post, index) => (
            <article
              key={index}
              className={`flex flex-col items-start transform transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary">
                    <Link to="/blog">
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};