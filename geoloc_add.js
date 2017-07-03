/**
 * Created by banquo on 03/07/17.
 */
// $(function() {
//   $.ajaxSetup({
// crossOrigin: true
// });
  $("#search").click(function() {

    var data = $("#adress").val();

    // var formdata = (window.FormData) ? new FormData($form[0]) : null;
    // var data = (formdata !== null) ? formdata : $form.serialize();
    // alert(data);

    var url = "http://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=" + data + "&limit=1";
    alert(url);
    // $.getJSON("http://nominatim.openstreetmap.org/?format=json&json_callback=cbaddressdetails=1&q=" + data + "&format=json&limit=1").done(function(cb){

    $.ajax({
         url:"http://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=" + data + "&limit=1",
         dataType: 'json', // Notice! JSONP <-- P (lowercase)
         success:function(json){
             // do stuff with json (in this case an array)
             console.log(json);
             alert("Success");
         },
         error:function(){
             alert("Error");
         }
    });
// $.getJSON(url, null, function(data) {
//   $( '.result' ).html(data);
// });
//     });


});
