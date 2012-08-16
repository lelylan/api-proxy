# Lelylan API Proxy

Lelylan API proxy for [Lelylan](http://dev.lelylan.com)


## Requirements

People API proxy is tested against Node 0.6.11.


## Installation

Clone the repository.

    git clone git@github.com:lelylan/api.git

Run Node server (nodemon reload when changes are applied).

    nodemon server.js

## Deploay

Read the [Node.js on Heroku](https://devcenter.heroku.com/articles/nodejs) article.

## Resources

* [Lelylan API](http://dev.lelylan.com)


## Contributing

Fork the repo on github and send a pull requests with topic branches. Do not forget to 
provide specs to your contribution.


### Automatically run specs

* Fork and clone the repository.
* Run `gem install bundler` to get the latest for the gemset.
* Run `bundle install` for dependencies.
* Run `bundle exec guard` and press enter to execute all specs.

### Manually run specs

To get direct control on your specs use jasmine-node.
  
    node_modules/jasmine-node/bin/jasmine-node spec/

## Spec guidelines

Follow [rspec best practices](https://docs.google.com/document/d/1gi00-wwPaLk5VvoAJhBVNh9Htw4Rwmj-Ut88T4M2MwI/edit?hl=en#) guidelines. It does not matter they are ruby related.

## Coding guidelines

Follow [github](https://github.com/styleguide/) guidelines.


## Feedback

Use the [issue tracker](http://github.com/lelylan/api/issues) for bugs.
[Mail](mailto:touch@lelylan.com) or [Tweet](http://twitter.com/lelylan) us for any idea that can improve the project.


## Links 

* [GIT Repository](http://github.com/lelylan/api)
* [Lelylan Dev Center](http://dev.lelylan.com)
* [Lelylan Site](http://lelylan.com)


## Authors

[Andrea Reginato](http://twitter.com/andreareginato)


## Contributors

Special thanks to the following people for submitting patches.


## Changelog

See [CHANGELOG](api/blob/master/CHANGELOG.md)


## Copyright

Copyright (c) 2013 [Lelylan](http://lelylan.com). See [LICENSE](api/blob/master/LICENSE.md) for details.

