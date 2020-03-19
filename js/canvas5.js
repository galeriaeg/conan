      google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Pagina');
        data.addColumn('number', 'Tempo médio');
        data.addColumn('boolean', 'Validada');
        data.addRows([
          ['Home',  {v: 10000, f: '0:09:55'}, true],
          ['Institucional',   {v:8000,   f: '0:04:15'},  false],
          ['Produtos', {v: 12500, f: '0:03:11'}, true],
		  ['Serviços', {v: 12500, f: '0:01:17'}, true],
          ['Contato',   {v: 7000,  f: '0:01:02'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
