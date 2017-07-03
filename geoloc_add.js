/**
 * Created by banquo on 03/07/17.
 */
$(function() {

    $("#search").click(function () {

        var adress = $("#adress").val();

        // var formdata = (window.FormData) ? new FormData($form[0]) : null;
        // var data = (formdata !== null) ? formdata : $form.serialize();
        // alert(data);

        //var url = "http://nominatim.openstreetmap.org/?format=json&json_callback=cbaddressdetails=1&q=" + data + "&format=json&limit=1&polygon_svg=1";
        var url = "http://nominatim.openstreetmap.org/search/"+ adress +"?format=json&addressdetails=1&limit=1&polygon_svg=1";
        $.getJSON(url, function (data) {

        });

    });
});

