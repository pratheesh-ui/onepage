
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('header-active');
    } else {
       $('#header').removeClass('header-active');
    }
});   


$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#col_text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#col_text").slideUp();
    }
  });
});
