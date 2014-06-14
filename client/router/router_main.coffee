Router.configure
  layoutTemplate: "layout"
  notFoundTemplate: "notfound"
  loadingTemplate: "loading"

Router.map ->
  @router "home",
    path: "/"
  waitOn: ->
    Meteor.subscribe "comments"
    Meteor.subscribe "specials"