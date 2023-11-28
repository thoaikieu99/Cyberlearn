const logFeature = (req, res, next) => {
    console.log("day la middleware")
    next();
}

module.exports = {
    logFeature
}