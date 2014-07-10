Meteor.publish "comments", ->
  Comments.find()