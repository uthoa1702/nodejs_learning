class NewsControllers {
  // [get] /news
  index(req, res) {
    res.render('news');
  }
  // [get] /news/:slug
  detail(req, res) {
    res.send('news detail');
  }
}
module.exports = new NewsControllers();
