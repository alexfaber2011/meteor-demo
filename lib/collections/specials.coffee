@Specials = new Meteor.Collection "specials",
  schema: new SimpleSchema
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

@Specials.allow
  insert: ->
    yes
  update: ->
    yes
  remove: ->
    yes


