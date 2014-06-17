@Specials = new Meteor.Collection "specials",
  schema:
    name:
      type: String
    available:
      type: Date
    description:
      type: String
      min: 0
      max: 500
    votes:
      type: Number
      min: 0

@Specials.allow
  insert: ->
    yes
  update: ->
    yes
  remove: ->
    yes
