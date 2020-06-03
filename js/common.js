$(function() {
  $('#navbar-toggler').on('click', function(e) {
    $('#navbar-small-nav').toggle()
  })
  $('#navbar-small-nav .nav-small-link').on('click', function (e) {
    $('#navbar-small-nav').hide()
  })
})