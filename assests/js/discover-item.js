// Price Grapic Start
let ctx = document.getElementById("chart").getContext('2d');

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#347AE2");
gradientStroke.addColorStop(1, "#347AE2");

var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
gradientBkgrd.addColorStop(0, "#054EBA30");
gradientBkgrd.addColorStop(1, "#054EBA30");

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            //ctx.shadowColor = 'rgba(244,94,132,0.8)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 6;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["15/9", "16/9", "17/9", "18/9", "19/9", "20/9", "21/9", "22/9","23/9","24/9","25/9","26/9","27/9","28/9","29/9","30/9"],
        datasets: [{
            label: "Income",
            backgroundColor: gradientBkgrd,
            borderColor: gradientStroke,
            data: [5500, 2500, 10000, 6000, 14000, 1500, 7000,20000,500,1500,20000,10000, 6000, 14000, 1500,30000],
            pointBorderColor: "rgba(255,255,255,0)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointBorderWidth: 0,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 4,
            pointRadius: 1,
            borderWidth: 5,
            pointHitRadius: 16,
        }]
    },

    // Configuration options go here
    options: {
      tooltips: {
        backgroundColor:'#fff',
        displayColors:false,
           titleFontColor: '#000',
        bodyFontColor: '#000'
        
        },      
      legend: {
            display: false
      },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return (value / 1000) + 'K';
                    }
                }
            }],
        }
    }
});

// Price Grapic End