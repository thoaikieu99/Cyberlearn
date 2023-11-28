const { getList, creatStud, updateStud, deleteStud, getInfo } = require("../services/student.services")

const getStudentList = (req, res) => {
    const data = getList();
    if (data) {
        res.status(200).send(data)
    } else {
        res.status(404).send("Not FOund")
    }

}

const creatStudent = (req, res) => {
    const lets = creatStud(req.body);

    res.status(201).send(lets)
}

const updateStudent = (req, res) => {
    const { id } = req.params;
    const { fullName, age, className } = req.body;
    let updat = updateStud(id, fullName, age, className)
    if (updat) {
        res.status(200).send(updat)
    } else {
        res.status(404).send("Not Fin")
    }

}
const deleteStudent = (req, res) => {
    const { id } = req.params;
    let check = deleteStud(id)

    if (check) {
        res.send("delete student: " + check)
    } else {
        res.status(404).send("Not FOund")
    }
}

const getInforStudent = (req, res) => {
    const param = req.params;
    let check = getInfo(param.id);
    console.log(check);
    if (check) {
        res.send(check)
    } else {
        res.status(404).send("Not Find")
    }
}

module.exports = {
    getStudentList,
    creatStudent,
    updateStudent,
    deleteStudent,
    getInforStudent
}