Meteor.publish "specials", ->
  Specials.find()
Meteor.publish "comments", ->
  Comments.find()