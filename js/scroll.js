$(document).ready(function(){

  for(var i=0; i< 22; i++){
      $("#scroll").append(i+ '<li><span class="tests"><i class="fa fa-envira" aria-hidden="true"></i></span></li>');
  }

  scroll();
});
 $(document).on("click" , "#btn", function() {
   $("#overlay").append("<p>bokuhatako</p>");　/*ふわっと表示*/

   $("#overlay").fadeIn();　/*ふわっと表示*/
 });
$(document).on("click" , "#overlay" ,function() {
   $("#overlay").fadeOut();　/*ふわっと消える*/
});

// scroll metkod
function scroll(){
  var height = $('#scroll').outerHeight();

  $('#scroll').on('scroll', function() {
    if((this.scrollTop + height) == this.scrollHeight) {
      console.log("呼ばれた")
      for(var i =0; i< 20; i++){
        $("#scroll").append(i+'<li>sssss<div id="btn">click</div> <a href="#" id="dtest " class="jqModal">view</a></li>');
      }
    }
  });
}
