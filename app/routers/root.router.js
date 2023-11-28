const express = require("express");
const studenRouter = require("./student.router");
const router = express.Router();

router.use("/students", studenRouter);


module.exports = router;
