/**
 * Created by banquo on 03/07/17.
 */
$(function() {

    $("#search").click(function () {

        var adress = $("#adress").val();
        var url = "http://nominatim.openstreetmap.org/search/"+ adress +"?format=json&addressdetails=1&limit=1&polygon_svg=1";
        $.getJSON(url, function (data) {
            console.log(data)
        });

    });
});

