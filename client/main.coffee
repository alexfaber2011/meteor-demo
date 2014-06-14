Meteor.startup ->
  Deps.autorun ->
    Meteor.subscribe "comments"