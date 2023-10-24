const data = [
  { category: 'Активы', label: 'North America', count: 367, month: 'январь' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'январь' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'январь' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'январь' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'январь' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'февраль' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'февраль' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'февраль' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'февраль' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'март' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'март' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'март' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'март' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'апрель' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'апрель' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'апрель' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'апрель' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'май' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'май' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'май' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'май' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'июнь' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'июнь' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'июнь' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'июнь' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'июль' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'июль' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'июль' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'июль' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'август' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'август' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'август' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'август' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'сентябрь' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'сентябрь' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'сентябрь' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'сентябрь' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'октябрь' },
  { category: 'Активы', label: 'North America', count: 367, month: 'октябрь' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'октябрь' },
  { category: 'Расходы', label: 'Asia', count: 53, month: 'октябрь' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'ноябрь' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'ноябрь' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'ноябрь' },
  { category: 'Расходы', label: 'Middle East', count: 9, month: 'ноябрь' },
  { category: 'Активы', label: 'Russian Commonwealth', count: 13, month: 'ноябрь' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'декабрь' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'декабрь' },
  { category: 'Расходы', label: 'Asia', count: 53, month: "январь"}
]


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


