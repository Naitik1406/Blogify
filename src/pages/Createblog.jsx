import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getBlogs,
    saveBlogs
} from "../data/BlogStorage";

function CreateBlog() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Technology");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !title ||
            !description ||
            !author ||
            !content
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        const blogs = getBlogs();

        const newBlog = {
            id: Date.now(),
            title: title,
            description: description,
            category: category,
            author: author,

            date: new Date().toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            ),

            readTime: "5 min read",

            image:
                image ||
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643",

            content: content
        };

        const updatedBlogs = [
            newBlog,
            ...blogs
        ];

        saveBlogs(updatedBlogs);

        alert("Blog published successfully!");

        navigate("/explore");
    }

    return (
        <div className="create-page">

            <div className="create-container">

                <div className="create-header">

                    <p>CREATE</p>

                    <h1>Write a Blog</h1>

                    <span>
                        Share your thoughts and ideas
                        with the community.
                    </span>

                </div>

                <form
                    className="blog-form"
                    onSubmit={handleSubmit}
                >

                    <label>Blog Title</label>

                    <input
                        type="text"
                        placeholder="Enter your blog title"
                        value={title}
                        onChange={(event) =>
                            setTitle(event.target.value)
                        }
                    />

                    <label>Short Description</label>

                    <textarea
                        placeholder="Write a short description..."
                        value={description}
                        onChange={(event) =>
                            setDescription(event.target.value)
                        }
                    />

                    <label>Category</label>

                    <select
                        value={category}
                        onChange={(event) =>
                            setCategory(event.target.value)
                        }
                    >
                        <option>Technology</option>
                        <option>Development</option>
                        <option>Productivity</option>
                        <option>Lifestyle</option>
                    </select>

                    <label>Author</label>

                    <input
                        type="text"
                        placeholder="Your name"
                        value={author}
                        onChange={(event) =>
                            setAuthor(event.target.value)
                        }
                    />

                    <label>Cover Image URL</label>

                    <input
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        value={image}
                        onChange={(event) =>
                            setImage(event.target.value)
                        }
                    />

                    <label>Blog Content</label>

                    <textarea
                        className="content-input"
                        placeholder="Write your article here..."
                        value={content}
                        onChange={(event) =>
                            setContent(event.target.value)
                        }
                    />

                    <button
                        type="submit"
                        className="publish-button"
                    >
                        Publish Blog
                    </button>

                </form>

            </div>

        </div>
    );
}

export default CreateBlog;