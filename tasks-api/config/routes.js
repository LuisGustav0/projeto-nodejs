module.exports = app => {
    app.post('/user', app.api.user.save)
}