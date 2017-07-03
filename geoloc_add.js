/**
 * Created by banquo on 03/07/17.
 */
$(function() {

  $("#search").click(function() {

    var data = $("#adress").val();

    // var formdata = (window.FormData) ? new FormData($form[0]) : null;
    // var data = (formdata !== null) ? formdata : $form.serialize();
    // alert(data);

    var url = "http://nominatim.openstreetmap.org/?format=json&json_callback=cbaddressdetails=1&q=" + data + "&format=json&limit=1";
    alert(url);
    $.getJSON("http://nominatim.openstreetmap.org/?format=json&json_callback=cbaddressdetails=1&q=" + data + "&format=json&limit=1");
  });

  cb({

  });
});
