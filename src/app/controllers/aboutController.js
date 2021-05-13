class AboutController {
    index(req, res) {
        res.render('about', {layout: 'about.handlebars'});
    }
}

module.exports = new AboutController;