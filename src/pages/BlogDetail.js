import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Header from "../components/layouts/Header";
import { fetchMarkdown } from "../utils/fetchMarkdown";

const blogFiles = [
  { id: 1, title: "LEARN. LOVE. CODE.", filePath: `${process.env.PUBLIC_URL}/blog/blog1.md` },
  { id: 2, title: "Object Orientation Ruby", filePath: `${process.env.PUBLIC_URL}/blog/blog2.md` },
  // Add more blog posts here
];

function BlogDetail() {
  const { id } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function loadBlog() {
      const blogFile = blogFiles.find((blog) => blog.id === parseInt(id));
      if (blogFile) {
        const content = await fetchMarkdown(blogFile.filePath);
        setBlog({ ...blogFile, content });
      }
    }
    loadBlog();
  }, [id]);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const currentIndex = blogFiles.findIndex((blog) => blog.id === parseInt(id));
  const nextBlog = currentIndex < blogFiles.length - 1 ? blogFiles[currentIndex + 1] : null;
  const prevBlog = currentIndex > 0 ? blogFiles[currentIndex - 1] : null;

  const handleNext = () => {
    if (nextBlog) {
      history.push(`/blog/${nextBlog.id}`);
    }
  };

  const handlePrev = () => {
    if (prevBlog) {
      history.push(`/blog/${prevBlog.id}`);
    }
  };

  return (
    <section id="blog-detail">
      <Header light />
      <div className="container">
        <h2>{blog.title}</h2>
        <ReactMarkdown>{blog.content}</ReactMarkdown>
        <div className="navigation-buttons">
          <button className="btn btn-primary" onClick={handlePrev} disabled={!prevBlog}>
            Previous Post
          </button>
          <button className="btn btn-primary" onClick={handleNext} disabled={!nextBlog}>
            Next Post
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;