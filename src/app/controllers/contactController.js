class ContactController {
    index(req, res) {
        res.render('contact', {layout: 'contact.handlebars'});
    }
}

module.exports = new ContactController;