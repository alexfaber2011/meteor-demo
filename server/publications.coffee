Meteor.publish "comments", ->
  Comments.find()
Meteor.publish "users", ->
  Users.find()