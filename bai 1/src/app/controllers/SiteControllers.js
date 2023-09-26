class SiteControllers {
  home(req, res) {
    res.render('home');
  }

  list(req, res) {
    res.render('list');
  }
}
module.exports = new SiteControllers();
