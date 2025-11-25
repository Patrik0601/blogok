import express from "express";
import * as Posts from "../data/post.js"
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()

router.get('/', (req, res) =>{
    const posts = Posts.getPosts()
    res.send(posts)
})

export default router