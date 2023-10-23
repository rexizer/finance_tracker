const data = [
  { id: 1, category: 1, region: 'North America', count: 367, month: 'январь' },
  { id: 2, category: 1, region: 'Western Europe', count: 66, month: 'февраль' },
  { id: 3, category: 1, region: 'Asia', count: 53, month: 'март' },
  { id: 4, category: 2, region: 'Latin America & Caribbean', count: 19, month: 'апрель' },
  { id: 5, category: 2, region: 'Australia & New Zealand', count: 16, month: 'май' },
  { id: 6, category: 2, region: 'Russian Commonwealth', count: 13, month: 'июнь' },
  { id: 7, category: 3, region: 'Eastern Europe', count: 13, month: 'июль' },
  { id: 8, category: 3, region: 'Middle East', count: 9, month: 'август' },
  { id: 9, category: 3, region: 'North America', count: 367, month: 'сентябрь' },
  { id: 10, category: 3, region: 'Western Europe', count: 66, month: 'октябрь' },
  { id: 11, category: 3, region: 'Asia', count: 53, month: 'ноябрь' },
  { id: 12, category: 3, region: 'Latin America & Caribbean', count: 19, month: 'декабрь' },
  { id: 13, category: 3, region: 'Australia & New Zealand', count: 16, month: 'январь' },
  { id: 14, category: 3, region: 'Russian Commonwealth', count: 13, month: 'февраль' },
  { id: 15, category: 3, region: 'Eastern Europe', count: 13, month: 'март' },
  { id: 16, category: 3, region: 'Middle East', count: 9, month: 'апрель' },
  { id: 17, category: 3, region: 'South Africa', count: 7, month: 'май' },
  { id: 18, category: 3, region: 'North Africa', count: 6, month: 'июнь' },
  { id: 19, category: 3, region: 'Baltics', count: 2, month: 'июль' },
  { id: 20, category: 4, region: 'South Africa', count: 7, month: 'август' },
  { id: 21, category: 4, region: 'North Africa', count: 6, month: 'сентябрь' },
  { id: 22, category: 5, region: 'Baltics', count: 2, month: 'октябрь' },
  { id: 23, category: 5, region: 'Central Asia', count: 10, month: 'ноябрь' },
  { id: 24, category: 6, region: 'Scandinavia', count: 18, month: 'декабрь' },
  { id: 25, category: 6, region: 'Southeast Asia', count: 30, month: 'январь' }
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
  legend.innerHTML = "";

  pieChart.appendChild(pie);
  pieChart.appendChild(legend);

  pieChartWrapper.appendChild(chartTitle);
  pieChartWrapper.appendChild(pieChart);

  return pieChartWrapper;
}
