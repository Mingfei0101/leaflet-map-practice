var planes = [  //declared an array (planes) which has a range of values 
    ["7C6B07",-40.99497,174.50808],     //each row including an identifier (the first column) and latitude and longitude values.
    ["7C6B38",-41.30269,173.63696],
    ["7C6CA1",-41.49413,173.5421],
    ["7C6CA2",-40.98585,174.50659],
    ["C81D9D",-40.93163,173.81726],
    ["C82009",-41.5183,174.78081],
    ["C82081",-41.42079,173.5783],
    ["C820AB",-42.08414,173.96632],
    ["C820B6",-41.51285,173.53274]
    ];

var map = L.map('map').setView([-41.3058, 174.82082], 8);
    mapLink = 
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

    for (var i = 0; i < planes.length; i++) {
        marker = new L.marker([planes[i][1],planes[i][2]])
            .bindPopup(planes[i][0])
            .addTo(map);
    }

var polyline = L.polyline([ // adding a line(path) to the map
    [-40.99497, 174.50808],
    [-41.49413,173.5421],
    [-40.93163,173.81726],
    [-41.42079,173.5783],
    [-41.51285,173.53274]],
    {       
        color: 'red',               // adding line options
        weight: 8,
        opacity: .7,
        dashArray: '20,15',
        lineJoin: 'round'
    }
    ).addTo(map);