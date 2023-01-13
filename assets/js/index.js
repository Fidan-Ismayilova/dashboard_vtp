// SIDEBAR TOGGLE

var sidebarOpen = false;

var sidebar = document.getElementById("sidebar");
  
function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}



// BAR CHART
var barChartOptions = {
    series: [{
    data: [20, 20, 25, 12]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed:true, 
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ["Muhasibatliq", "İnsan Resurslari", "IT", "Logistika/Satinalma",
    ],
  },
  yaxis: {
    title: {
        text: "Members count"
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();



  // DONUT CHART
  var donutChartOptions = {
    series: [20, 20, 25, 12],
    labels: ["Muhasibatliq", "İnsan Resurslari", "IT", "Logistika/Satinalma",],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var donutChart = new ApexCharts(document.querySelector("#donut-chart"), donutChartOptions);
  donutChart.render();