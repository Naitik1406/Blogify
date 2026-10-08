import { Link, useParams } from "react-router-dom";
import { getBlogs } from "../data/BlogStorage";

function BlogDetails() {
    const { id } = useParams();

    const blogs = getBlogs();

    const blog = blogs.find(
        (item) => item.id === Number(id)
    );

    if (!blog) {
        return (
            <div className="blog-not-found">

                <h1>Blog Not Found</h1>

                <p>
                    Sorry, the article you are looking
                    for is not available.
                </p>

                <Link to="/explore">
                    ← Back to Explore
                </Link>

            </div>
        );
    }

    return (
        <article className="blog-details">

            <Link
                to="/explore"
                className="back-link"
            >
                ← Back to Explore
            </Link>

            <div className="details-header">

                <span className="details-category">
                    {blog.category}
                </span>

                <h1>{blog.title}</h1>

                <p className="details-description">
                    {blog.description}
                </p>

                <div className="details-meta">

                    <span>
                        By {blog.author}
                    </span>

                    <span>
                        {blog.date}
                    </span>

                    <span>
                        {blog.readTime}
                    </span>

                </div>

            </div>

            <img
                src={blog.image}
                alt={blog.title}
                className="details-image"
            />

            <div className="details-content">

                <p>{blog.content}</p>

                <p>
                    Technology and ideas continue to
                    change the way we work, learn and
                    communicate. Understanding these
                    changes can help us make better
                    decisions and discover new
                    opportunities.
                </p>

                <p>
                    The best way to learn is to stay
                    curious, experiment with new ideas
                    and keep improving every day.
                </p>

            </div>

        </article>
    );
}

export default BlogDetails;