// const data = [
//   { category: 'Активы', label: 'North America', count: 367, month: 'январь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'январь', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'январь', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'январь', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'январь', continent: 'Australia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'февраль', continent: 'Eastern Europe' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'февраль', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'февраль', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'февраль', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'март', continent: 'Western Europe' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'март', continent: 'Latin America' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'март', continent: 'Asia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'март', continent: 'Eastern Europe' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'апрель', continent: 'Australia' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'апрель', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'апрель', continent: 'Russian Commonwealth' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'апрель', continent: 'Western Europe' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'май', continent: 'North America' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'май', continent: 'Asia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'май', continent: 'Eastern Europe' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'май', continent: 'Australia' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'июнь', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'июнь', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'июнь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'июнь', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'июль', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'июль', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'июль', continent: 'Australia' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'июль', continent: 'Russian Commonwealth' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'август', continent: 'Middle East' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'август', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'август', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'август', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'сентябрь', continent: 'Latin America' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'сентябрь', continent: 'Eastern Europe' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'сентябрь', continent: 'Australia' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'сентябрь', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'октябрь', continent: 'Russian Commonwealth' },
//   { category: 'Активы', label: 'North America', count: 367, month: 'октябрь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'октябрь', continent: 'Western Europe' },
//   { category: 'Расходы', label: 'Asia', count: 53, month: 'октябрь', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'ноябрь', continent: 'Latin America' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'ноябрь', continent: 'Eastern Europe' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'ноябрь', continent: 'Australia' },
//   { category: 'Расходы', label: 'Middle East', count: 9, month: 'ноябрь', continent: 'Middle East' },
//   { category: 'Активы', label: 'Russian Commonwealth', count: 13, month: 'ноябрь', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'декабрь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'декабрь', continent: 'Western Europe' },
//   { category: 'Расходы', label: 'Asia', count: 53, month: 'январь', continent: 'Asia' },
//   { category: 'Активы', label: 'South America', count: 42, month: 'март', continent: 'South America' },
//   { category: 'Активы', label: 'Africa', count: 28, month: 'апрель', continent: 'Africa' },
//   { category: 'Активы', label: 'Oceania', count: 17, month: 'май', continent: 'Oceania' },
//   { category: 'Активы', label: 'Antarctica', count: 2, month: 'июнь', continent: 'Antarctica' },
//   { category: 'Активы', label: 'Caribbean', count: 15, month: 'июль', continent: 'Caribbean' },
//   { category: 'Активы', label: 'Central America', count: 30, month: 'август', continent: 'Central America' },
//   { category: 'Активы', label: 'Arctic', count: 9, month: 'сентябрь', continent: 'Arctic' },
//   { category: 'Активы', label: 'Northern Asia', count: 11, month: 'октябрь', continent: 'Northern Asia' },
//   { category: 'Активы', label: 'Northeast Asia', count: 24, month: 'ноябрь', continent: 'Northeast Asia' },
//   { category: 'Активы', label: 'Central Europe', count: 25, month: 'декабрь', continent: 'Central Europe' },
//   { category: 'Расходы', label: 'Southern Africa', count: 20, month: 'март', continent: 'Southern Africa' },
//   { category: 'Расходы', label: 'Eastern Africa', count: 22, month: 'апрель', continent: 'Eastern Africa' },
//   { category: 'Расходы', label: 'Western Africa', count: 31, month: 'май', continent: 'Western Africa' },
//   { category: 'Расходы', label: 'Northern Asia', count: 12, month: 'июнь', continent: 'Northern Asia' },
//   { category: 'Расходы', label: 'Eastern Europe', count: 18, month: 'июль', continent: 'Eastern Europe' },
//   { category: 'Расходы', label: 'Southern Asia', count: 37, month: 'август', continent: 'Southern Asia' },
//   { category: 'Расходы', label: 'Central Asia', count: 8, month: 'сентябрь', continent: 'Central Asia' },
//   { category: 'Расходы', label: 'Western Asia', count: 25, month: 'октябрь', continent: 'Western Asia' },
//   { category: 'Расходы', label: 'Northeast Asia', count: 16, month: 'ноябрь', continent: 'Northeast Asia' },
//   { category: 'Расходы', label: 'Southeast Asia', count: 31, month: 'декабрь', continent: 'Southeast Asia' },
//   { category: 'Активы', label: 'North America', count: 367, month: 'январь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'январь', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'январь', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'январь', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'январь', continent: 'Australia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'февраль', continent: 'Eastern Europe' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'февраль', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'февраль', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'февраль', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'март', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'март', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'март', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'март', continent: 'Australia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'апрель', continent: 'Eastern Europe' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'апрель', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'апрель', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'апрель', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'май', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'май', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'май', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'май', continent: 'Australia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'июнь', continent: 'Eastern Europe' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'июнь', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'июнь', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'июнь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'июль', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'июль', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'июль', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'июль', continent: 'Australia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'август', continent: 'Eastern Europe' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'август', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'август', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'август', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'сентябрь', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'сентябрь', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'сентябрь', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'сентябрь', continent: 'Australia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'октябрь', continent: 'Eastern Europe' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'октябрь', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'октябрь', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'октябрь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'ноябрь', continent: 'Western Europe' },
//   { category: 'Активы', label: 'Asia', count: 53, month: 'ноябрь', continent: 'Asia' },
//   { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'ноябрь', continent: 'Latin America' },
//   { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'ноябрь', continent: 'Australia' },
//   { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'декабрь', continent: 'Eastern Europe' },
//   { category: 'Активы', label: 'Middle East', count: 9, month: 'декабрь', continent: 'Middle East' },
//   { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'декабрь', continent: 'Russian Commonwealth' },
//   { category: 'Расходы', label: 'North America', count: 367, month: 'декабрь', continent: 'North America' },
//   { category: 'Активы', label: 'Western Europe', count: 66, month: 'январь', continent: 'Western Europe' },
// ];

// const quotedData = data.map(item => ({
//   'category': item.category,
//   'label': item.label,
//   'count': item.count,
//   'month': item.month,
//   'continent': item.continent
// }));

// let data = [

// ]

// // let data = [
// //   {"date": "2023-10-25 12:34:45.873545", "spending": 400, "category": "да", "commentary": "да"}, 
// //   {"date": "2023-10-25 12:38:21.667487", "spending": 500, "category": "да", "commentary": "да"},
// //   {"date": "2023-10-25 12:43:58.870762", "spending": 400, "category": "продукты", "commentary": "хлеб"},
// //   {"date": "2023-10-25 12:44:35.322798", "spending": 500, "category": "продукты", "commentary": "ладу"},
// //   {"date": "2023-10-25 12:45:10.535477", "spending": 100, "category": "продукты", "commentary": "бесплалв"}
// // ]
let data = [
  {"date": "2023-10-25 12:34:45.873545", "spending": 400, "category": "да", "commentary": "да"}, 
  {"date": "2023-10-25 12:38:21.667487", "spending": 500, "category": "да", "commentary": "да"},
  {"date": "2023-10-25 12:43:58.870762", "spending": 400, "category": "продукты", "commentary": "хлеб"},
  {"date": "2023-10-25 12:44:35.322798", "spending": 500, "category": "продукты", "commentary": "ладу"},
  {"date": "2023-10-25 12:45:10.535477", "spending": 100, "category": "продукты", "commentary": "бесплалв"}
];

const monthss = [
  'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
];

let modifiedData = data.map(item => {
  const date = new Date(item.date);
  const monthName = monthss[date.getMonth()]; // Получаем название месяца
  return {
    month: monthName,
    count: item.spending,
    continent: item.category,
    label: item.commentary,
    category: "Расходы"
  };
});

console.log(modifiedData);

// console.log(modifiedData);




// let data = {{ user_info.about }};

// let data = document.querySelector("footer").innerHTML
// console.log(data)

const months = data.map(item => item.month);
const createdBlocks = {}; // Объект для отслеживания уже созданных блоков

function calculateTotalCountForMonth(data, month) {
  return data
    .filter(item => item.month === month)
    .reduce((total, item) => total + item.count, 0);
}

months.forEach(month => {
  if (!createdBlocks[month]) { // Проверяем, был ли уже создан блок для данного месяца
    const block = document.createElement('div');
    block.classList.add('block');

    const chartContainer = document.createElement('div');
    chartContainer.classList.add('chart-container');

    const blockTitle = document.createElement('div');
    blockTitle.classList.add('block__title');
    blockTitle.textContent = calculateTotalCountForMonth(data, month) + ' Р';

    const blockText = document.createElement('div');
    blockText.classList.add('block__text');
    blockText.textContent = `Расходы за ${month}`;

    block.appendChild(chartContainer);
    block.appendChild(blockTitle);
    block.appendChild(blockText);

    const blocksContainer = document.querySelector('.blocks');
    blocksContainer.appendChild(block);

    createdBlocks[month] = true; // Устанавливаем флаг, что блок для данного месяца создан
  }
});




const wrappers = document.querySelector('.wrappers'); // Получаем элемент с классом 'wrappers'

months.forEach(month => {
  // Создаем элемент .wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  // Создаем заголовок
  const title = document.createElement('h1');
  title.classList.add('wrapper-title');
  title.textContent = `Member Stats for ${month}`;

  // Создаем контейнер для круговых диаграмм
  const pieChartsContainer = document.createElement('div');
  pieChartsContainer.classList.add('pie-charts');

  // Создаем круговую диаграмму для интересов
  const interestsChart = createPieChart('Interests');
  pieChartsContainer.appendChild(interestsChart);

  // Создаем круговую диаграмму для регионов
  const regionsChart = createPieChart('Region');
  pieChartsContainer.appendChild(regionsChart);

  // Добавляем созданные элементы в .wrapper
  // wrapper.appendChild(title);
  // wrapper.appendChild(pieChartsContainer);

  // Добавляем .wrapper в .wrappers
  wrappers.appendChild(wrapper);
});

function createPieChart(title) {
  // Создаем элемент .pieID--operations pie-chart--wrapper
  const pieChartWrapper = document.createElement('div');
  pieChartWrapper.classList.add('pieID--operations', 'pie-chart--wrapper');

  // Создаем заголовок
  const chartTitle = document.createElement('h2');
  chartTitle.textContent = title;

  // Создаем круговую диаграмму
  const pieChart = document.createElement('div');
  pieChart.classList.add('pie-chart');

  const pie = document.createElement('div');
  pie.classList.add('pie-chart__pie');

  const legend = document.createElement('ul');
  legend.classList.add('pie-chart__legend');

  pieChart.appendChild(pie);
  pieChart.appendChild(legend);

  pieChartWrapper.appendChild(chartTitle);
  pieChartWrapper.appendChild(pieChart);

  return pieChartWrapper;
}


