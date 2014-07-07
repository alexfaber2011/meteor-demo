Template.specialItem.helpers
  available: ->
    moment(this.available).format('YYYY MM DD')

Template.specialItem.events
  "click #vote": ->
    Specials.update
      _id: @._id
    ,
      $inc:
        votes: 1
  "click #remove": ->
    Specials.remove _id: @._id