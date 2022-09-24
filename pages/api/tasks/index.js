import { connectDB } from "../../utils/config"
import Task from "../../models/Task"
connectDB()

export default async function handler(req , res) {
    switch (req.method) {
      case "GET":
        try {
          const tasks = await Task.find()
          return res.status(200).json(tasks)
        } catch (error) {
          return res.status(500).json({ error: error.message})
        }
      case "POST":
        try {
          const {title, description} = req.body
          const newTask = new Task({title, description})
          await newTask.save()
          return res.status(200).json(newTask)
        } catch (error) {
          return res.status(500).json({ error: error.message })
        }
      default:
        return res.status(400).json({message: "the method is not supported"})
    }
}
  