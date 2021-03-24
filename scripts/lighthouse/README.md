# The scripts/lighthouse folder

the index.js script is a script that is supposed to be run as a pre-push git hook. It should check if your website passes the required lighthouse scores.

The config.js has some options for you to fiddle with in. If you need to change other behavior that is not there, you'll have to implement it yourself. In that case, I hope my code is well documented.

Note that the certificates this folder holds are used **ONLY** for testing https. They should absolutely **NEVER** be used anywhere else, especially considering I'm commiting them to git. make your own production certificates, if you want https in your website on production.