Router.configure
  layoutTemplate: "layout"

Router.map ->
  @route "home",
    path: "/"
  waitOn: ->
    Meteor.subscribe "comments"
    Meteor.subscribe "specials"