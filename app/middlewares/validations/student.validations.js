const checkEmty = (req, res, next) => {
    const { fullName, age, className } = req.body;
    if (fullName && age && className) {
        next();
    } else {
        res.status(500).send("KHong duoc de trong ")
    }
}

const valiClassName = (req, res, next) => {
    const { className } = req.body;
    if (className <= 0 || className > 12) {
        res.status(500).send("Lop trong khoang 1-12")
    } else {
        next()
    }
}

module.exports = {
    checkEmty,
    valiClassName
}