exports.createPollGetController = (req, res, next) => {
    res.render('create')
}

exports.createPollPostController = (req, res, next) => {
    console.log(req.body);

    res.render('create')
}