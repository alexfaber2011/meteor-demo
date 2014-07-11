Template.home.rendered = ->
  #initialize the scrollit.js thing
  $.scrollIt()

  #figure out the height of the window and make each section's min height that.
  min_height = $(window).height()
  $('.section').css('min-height', "#{min_height}px")