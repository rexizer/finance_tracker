const data2 = [
  { category: 'Активы', label: 'North America', count: 367, month: 'январь', continent: 'North America' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'январь', continent: 'Western Europe' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'январь', continent: 'Asia' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'январь', continent: 'Latin America' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'январь', continent: 'Australia' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'февраль', continent: 'Eastern Europe' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'февраль', continent: 'Middle East' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'февраль', continent: 'Russian Commonwealth' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'февраль', continent: 'North America' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'март', continent: 'Western Europe' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'март', continent: 'Latin America' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'март', continent: 'Asia' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'март', continent: 'Eastern Europe' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'апрель', continent: 'Australia' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'апрель', continent: 'Middle East' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'апрель', continent: 'Russian Commonwealth' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'апрель', continent: 'Western Europe' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'май', continent: 'North America' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'май', continent: 'Asia' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'май', continent: 'Eastern Europe' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'май', continent: 'Australia' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'июнь', continent: 'Middle East' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'июнь', continent: 'Russian Commonwealth' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'июнь', continent: 'North America' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'июнь', continent: 'Western Europe' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'июль', continent: 'Asia' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'июль', continent: 'Latin America' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'июль', continent: 'Australia' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'июль', continent: 'Russian Commonwealth' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'август', continent: 'Middle East' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'август', continent: 'North America' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'август', continent: 'Western Europe' },
  { category: 'Активы', label: 'Asia', count: 53, month: 'август', continent: 'Asia' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'сентябрь', continent: 'Latin America' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'сентябрь', continent: 'Eastern Europe' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'сентябрь', continent: 'Australia' },
  { category: 'Активы', label: 'Middle East', count: 9, month: 'сентябрь', continent: 'Middle East' },
  { category: 'Расходы', label: 'Russian Commonwealth', count: 13, month: 'октябрь', continent: 'Russian Commonwealth' },
  { category: 'Активы', label: 'North America', count: 367, month: 'октябрь', continent: 'North America' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'октябрь', continent: 'Western Europe' },
  { category: 'Расходы', label: 'Asia', count: 53, month: 'октябрь', continent: 'Asia' },
  { category: 'Расходы', label: 'Latin America & Caribbean', count: 19, month: 'ноябрь', continent: 'Latin America' },
  { category: 'Активы', label: 'Eastern Europe', count: 13, month: 'ноябрь', continent: 'Eastern Europe' },
  { category: 'Расходы', label: 'Australia & New Zealand', count: 16, month: 'ноябрь', continent: 'Australia' },
  { category: 'Расходы', label: 'Middle East', count: 9, month: 'ноябрь', continent: 'Middle East' },
  { category: 'Активы', label: 'Russian Commonwealth', count: 13, month: 'ноябрь', continent: 'Russian Commonwealth' },
  { category: 'Расходы', label: 'North America', count: 367, month: 'декабрь', continent: 'North America' },
  { category: 'Активы', label: 'Western Europe', count: 66, month: 'декабрь', continent: 'Western Europe' },
  { category: 'Расходы', label: 'Asia', count: 53, month: 'январь', continent: 'Asia' },
  { category: 'Активы', label: 'South America', count: 42, month: 'март', continent: 'South America' },
  { category: 'Активы', label: 'Africa', count: 28, month: 'апрель', continent: 'Africa' },
  { category: 'Активы', label: 'Oceania', count: 17, month: 'май', continent: 'Oceania' },
  { category: 'Активы', label: 'Antarctica', count: 2, month: 'июнь', continent: 'Antarctica' },
  { category: 'Активы', label: 'Caribbean', count: 15, month: 'июль', continent: 'Caribbean' },
  { category: 'Активы', label: 'Central America', count: 30, month: 'август', continent: 'Central America' },
  { category: 'Активы', label: 'Arctic', count: 9, month: 'сентябрь', continent: 'Arctic' },
  { category: 'Активы', label: 'Northern Asia', count: 11, month: 'октябрь', continent: 'Northern Asia' },
  { category: 'Активы', label: 'Northeast Asia', count: 24, month: 'ноябрь', continent: 'Northeast Asia' },
  { category: 'Активы', label: 'Central Europe', count: 25, month: 'декабрь', continent: 'Central Europe' },
  { category: 'Расходы', label: 'Southern Africa', count: 20, month: 'март', continent: 'Southern Africa' },
  { category: 'Расходы', label: 'Eastern Africa', count: 22, month: 'апрель', continent: 'Eastern Africa' },
  { category: 'Расходы', label: 'Western Africa', count: 31, month: 'май', continent: 'Western Africa' },
  { category: 'Расходы', label: 'Northern Asia', count: 12, month: 'июнь', continent: 'Northern Asia' },
  { category: 'Расходы', label: 'Eastern Europe', count: 18, month: 'июль', continent: 'Eastern Europe' },
  { category: 'Расходы', label: 'Southern Asia', count: 37, month: 'август', continent: 'Southern Asia' },
  { category: 'Расходы', label: 'Central Asia', count: 8, month: 'сентябрь', continent: 'Central Asia' },
  { category: 'Расходы', label: 'Western Asia', count: 25, month: 'октябрь', continent: 'Western Asia' },
  { category: 'Расходы', label: 'Northeast Asia', count: 16, month: 'ноябрь', continent: 'Northeast Asia' },
  { category: 'Расходы', label: 'Southeast Asia', count: 31, month: 'декабрь', continent: 'Southeast Asia' }
];


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
data = data.concat(data2);




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
let processedMonths = [];

months.forEach(month => {

    // Array to track processed months
    if (processedMonths.indexOf(month) === -1) {
        processedMonths.push(month); // Add the month to the processed list
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        // Создаем заголовок
        const title = document.createElement('h1');
        title.classList.add('wrapper-title');
        title.textContent = `Member Stats for ${month}`;

        // Создаем контейнер для круговых диаграмм
        const pieChartsContainer = document.createElement('div');
        pieChartsContainer.classList.add('pie-charts');

        // Создаем круговую диаграмму для регионов
        const regionsChart = createPieChart('Region');
        pieChartsContainer.appendChild(regionsChart);

        // Добавляем .wrapper в .wrappers
        wrappers.appendChild(wrapper);
    }
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


