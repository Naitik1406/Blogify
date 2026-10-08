import blogs from "./blog";

const STORAGE_KEY = "blogify-blogs";

export function getBlogs() {
    const savedBlogs = localStorage.getItem(STORAGE_KEY);

    if (savedBlogs) {
        return JSON.parse(savedBlogs);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));

    return blogs;
}

export function saveBlogs(blogsList) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(blogsList)
    );
}