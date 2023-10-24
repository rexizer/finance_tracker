// const data = [
//   { id: 1, category: 'Активы', region: 'North America', count: 367, month: 'январь' },
//   { id: 2, category: 'Активы', region: 'Western Europe', count: 66, month: 'февраль' },
//   { id: 3, category: 'Активы', region: 'Asia', count: 53, month: 'март' },
//   { id: 4, category: 'Расходы', region: 'Latin America & Caribbean', count: 19, month: 'апрель' },
//   { id: 5, category: 'Расходы', region: 'Australia & New Zealand', count: 16, month: 'май' },
//   { id: 6, category: 'Расходы', region: 'Russian Commonwealth', count: 13, month: 'июнь' },
//   { id: 7, category: 'Активы', region: 'Eastern Europe', count: 13, month: 'июль' },
//   { id: 8, category: 'Активы', region: 'Middle East', count: 9, month: 'август' },
//   { id: 9, category: 'Расходы', region: 'North America', count: 367, month: 'сентябрь' },
//   { id: 10, category: 'Расходы', region: 'Western Europe', count: 66, month: 'октябрь' },
//   { id: 11, category: 'Активы', region: 'Asia', count: 53, month: 'ноябрь' },
//   { id: 12, category: 'Активы', region: 'Latin America & Caribbean', count: 19, month: 'декабрь' },
//   { id: 13, category: 'Активы', region: 'North America', count: 367, month: 'январь' },
//   { id: 14, category: 'Активы', region: 'Western Europe', count: 66, month: 'февраль' },
//   { id: 15, category: 'Активы', region: 'Asia', count: 53, month: 'март' },
//   { id: 16, category: 'Расходы', region: 'Latin America & Caribbean', count: 19, month: 'апрель' },
//   { id: 17, category: 'Расходы', region: 'Australia & New Zealand', count: 16, month: 'май' },
//   { id: 18, category: 'Расходы', region: 'Russian Commonwealth', count: 13, month: 'июнь' },
//   { id: 19, category: 'Активы', region: 'Eastern Europe', count: 13, month: 'июль' },
//   { id: 20, category: 'Активы', region: 'Middle East', count: 9, month: 'август' },
//   { id: 21, category: 'Расходы', region: 'North America', count: 367, month: 'сентябрь' },
//   { id: 22, category: 'Расходы', region: 'Western Europe', count: 66, month: 'октябрь' },
//   { id: 23, category: 'Активы', region: 'Asia', count: 53, month: 'ноябрь' },
//   { id: 24, category: 'Активы', region: 'Latin America & Caribbean', count: 19, month: 'декабрь' },
//   { id: 25, category: 'Активы', region: 'North America', count: 367, month: 'январь' },
//   { id: 26, category: 'Активы', region: 'Western Europe', count: 66, month: 'февраль' },
//   { id: 27, category: 'Активы', region: 'Asia', count: 53, month: 'март' },
//   { id: 28, category: 'Расходы', region: 'Latin America & Caribbean', count: 19, month: 'апрель' },
//   { id: 29, category: 'Расходы', region: 'Australia & New Zealand', count: 16, month: 'май' },
//   { id: 30, category: 'Расходы', region: 'Russian Commonwealth', count: 13, month: 'июнь' },
//   { id: 31, category: 'Активы', region: 'Eastern Europe', count: 13, month: 'июль' },
//   { id: 32, category: 'Активы', region: 'Middle East', count: 9, month: 'август' },
//   { id: 33, category: 'Расходы', region: 'North America', count: 367, month: 'сентябрь' },
//   { id: 34, category: 'Расходы', region: 'Western Europe', count: 66, month: 'октябрь' },
//   { id: 35, category: 'Активы', region: 'Asia', count: 53, month: 'ноябрь' },
//   { id: 36, category: 'Активы', region: 'Latin America & Caribbean', count: 19, month: 'декабрь' },
//   { id: 37, category: 'Активы', region: 'North America', count: 367, month: 'январь' },
//   { id: 38, category: 'Активы', region: 'Western Europe', count: 66, month: 'февраль' },
//   { id: 39, category: 'Активы', region: 'Asia', count: 53, month: 'март' },
//   { id: 40, category: 'Расходы', region: 'Latin America & Caribbean', count: 19, month: 'апрель' },
//   { id: 41, category: 'Расходы', region: 'Australia & New Zealand', count: 16, month: 'май' },
//   { id: 42, category: 'Расходы', region: 'Russian Commonwealth', count: 13, month: 'июнь' },
//   { id: 43, category: 'Активы', region: 'Eastern Europe', count: 13, month: 'июль' },
//   { id: 44, category: 'Активы', region: 'Middle East', count: 9, month: 'август' },
//   { id: 45, category: 'Расходы', region: 'North America', count: 367, month: 'сентябрь' },
//   { id: 46, category: 'Расходы', region: 'Western Europe', count: 66, month: 'октябрь' },
//   { id: 47, category: 'Активы', region: 'Asia', count: 53, month: 'ноябрь' },
//   { id: 48, category: 'Активы', region: 'Latin America & Caribbean', count: 19, month: 'декабрь' },
//   { id: 49, category: 'Активы', region: 'North America', count: 367, month: 'январь' },
//   { id: 50, category: 'Активы', region: 'Western Europe', count: 66, month: 'февраль' }
// ];

const data = [
  { category: 'Micro-Skills', label: 'Additive', count: 642 },
  { category: 'Micro-Skills', label: 'Multiplicative', count: 358 },
  { category: 'Categories', label: 'Horizontal', count: 768 },
  { category: 'Categories', label: 'Vertical', count: 232 },
  { category: 'Operations', label: 'Addition', count: 486 },
  { category: 'Operations', label: 'Subtraction', count: 156 },
  { category: 'Operations', label: 'Multiplication', count: 215 },
  { category: 'Operations', label: 'Division', count: 143 }
];


const months = data.map(item => item.month);

function calculateTotalCountForMonth(data, month) {
  return data
    .filter(item => item.month === month)
    .reduce((total, item) => total + item.count, 0);
}

months.forEach(month => {
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
  wrapper.appendChild(title);
  wrapper.appendChild(pieChartsContainer);

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
