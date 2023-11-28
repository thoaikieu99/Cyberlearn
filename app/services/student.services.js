const data = [
    {
        "id": "1",
        "fullName": "kieu quang thien",
        "className": "14",
        "age": "12"
    },
    {
        "id": "2",
        "fullName": "thien vu",
        "className": "2",
        "age": "52"
    },
    {
        "id": "3",
        "fullName": "kianai",
        "className": "12",
        "age": "18"
    }
]


const getList = () => {
    if (data) {
        return data;
    } else {
        return false;
    }
}
const creatStud = (user) => {
    let id = Math.floor(Math.random() * 100);
    let arrr = { id, ...user }
    data.push(arrr);
    return arrr;
}

const updateStud = (id, fullName, age, className) => {

    let stu = data.findIndex((arr) => arr.id == id);
    if (stu != -1) {
        data[stu] = { ...data[stu], fullName, age, className }
        return data[stu];
    } else {
        res.status(404).send("Not Fin")
    }
}

const deleteStud = (id) => {
    let find = data.findIndex((arr) => arr.id == id);
    console.log(find)
    if (find !== -1) {
        let getName = data[find]?.fullName;
        data.splice(find, 1);
        return getName;
    } else {
        false
    }
}

const getInfo = (id) => {

    let stude = data.findIndex((arr) =>
        arr.id == id
    )

    if (stude !== -1) {
        return data[stude];
    } else {
        return false;
    }
}
module.exports = {
    getList,
    creatStud,
    updateStud,
    deleteStud,
    getInfo
}