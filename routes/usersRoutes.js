import express from "express"
import * as User from "../data/user.js"
const router = express.Router()

router.get("/", (req, res) => {
    const users = User.getUsers()
    res.send("Users")
})

router.get("/:id", (req, res) => {
    const users = User.getUserById()
    res.send("User")
})

router.get("/email", (req, res) => {
    const users = User.getUserByEmail()
    res.send("User")
})

router.post("/", (req, res) => {
    const users = User.updateUser()
    res.send("User")
})

router.put("/:id", (req, res) => {
    const users = User.saveUser()
    res.send("User")
})

router.delete("/:id", (req, res) => {
    const users = User.deleteUser()
    res.send("User")
})

export default router