const express = require("express");
const { deleteStudent, updateStudent, getInforStudent, getStudentList, creatStudent } = require("../controllers/student.controllers");
const { logFeature } = require("../middlewares/logger/log-feature");
const studenRouter = express.Router();

studenRouter.get("/", logFeature, getStudentList)

studenRouter.get("/:id", getInforStudent)

studenRouter.post("/", creatStudent)

studenRouter.put("/:id", updateStudent)

studenRouter.delete("/:id", deleteStudent)


module.exports = studenRouter;