var dataset = [
  { name: 'Direct', count: 2742 },
  { name: 'Facebook', count: 2242 },
  { name: 'Pinterest', count: 3112 },
  { name: 'Search', count: 937 },
  { name: 'Others', count: 1450 }
];

var total = 0;

dataset.forEach(function(d){
  total += d.count;
});

var pie = d3.layout.pie()
  .value(function(d){ return d.count; })
  .sort(null);

var w = 50, h = 50;

var outerRadiusArc = w / 2;
var innerRadiusArc = 115;
var shadowWidth = 15;

var outerRadiusArcShadow = innerRadiusArc + 1;
var innerRadiusArcShadow = innerRadiusArc - shadowWidth;

var color = d3.scale.ordinal()
  .range(['#41B787', '#6352B9', '#B65480', '#D5735A', '#D7D9DA']);

var chartContainers = document.querySelectorAll('.chart-container');

chartContainers.forEach(function(chartContainer) {
  var svg = d3.select(chartContainer)
    .append("svg")
    .attr({
      width: w,
      height: h,
      class: 'shadow'
    }).append('g')
    .attr({
      transform: 'translate(' + w / 2 + ',' + h / 2 + ')'
    });

  var createChart = function(svg, outerRadius, innerRadius, fillFunction, className) {
    var arc = d3.svg.arc()
      .innerRadius(outerRadius)
      .outerRadius(innerRadius);

    var path = svg.selectAll('.' + className)
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr({
        class: className,
        d: arc,
        fill: fillFunction
      });

    path.transition()
      .duration(1000)
      .attrTween('d', function(d) {
        var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t) {
          return arc(interpolate(t));
        };
      });
  };

  createChart(svg, outerRadiusArc, innerRadiusArc, function(d, i) {
    return color(d.data.name);
  }, 'path1');

  createChart(svg, outerRadiusArcShadow, innerRadiusArcShadow, function(d, i) {
    var c = d3.hsl(color(d.data.name));
    return d3.hsl((c.h + 5), (c.s - 0.07), (c.l - 0.15));
  }, 'path2');

  var addText = function(text, y, size) {
    svg.append('text')
      .text(text)
      .attr({
        'text-anchor': 'middle',
        y: y
      })
      .style({
        fill: '#929DAF',
        'font-size': size
      });
  };

  var restOfTheData = function() {
    addText(function() {
      return numberWithCommas(total);
    }, 0, '0px');

    addText(function() {
      return "Page View";
    }, 25, '0px');
  };

  setTimeout(restOfTheData, 3000);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});