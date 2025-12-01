import express from "express";
import * as Posts from "../data/post.js"

const router = express.Router()

router.get('/', (req, res) =>{
    const posts = Posts.getPosts()
    res.send(posts)
})

export default router