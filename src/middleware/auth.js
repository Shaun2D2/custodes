module.exports = (req, res, next) => {
    try {
        // do some thing here...
    } catch(e) {
        next(e);
    }
}
