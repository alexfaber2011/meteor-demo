Router.configure
  layoutTemplate: "layout"

Router.map ->
	@route "home",
    	path: "/"
    	waitOn: ->
      		Meteor.subscribe "comments"
      		Meteor.subscribe "specials"
    @route "admin",
    	path: "/admin"
    @route "about",
    	path: "/about"
    @route "hire",
    	path: "/hire"
    @route "meteor",
    	path: "/meteor"
    @route "contact",
    	path: "/contact"