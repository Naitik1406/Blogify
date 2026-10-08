import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/home";
import Explore from "./pages/Explore";
import BlogDetails from "./pages/Blogdetails";
import CreateBlog from "./pages/Createblog";
import MyBlogs from "./pages/MyBlogs";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <main>
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="/create" element={<CreateBlog />} />
                    <Route path="/my-blogs" element={<MyBlogs />} />

                    <Route path="*" element={<NotFound />} />

                </Routes>
            </main>

        </BrowserRouter>
    );
}

export default App;