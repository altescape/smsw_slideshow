# SMSW Slideshow

## Instructions

### Deployment

* Automatic deployment from master branch 

### Run it locally

* Clone this repo `git clone https://github.com/altescape/smsw_slideshow.git`.
* Install dev dependencies `npm install`
* Run `DEBUG=smsw_slideshow:* ./bin/www`.
* Open `http://localhost:3000`.

---

### Adding a slide

* All slides live in `views/slides/directory_name/slide_name.jade`
* Slides are written in [Jade](http://jade-lang.com/) - you'll love it.
* When adding or removing a slide go into `views/index.jade` and add or delete the include lines - you don't need to use the jade extension.
* Images live in `public/images` - you do not need to refence `public` so urls for images are `images/picture-of-1001-imacs.jpg`.
* JavaScripts live in `public/javascripts`. The only file to edit should be `public/javascripts/app.js` - don't edit any other!!
* Stylesheets live in `public/sylesheets`. They use a language called [Stylus](http://learnboost.github.io/stylus/) - it's like LESS/SCSS but cleaner. When you edit these you don't need to compile with Grunt/Gulp - it's all taken care of by the wonderful Node Express server.

---

### Server

* Heroku name: stormy-badlands-5749
* The domain is [slideshow.smswmedia.com](slideshow.smswmedia.com) which is handled on CloudFlare.
