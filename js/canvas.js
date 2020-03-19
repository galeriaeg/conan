google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawColColors);

function drawColColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Homem');
      data.addColumn('number', 'Mulher');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1, 1.25],
        [{v: [9, 0, 0], f: '9 am'}, 2, 2],
        [{v: [10, 0, 0], f:'10 am'}, 3, 2],
        [{v: [11, 0, 0], f: '11 am'}, 4, 3.25],
        [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
        [{v: [13, 0, 0], f: '1 pm'}, 5.75, 6],
        [{v: [14, 0, 0], f: '2 pm'}, 7, 6],
        [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
		[{v: [16, 0, 0], f: '1 pm'}, 5.5, 5],
		[{v: [17, 0, 0], f: '1 pm'}, 5, 4],
      ]);

      var options = {
        title: 'Durante intervalo de 10h',
        colors: ['#9575cd', '#33ac71'],
        hAxis: {
          title: 'Usuario x Hora',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Acesso (1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }