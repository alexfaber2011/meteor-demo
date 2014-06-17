Template.specialsList.helpers
  specials: ->
    console.log "[specialsList helper]"
    Specials.find {},
      sort:
        votes: -1