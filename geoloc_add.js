/**
 * Created by banquo on 03/07/17.
 */
$(function() {


  function initmap(lat, lon) {

    var map = L.map('mapid').setView([lat, lon], 13);
    // create the tile layer with correct attribution
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {
      minZoom: 8,
      maxZoom: 12,
      attribution: osmAttrib
    });

    // start the map

    L.marker([lat, lon]).addTo(map)
      .bindPopup('Ales')
      .openPopup();
    map.addLayer(osm);

  }

  $("#search").click(function() {

    var address = $("#adress").val();
    var url = "http://nominatim.openstreetmap.org/search/" + address + "?format=json&addressdetails=1&limit=1";
    $.getJSON(url, function(data) {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      var city = data[0].address.city;
      var country = data[0].address.country;
      $('#lat').val(lat);
      $('#lon').val(lon);
      $('#city').val(city);
      $('#country').val(country);
      initmap(lat, lon);
    });

  });

});
