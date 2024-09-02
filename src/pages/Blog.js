import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "../components/layouts/Header";
import { fetchMarkdown } from "../utils/fetchMarkdown";
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization

const blogFiles = [
  { id: 1, title: "LEARN. LOVE. CODE.", filePath: `${process.env.PUBLIC_URL}/blog/blog1.md` },
  { id: 2, title: "Object Orientation Ruby", filePath: `${process.env.PUBLIC_URL}/blog/blog2.md` },
  // Add more blog posts here
];

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      const loadedBlogs = await Promise.all(
        blogFiles.map(async (blog) => {
          const content = await fetchMarkdown(blog.filePath);
          const sanitizedContent = DOMPurify.sanitize(content); // Sanitize the content
          const preview = sanitizedContent.substring(0, 148)+"..."; // Extract preview (first 3 lines)
          return { ...blog, content: sanitizedContent, preview };
        })
      );
      setBlogs(loadedBlogs);
    }
    loadBlogs();
  }, []);

  return (
    <section id="blog">
      <Header light />
      <div className="container">
        <h2 className="pheader">Blog</h2>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 col-sm-6" key={blog.id}>
              <div className="blog-post">
                <h3>{blog.title}</h3>
                <ReactMarkdown>{blog.preview}</ReactMarkdown>
                <a href={`/blog/${blog.id}`} className="btn btn-primary">
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;