const auth = function(req, res, next) {
    if (req.session.email) {
        next()
    } else {
        res.json({
            done: false,
            message: "auth fail, login first"
        })
    }
}

exports.auth = auth