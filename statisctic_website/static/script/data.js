let data_assets = JSON.parse(document.querySelector(".assets").innerHTML)
let data_spending = JSON.parse(document.querySelector(".spending").innerHTML)

const monthss = [
  'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
];

let data1 = data_assets.map(item => {
  return {
    month: "октябрь",
    count: item.quantity,
    continent: "категория",
    label: item.stock_name,
    category: "Активы"
  };
});

let data = data_spending.map(item => {
  const date = new Date(item.date);
  const monthName = monthss[date.getMonth()]; // Получаем название месяца
  return {
    month: monthName,
    count: item.spending,
    continent: item.category,
    label: item.commentary,
    category: "Расходы"
  };
}).concat(data1);
// data = data.concat(data2);


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
  // const interestsChart = createPieChart('Interests');
  // pieChartsContainer.appendChild(interestsChart);

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


