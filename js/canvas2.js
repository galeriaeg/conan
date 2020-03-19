google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Mes', 'Home','Institucional','Produtos','Serviços','Contato'],
          ['Jan',  1200,495,805,630,558],
          ['Fev',  1170,660,925,250,450],
          ['Mar',  1260,720,812,290,478],
          ['Abr',  1010,540,439,99,202]
        ]);

        var options = {
          title: 'Performance',
          hAxis: {title: 'Ano: 2020',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart'));
        chart.draw(data, options);
      }

