$(document).ready(function() {
  // Обработчик события клика для элементов блоков
  $('.block').on('click', function() {
    // Очистка предыдущих диаграмм, если они существуют
    clearCharts();

    // Получите месяц из выбранного блока
    const selectedMonth = $(this).find('.block__text').text().split(' ')[2];
    
    // Фильтруйте данные только для выбранного месяца
    const selectedMonthData = filterDataByMonth(data, selectedMonth);
    
    // Вызовите функцию для создания диаграмм только для выбранного месяца
    createPieCharts(selectedMonthData);
  });
});

function clearCharts() {
  // Удалите все элементы диаграмм из контейнера
  $('.wrapper').empty();
}

function createPieCharts(data) {
    var months = getUniqueMonths(data);

    months.forEach(function(month) {
        var monthData = filterDataByMonth(data, month);

        $('.wrapper').append(
            '<h1>' + month + '</h1>' +
            '<div class="pie-charts">' +
            '<div class="pie-chart--wrapper">' +
            '<h2>Активы</h2>' +
            '<div class="pie-chart">' +
            '<div class="pie-chart__pie" id="' + 'active-pie-' + month + '"></div>' +
            '<ul class="pie-chart__legend" id="' + 'active-legend-' + month + '"></ul>' +
            '</div>' +
            '</div>' +
            '<div class="pie-chart--wrapper">' +
            '<h2>Расходы</h2>' +
            '<div class="pie-chart">' +
            '<div class="pie-chart__pie" id="' + 'expense-pie-' + month + '"></div>' +
            '<ul class="pie-chart__legend" id="' + 'expense-legend-' + month + '"></ul>' +
            '</div>' +
            '</div>' +
            '</div>'
        );

        createPie('#active-pie-' + month, '#active-legend-' + month, filterDataByCategory(monthData, 'Активы'));
        createPie('#expense-pie-' + month, '#expense-legend-' + month, filterDataByCategory(monthData, 'Расходы'));
    });
}

function getUniqueMonths(data) {
    var months = data.map(function(item) {
        return item.month;
    });
    return [...new Set(months)];
}

function filterDataByMonth(data, month) {
    return data.filter(function(item) {
        return item.month === month;
    });
}

function filterDataByCategory(data, category) {
    return data.filter(function(item) {
        return item.category === category;
    });
}

function groupDataByCategory(data) {
  var groupedData = {};
  data.forEach(function(item) {
      if (!groupedData[item.category]) {
          groupedData[item.category] = [];
      }
      groupedData[item.category].push({ label: item.label, count: item.count });
  });

  return Object.keys(groupedData).map(function(category) {
      return {
          category: category,
          values: groupedData[category]
      };
  });
}

function createPie(pieElementId, legendElementId, values) {
  var listData = [];
  var listTotal = 0;
  var offset = 0;
  var color = ["cornflowerblue", "olivedrab", "orange", "tomato", "crimson", "purple", "turquoise", "forestgreen", "navy"];
  color = shuffle(color);

  values.forEach(function(value, index) {
      listData.push(Number(value.count));
      $(legendElementId).append('<li class="' + value.continent + '"><em>' + value.label + '</em><span>' + value.count + '</span></li>');
  });

  for (var i = 0; i < listData.length; i++) {
      listTotal += listData[i];
  }

  for (var i = 0; i < listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(pieElementId, size, offset, i, 0, color[i]);
      $(legendElementId + ' li:nth-child(' + (i + 1) + ')').css('border-color', color[i]);
      offset += size;
  }
}

function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}

function iterateSlices(pieElementId, sliceSize, offset, dataCount, sliceCount, color) {
  var maxSize = 179;
  var sliceID = 's' + dataCount + '-' + sliceCount;

  if (sliceSize <= maxSize) {
      addSlice(pieElementId, sliceSize, offset, sliceID, color);
  } else {
      addSlice(pieElementId, maxSize, offset, sliceID, color);
      iterateSlices(pieElementId, sliceSize - maxSize, offset + maxSize, dataCount, sliceCount + 1, color);
  }
}

function addSlice(pieElementId, sliceSize, offset, sliceID, color) {
  $(pieElementId).append('<div class="slice ' + sliceID + ' "><span></span></div>');
  offset = offset - 1;
  var sizeRotation = -179 + sliceSize;

  $(pieElementId + ' .' + sliceID).css({
      'transform': 'rotate(' + offset + 'deg) translate3d(0,0,0)'
  });

  $(pieElementId + ' .' + sliceID + ' span').css({
      'transform': 'rotate(' + sizeRotation + 'deg) translate3d(0,0,0)',
      'background-color': color
  });
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
  }
  return a;
}