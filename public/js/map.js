
  mapboxgl.accessToken = maptoken;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/standard", // Use the standard style for the map
    zoom: 10, // initial zoom level, 0 is the world view, higher values zoom in
    center: listing.geometry.coordinates, // center the map on this longitude and latitude
  });
const marker1 = new mapboxgl.Marker({color:'red'})
        .setLngLat(listing.geometry.coordinates)
        .setPopup( new mapboxgl.Popup({ offset: 25 }).setHTML(`<h5>${listing.title}</h5><p>Exact Location provided after booking!</p>`))
        .addTo(map);

