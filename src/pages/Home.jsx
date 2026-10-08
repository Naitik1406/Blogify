import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">

            <section className="hero">

                <p className="hero-small">
                    WELCOME TO BLOGIFY
                </p>

                <h1>
                    Stories, ideas and
                    <span> knowledge.</span>
                </h1>

                <p className="hero-text">
                    Explore interesting articles, share your ideas,
                    and discover something new every day.
                </p>

                <div className="hero-buttons">

                    <Link to="/explore" className="primary-btn">
                        Explore Blogs
                    </Link>

                    <Link to="/create" className="secondary-btn">
                        Write a Blog
                    </Link>

                </div>

            </section>

        </div>
    );
}

export default Home;