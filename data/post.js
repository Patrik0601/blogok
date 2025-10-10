import db from "./db.js"

db.prepare(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER;
    title TEXT,
    content TEXT,
    FOREIGN KEY (userId) REFERENCE users(id)
    )`
).run()

/**
 * fetch posts data from database
 * @returns all posts data as an array
 */
export const getPosts = () => db.prepare("SELECT * FROM posts").all();

/**
 * fetch one post's data by ID
 * @param {number} id 
 * @returns one post's data as an object 
 */
export const getPostById = (id) => 
    db.prepare("SELECT * FROM posts WHERE id = ?").get(id);

/**
 * fetch one post's data by title
 * @param {string} title
 * @returns one post's data as an object 
 */
export const getPostByTitle = (title) => 
    db.prepare("SELECT * FROM posts WHERE title = ?").get(title);

export const savePost = (userId, title, content) => 
    db.prepare("INSERT INTO posts (userId, title, content) VALUES (?, ?, ?)").run(userId, title, content);

export const deletePost = (id) => 
    db.prepare("DELETE FROM posts WHERE id = ?").run(id);

export const updateUser = (userId, title, content) => 
    db.prepare("UPDATE posts SET userId = ?, title = ?, content = ? WHERE id = ?").run(userId, title, content, id);