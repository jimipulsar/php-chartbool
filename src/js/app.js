var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

$(document).ready(function() {

    $.ajax({
        url: 'http://localhost/php/php-chartbool-master/server.php',
        method: 'GET',
        success: function(data) {
            var results = JSON.parse(data);

            console.log(results);

            for (var i = 0; i < results.length; i++) {
              var result = results[i];
            }

            printChart(results);

        },
        error: function() {
            alert('Si è verificato un errore');
        }
    });

    $.ajax({
        url: 'http://localhost/php/php-chartbool-master/server2.php',
        method: 'GET',
        success: function(data) {
            var results = JSON.parse(data);

            console.log(results);

            for (var i = 0; i < results.length; i++) {
              var result = results[i];
            }

            printChartMilestone2(results);

        },
        error: function() {
            alert('Si è verificato un errore');
        }
    });

});

function printChart(result) {

  var chart = new Chart($('#milestone-1'), {
    type: 'line',
    data: {
      labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
      datasets: [{
        label: 'Milestone 1 database',
        backgroundColor: '#e15151',
        borderColor: '#851f1f',
        data: result,
      }]
    }
  });
}


function printChartMilestone2(results) {
  var dataMilestone2Line = results['fatturato']['data'];
  printLineChart($('#milestone-2-line'), months, 'Milestone 2 - Line', dataMilestone2Line);

  var dataMilestone2Pie = results['fatturato_by_agent']['data'];
  var processedMilestone2Pie = processMilestone2Data(dataMilestone2Pie);
  printPieChart($('#milestone-2-pie'), processedMilestone2Pie.labels, processedMilestone2Pie.data);
}

function processMilestone2Data(results) {
  var processedMilestone2Pie = {
    labels: [],
    data: []
  };

  for (var agente in results) {
    processedMilestone2Pie.labels.push(agente);
    processedMilestone2Pie.data.push(results[agente]);
  }

  return processedMilestone2Pie;
}

function printPieChart(selettore, labels, results) {
  new Chart(selettore, {
    type: 'pie',
    data: {
      datasets: [{
        backgroundColor: ['green', 'blue', 'orange', 'red'],
        borderColor: '#851f1f',
        data: results
      }],
      labels: labels
    }
  });
}

function printLineChart(selettore, labels, title, results) {
  new Chart(selettore, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: title,
        backgroundColor: '#0bc1a1',
        borderColor: '#056d5b',
        data: results,
      }]
    }
  });
}
