const express = require("express");
const { deleteStudent, updateStudent, getInforStudent, getStudentList, creatStudent } = require("../controllers/student.controllers");
const { logFeature } = require("../middlewares/logger/log-feature");
const { checkEmty, valiClassName } = require("../middlewares/validations/student.validations");
const studenRouter = express.Router();

studenRouter.get("/", logFeature, getStudentList)

studenRouter.get("/:id", getInforStudent)

studenRouter.post("/", checkEmty, valiClassName, creatStudent)

studenRouter.put("/:id", valiClassName, updateStudent)

studenRouter.delete("/:id", deleteStudent)


module.exports = studenRouter;