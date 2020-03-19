google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
      var data = google.visualization.arrayToDataTable([
        ['Browser', ''],
        ['Mozilla Firefox', 8175000],
        ['Google Chrome', 6792000],
        ['Internet Explorer', 3695000],
        ['Opera', 4099000],
        ['Safari', 2526000]
      ]);

      var materialOptions = {
        chart: {
          title: ''
        },
        hAxis: {
          title: 'Total Population',
          minValue: 0,
        },
        vAxis: {
          title: 'City'
        },
        bars: 'horizontal'
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart5'));
      materialChart.draw(data, materialOptions);
    }