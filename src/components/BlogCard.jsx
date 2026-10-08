import { Link } from "react-router-dom";

function BlogCard({ blog }) {
    return (
        <article className="blog-card">

            <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
            />

            <div className="blog-content">

                <span className="blog-category">
                    {blog.category}
                </span>

                <h2>{blog.title}</h2>

                <p>{blog.description}</p>

                <div className="blog-footer">

                    <span>
                        {blog.author}
                    </span>

                    <span>
                        {blog.readTime}
                    </span>

                </div>

                <Link
                    to={`/blog/${blog.id}`}
                    className="read-button"
                >
                    Read Article →
                </Link>

            </div>

        </article>
    );
}

export default BlogCard;