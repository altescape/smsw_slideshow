# SMSW Slideshow

## WARNING

Just to note: resist changing the sizes of fonts, the layout, the alignment - it's a massive pain in the arse. Even changing the background-position causes weird problems.

If there is anything you (ie Michael) need to change that is done with reveal.css, just say no!

_You have been warned!_

### Run it
* Clone this repo `git clone https://github.com/altescape/smsw_slideshow.git`.
* Install dev dependencies `npm install`
* Run `DEBUG=smsw_slideshow:* ./bin/www`.
* Open `http://localhost:3000`.

---

### Add a slide

* All slides live in `views/slides/directory_name/slide_name.jade`
* Slides are written in [Jade](http://jade-lang.com/) - you'll love it.
* When adding or removing a slide go into `views/index.jade` and add or delete the include lines - you don't need to use the jade extension.
* Images live in `public/images` - you do not need to refence `public` so urls for images are `images/picture-of-1001-imacs.jpg`.
* JavaScripts live in `public/javascripts`. The only file to edit should be `public/javascripts/app.js` - don't edit any other!!
* Stylesheets live in `public/sylesheets`. They use a language called [Stylus](http://learnboost.github.io/stylus/) - it's like LESS/SCSS but cleaner. When you edit these you don't need to compile with Grunt/Gulp - it's all taken care of by the wonderful Node Express server.

---

### Deploy

* It is deployed to [Heroku](https://dashboard.heroku.com), in case you need dashboard access (you shoudln't).
* The domain is [slideshow.smswmedia.com](slideshow.smswmedia.com) which is handled on CloudFlare.
* Look on production server for logins.

#### You will need to do the following:
* Look at these [Heroku docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) to download the Heroku Toolbelt. You then need to login via console.
* Then the only command you'll need to deploy is: `git push heroku master`

So a typical deployment runs like this...
```
git add .
git commit -m "A message here"
git push
git push heroku master
```
