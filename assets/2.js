// function sliceSize(dataNum, dataTotal) {
//   return (dataNum / dataTotal) * 360;
// }

// function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
//   console.log('addSlice called with:', id, sliceSize, pieElement, offset, sliceID, color);

//   // sliceID = "s" + dataCount + "-" + sliceCount; // Произвольное значение

//   // Очищаем sliceID от недопустимых символов
//   sliceID = sliceID.replace(/[^\w-]/g, '_');
//   $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
//   var offset = offset - 1;
//   var sizeRotation = -179 + sliceSize;

//   $(id + " ." + sliceID).css({
//     "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
//   });

//   $(id + " ." + sliceID + " span").css({
//     "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
//     "background-color": color
//   });
// }

// function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
//   console.log('iterateSlices called with:', id, sliceSize, pieElement, offset, dataCount, sliceCount, color);
//   var
//     maxSize = 179,
//     sliceID = "s" + dataCount + "-" + sliceCount;

//   if( sliceSize <= maxSize ) {
//     addSlice(id, sliceSize, pieElement, offset, sliceID, color);
//   } else {
//     addSlice(id, maxSize, pieElement, offset, sliceID, color);
//     iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
//   }
// }

// function createPie(pieChartElement, categoryData) {
//   const listData = categoryData.map(item => item.count);
//   const listTotal = listData.reduce((total, count) => total + count, 0);
//   let offset = 0;
//   let i = 0;
//   const pieElement = pieChartElement.querySelector('.pie-chart__pie');
//   let dataElement = pieChartElement.querySelector('.pie-chart__legend');
  
//   let color = [
//     "rgb(187,228,255)",
//     "rgb(2,166,209)",
//     "rgb(5,116,206)",
//     "rgb(239,71,111)",
//     "rgb(255,209,102)",
//     "rgb(6,214,160)",
//     "rgb(172,78,221)",
//     "rgb(255,140,62)",
//     "rgb(0,188,212)",
//     "rgb(194,24,91)",
//     "rgb(230,74,25)",
//     "rgb(103,58,183)"
//   ];

//   color = shuffle(color);
//   // console.log(pieChartElement, dataElement);
//   // dataElement.innerHTML = ''; // Очищаем элемент .pie-chart__legend

//   for (i = 0; i < listData.length; i++) {
//     const size = sliceSize(listData[i], listTotal);
//     iterateSlices(pieChartElement, size, pieElement, offset, i, 0, color[i]);
//     // Создаем элементы span в .pie-chart__legend и заполняем их данными
//     const legendItem = document.createElement('li');
//     legendItem.innerHTML = "<span>" + categoryData[i].region + "</span>";
//     dataElement.appendChild(legendItem);
//     legendItem.style.borderColor = color[i];
//     offset += size;
//   }
// }

// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }

//     return a;
// }


// function createPieCharts() {
//   // Получите уникальные категории данных
//   const categories = [...new Set(data.map(item => item.category))];

//   // Создайте элементы pie-chart для каждой категории
//   categories.forEach(category => {
//     // Фильтруйте данные для текущей категории
//     const categoryData = data.filter(item => item.category === category);

//     // Создайте контейнер для категории и задайте соответствующий класс
//     const categoryContainer = document.createElement('div');
//     categoryContainer.classList.add('pieID--category-' + category, 'pie-chart--wrapper');

//     // Создайте заголовок для категории
//     const categoryTitle = document.createElement('h2');
//     categoryTitle.textContent = 'Category ' + category;

//     // Создайте круговую диаграмму
//     const categoryChart = createPie(categoryContainer, categoryData);

//     // Добавьте заголовок и круговую диаграмму в контейнер категории
//     categoryContainer.appendChild(categoryTitle);
//     categoryContainer.appendChild(categoryChart);

//     // Добавьте контейнер категории в основной контейнер
//     const pieChartsContainer = document.querySelector('.pie-charts');
//     console.log(pieChartsContainer, "check");
//     pieChartsContainer.appendChild(categoryContainer);
//   });
// }


// createPieCharts();
function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}

function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
  // console.log('addSlice called with:', id, sliceSize, pieElement, offset, sliceID, color);

  // Очищаем sliceID от недопустимых символов
  // sliceID = sliceID.replace(/[^\w-]/g, '_');
  $(pieElement).append("<div class='slice " + sliceID + "'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;

  // Выбираем только что созданный элемент по классу sliceID
  var slice = $(pieElement).find("." + sliceID);

  slice.css({
    "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
  });

  slice.find("span").css({
    "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
    "background-color": color
  });

  // $(id + " ." + sliceID).css({
  //   "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
  // });

  // $(id + " ." + sliceID + " span").css({
  //   "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
  //   "background-color": color
  // });
}

function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
 
  var maxSize = 179;
  var sliceID = "s" + dataCount + "-" + sliceCount;

  if (sliceSize <= maxSize) {
    addSlice(id, sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(id, maxSize, pieElement, offset, sliceID, color);
    iterateSlices(id, sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
  }
}

function createPie(pieChartElement, categoryData) {
  const listData = categoryData.map(item => item.count);
  const listTotal = listData.reduce((total, count) => total + count, 0);
  var offset = 0;
  var i = 0;
  var pieElement = $(pieChartElement).find('.pie-chart__pie');
  var dataElement = $(pieChartElement).find('.pie-chart__legend');

  var color = [
    "rgb(187,228,255)",
    "rgb(2,166,209)",
    "rgb(5,116,206)",
    "rgb(239,71,111)",
    "rgb(255,209,102)",
    "rgb(6,214,160)",
    "rgb(172,78,221)",
    "rgb(255,140,62)",
    "rgb(0,188,212)",
    "rgb(194,24,91)",
    "rgb(230,74,25)",
    "rgb(103,58,183)"
  ];

  shuffle(color);

  for (i = 0; i < listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(pieChartElement, size, pieElement, offset, i, 0, color[i]);

    var legendItem = $("<li><span>" + categoryData[i].region + "</span></li>");
    dataElement.append(legendItem);
    legendItem.css("border-color", color[i]);
    offset += size;
  }
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function createPieCharts() {
  // Получите уникальные категории данных
  var categories = [...new Set(data.map(item => item.category))];

  // Создайте элементы pie-chart для каждой категории
  categories.forEach(category => {
    // Фильтруйте данные для текущей категории
    var categoryData = data.filter(item => item.category === category);

    // Создайте контейнер для категории и задайте соответствующий класс
    var categoryContainer = $("<div class='pieID--category-" + category + " pie-chart--wrapper'></div>");

    // Создайте заголовок для категории
    var categoryTitle = $("<h2>Category " + category + "</h2>");

    // Создайте круговую диаграмму
    createPie(categoryContainer, categoryData);

    // Добавьте заголовок и круговую диаграмму в контейнер категории
    categoryContainer.append(categoryTitle);

    // Добавьте контейнер категории в основной контейнер
    var pieChartsContainer = $('.pie-charts');
    // console.log(pieChartsContainer, "check");
    pieChartsContainer.append(categoryContainer);
  });
}

createPieCharts();
