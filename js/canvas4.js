
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Paises', 'Speakers (in millions)'],
          ['Brasil',  5.851],
          ['USA',  2.664],
          ['Argentina', 1.316],
          ['Portugal', 1.0791]
        ]);

      var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Principais paises',
        pieStartAngle: 100,
      };

        var chart = new google.visualization.PieChart(document.getElementById('Paises'));
        chart.draw(data, options);
		
	
      }

