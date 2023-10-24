const http = require('http'); // Импортируем модуль http
const fs = require('fs'); // Импортируем модуль fs (работа с файловой системой)
const path = require('path'); // Импортируем модуль path (работа с путями к файлам и каталогам)

const server = http.createServer((req, res) => { // Создаем HTTP-сервер
  const { method, url } = req; // Извлекаем метод и URL из объекта запроса (req)

  if (method === 'GET') { // Проверяем, что метод запроса - "GET"
    if (url === '/') { // Если URL равен "/"
      // Serve the HTML file
      const indexPath = path.join(__dirname, '../', 'index.html'); // Формируем путь к HTML файлу
      fs.readFile(indexPath, (err, data) => { // Читаем HTML файл
        if (err) { // Если произошла ошибка чтения
          res.writeHead(500); // Отправляем статус 500 (внутренняя ошибка сервера)
          res.end('Error loading the HTML file. Я сам могу тут писать'); // Выводим сообщение об ошибке
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' }); // Устанавливаем статус 200 (ОК) и тип контента HTML
          res.end(data); // Отправляем содержимое HTML файла в ответ
        }
      });
    } else if (url.startsWith('assets/style/')) { // Если URL начинается с 'assets/style/'
      // Serve the CSS file
      const cssFileName = url.slice('/assets/style/'.length);
      const cssPath = path.join(__dirname, 'assets', "style", cssFileName); // Формируем путь к CSS файлу
      fs.readFile(cssPath, (err, data) => { // Читаем CSS файл
        if (err) { // Если произошла ошибка чтения
          res.writeHead(500); // Отправляем статус 500 (внутренняя ошибка сервера)
          res.end('Error loading the CSS file.'); // Выводим сообщение об ошибке
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' }); // Устанавливаем статус 200 (ОК) и тип контента CSS
          res.end(data); // Отправляем содержимое CSS файла в ответ
        }
      });
    } else if (url.startsWith('/js/')) { // Если URL начинается с '/js/'
      // Serve JavaScript files
      const jsFileName = url.slice(4); // Извлекаем имя файла JavaScript, удаляя '/js/' из URL
      const jsPath = path.join(__dirname, 'assets', 'js', jsFileName); // Формируем путь к JavaScript файлу
      fs.readFile(jsPath, (err, data) => { // Читаем JavaScript файл
        if (err) { // Если произошла ошибка чтения
          res.writeHead(500); // Отправляем статус 500 (внутренняя ошибка сервера)
          res.end('Error loading the JavaScript file.'); // Выводим сообщение об ошибке
        } else {
          res.writeHead(200, { 'Content-Type': 'text/javascript' }); // Устанавливаем статус 200 (ОК) и тип контента JavaScript
          res.end(data); // Отправляем содержимое JavaScript файла в ответ
        }
      });
    } else {
      res.writeHead(404); // Если URL не соответствует ни одному из вышеперечисленных условий, отправляем статус 404 (не найдено)
      res.end('Not found.'); // Выводим сообщение "Not found."
    }
  } else {
    res.writeHead(405); // Если метод запроса не "GET", отправляем статус 405 (метод не разрешен)
    res.end('Method not allowed.'); // Выводим сообщение "Method not allowed."
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000: http://localhost:3000/'); // Начинаем прослушивать порт 3000 и выводим сообщение о запуске сервера
});

console.log("hello world!"); // Выводим сообщение "hello world!" в консоль
