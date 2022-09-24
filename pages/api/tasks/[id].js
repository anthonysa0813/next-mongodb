import Task from "../../models/Task"
import { connectDB } from "../../utils/config"

connectDB()

export default async function Handler (req, res)  {
    console.log(req.query)
    const {method, body, query: {id}} = req
    switch (method) {
        case "GET":
            try {
                const task = await Task.findById(id)
                if(!task){
                    return res.status(404).json({
                        error: "Task not found"
                })}
                return res.status(200).json(task)
            } catch (error) {
                res.status(500).json(error.message)
            }
        case "PUT":
            try {
                const updateTask = await Task.findByIdAndUpdate(id, body, {
                    new: true
                })
                if(!updateTask){
                    return res.status(404).json({
                        message: "Task not found"
                    })
                }
                return res.status(200).json(updateTask)
            } catch (error) {
                res.status(500).json(error.message)
            }
        case "DELETE":
            try {
                const deleteTask = await Task.findByIdAndDelete(id)
                if(!deleteTask){
                    return res.status(404).json({
                        message: "Task not found"
                    })
                }
                return res.status(200).json({
                    message: `Task deleted ${id}`
                })
            } catch (error) {
                res.status(500).json(error.message)
            }
        default:
            break;
    }

    return  res.status(200).json("recieved")
}