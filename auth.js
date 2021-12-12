const auth = function(req, res, next) {
    if (req.session.email) {
        next()
    } else {
        res.json({
            done: 400,
            msg: "auth fail, login first"
        })
    }
}

exports.auth = auth