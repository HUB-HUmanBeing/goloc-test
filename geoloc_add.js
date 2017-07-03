/**
 * Created by banquo on 03/07/17.
 */
$(function() {

    $("#search").click(function () {

        var address = $("#adress").val();
        var url = "http://nominatim.openstreetmap.org/search/"+ address +"?format=json&addressdetails=1&limit=1";
        $.getJSON(url, function (data) {
            console.log(data);
            var lat = data[0].lat ;
            var lon = data[0].lon ;
            var city = data[0].address.city ;
            var country = data[0].address.country;
            $('#lat').val(lat);
            $('#lon').val(lon);
            $('#city').val(city);
            $('#country').val(country);

        });

    });
});

