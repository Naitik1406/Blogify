import { useState } from "react";

import BlogCard from "../components/BlogCard";

import { getBlogs } from "../data/BlogStorage";

function Explore() {

    const [blogs] = useState(getBlogs());

    const [search, setSearch] = useState("");

    const [category, setCategory] =
        useState("All");

    const categories = [
        "All",
        "Technology",
        "Productivity",
        "Development",
        "Lifestyle"
    ];

    const filteredBlogs = blogs.filter((blog) => {

        const matchesSearch =
            blog.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            blog.category === category;

        return (
            matchesSearch &&
            matchesCategory
        );
    });

    return (
        <div className="explore-page">

            <section className="explore-header">

                <p>DISCOVER</p>

                <h1>
                    Explore Articles
                </h1>

                <span>
                    Find stories, ideas and knowledge
                    worth reading.
                </span>

            </section>

            <div className="search-section">

                <input
                    type="text"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />

            </div>

            <div className="categories">

                {categories.map((item) => (

                    <button
                        key={item}
                        onClick={() =>
                            setCategory(item)
                        }
                        className={
                            category === item
                                ? "category active"
                                : "category"
                        }
                    >
                        {item}
                    </button>

                ))}

            </div>

            <section className="blog-grid">

                {filteredBlogs.length > 0 ? (

                    filteredBlogs.map((blog) => (

                        <BlogCard
                            key={blog.id}
                            blog={blog}
                        />

                    ))

                ) : (

                    <div className="no-results">

                        <h2>
                            No articles found
                        </h2>

                        <p>
                            Try searching for something else.
                        </p>

                    </div>

                )}

            </section>

        </div>
    );
}

export default Explore;