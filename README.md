### Install project
Клонуємо
``` bash
$ git clone https://github.com/mendeleev/require-js-learning.git
```

Встановлюємо необхідні модулі та бібліотеки:
``` bash
$ npm install -g bower
$ npm install -g requirejs

$ cd your_path/require-js-learning
$ bower install
```

Запускаємо оптимізатор (певна річ перш ніж його запустити, потрібно зробити всі необхідні налаштування для збірки)
``` bash
$ r.js -o your_path/build.js
```

## Troubleshooting

#### При спробі витягнути і прочитати файл з проекту може виникати така помилка:
```
Loading local file via ajax doesn't work in Chrome browser (security restrictions) (tested in Version 49.0.2623.87)
Error - "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource."
```

Тому проект краще запускати використовуючи локальний сервер. Найпростіший і найшвидший спосіб використати модуль [http-server](https://www.npmjs.com/package/http-server), який можна встановити із npm репозиторію.

``` bash
$ npm install -g http-server
```

Запускається дуже просто.
``` bash
$ cd project_path
$ http-server ./

Starting up http-server, serving ./
Available on:
  http:127.0.0.1:8081
  http:10.1.18.139:8081
Hit CTRL-C to stop the server
```

У моєму випадку проект піднявся за адресою http://127.0.0.1:8081 та http://10.1.18.139:8081, у вас скоріш за все буде інша. Відкриваємо проект за цією адресою і проблема зникне.

### Requirements
- не використовуємо EcmaScript 6, стараємось щоб проект працював у максимальній кількості браузерів


## "RequireJS & JQuery" home task
Домашнє завдання по лекції "RequireJS & JQuery" [Minions Clicker](http://mendeleev.github.io/minions/app/)

### Суть завдання
Отже в нас є прототип веб-додатку, який демонструє як саме це повинно працювати. Тепер з цього потрібно зробити більш робочий і динамічний проект. Перш за все це підвантаження даних. На реальному проекті, дані постійно змінюються і нам потрібно підготуватись до того, щоб інформація яку ми відображаємо була актуальною. Припустимо, що дані нам повинен віддавати якийсь **backend**, розробкою якого займається програміст John. Але ми не можемо і не повинні чекати поки John розбереться зі своєю частиною роботи, тому розробку клієнтської частини ми виконуємо незалежно.

### Формат даних
Початковий формат даних які ми очікуємо, відомий, а тому ми можемо створити звичайний .json файл, і заповнити його будь-якими тестовими даними, який буде лежати прямо в проекті.

```json
[
	{
		"id":1,
		"title": "Cake",
		"image": "Minion-Cake-icon.png",
		"count": 0
	},
	{
		"id":2,
		"title": "Curious",
		"image": "Minion-Curious-icon.png",
		"count": 0
	}
]
```

### Завантаження даних
На щастя, JQuery однаково добре вміє витягувати дані, і з бекенду, і з файлу. Тому, нам цілком достатньо буде функції $.ajax(), почитати про яку можна [тут](http://devdocs.io/jquery/jquery.ajax). Також не варто забувати, що в секції **Ajax** є й [інші корисні штуки](http://devdocs.io/jquery-ajax/), які можливо підійдуть краще.   

``` javascript
$.ajax({
	url: "files/data.json",
	dataType: "json",
	success: function(data) {
		//do smth
	},
	error: function(error) {
		//houston we have a problem
	}
});
```

Також нагадаю, що ця штука повертає [проміс](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) і замість **success/error** можна використовувати .**then()** чи **.done()**

```javascript
function getData() {
	return $.ajax({
		url: "files/data.json",
		dataType: "json"
	});
}

getData().done(function(data) {
	//do smth
}, function(error) {
	//do smth if error
});
```

### Візуалізація
Приступаємо до мабуть найцікавішої частини, а саме, відмальовки отриманих даних. Тут нам знадобляться такі розділи як:

 - [Селектори (selectors)](http://devdocs.io/jquery-selectors/)
 - [Бродяги (traversing)](http://devdocs.io/jquery-traversing/)
 - [Маніпуляції (manipulations)](http://devdocs.io/jquery-manipulation/)
 - [Події (events)](http://devdocs.io/jquery-events/)

За допомогою JQuery можна не лише тягнути елементи зі сторінки, але можна також створювати нові. Наприклад: 

``` javascript
var $headline = $("<h1>Hello, World!</h1>")
$("body").append($headline)
```

### Шаблон
На даному етапі в нас є верстка галереї, в якій знаходиться шаблон для одного елементу:
``` html
<li class="item">
	<img src="images/Minion-Curious-icon.png" alt="Curious" />
	<span class="counter">0</span>
</li>
```

Всі елементи складаються в контейнер: 
``` html
<ul class="gallery"></ul>
```

### Модулі
Для того, щоб нам було зручно підтримувати і тестувати написаний код, розкладаємо все на модулі за допомогою бібліотеки [RequireJS](http://requirejs.org/docs/start.html).

### Build
Отже, все готово, залишається тільки оптимізувати написані модулі, щоб весь код був мініфікований і можна було його використовувати в production версії. Детальніше можна почитати про це [тут](http://requirejs.org/docs/optimization.html).

Також для прикладу я накидав певну структуру і налаштував збірку. Щоб подивитись як це виглядає потрібно переключитись на гілку **build**. Але для кращого засвоєння і щоб розібратись як працює цей механізм, дуже добре буде почати все з нуля, а сюди інколи підглядати якщо будуть виникати якісь нерозуміння.

``` bash
$ git checkout build
```

### Збереження даних
Ми створили функціонал, перевірили, зібрали, оновили сторінку і тут халепа, лічильники позбивались на нуль. Тому потрібно результати кліків десь зберігати, наприклад в [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage).


### Matherials
Про всяк випадок залишу тут всі матеріали, які були задіяні під час лекції:

 - [Презентація](https://docs.google.com/presentation/d/1RXJ0Wiis0HR4qm1xBrqTODOB3EBcJ79WtZ92Xue0gsQ/edit?usp=sharing)
 - Приклади:
	 - [багаторівневий список](https://jsfiddle.net/mendart/xj9cewux/4/)
	 - [вимикач](https://jsfiddle.net/mendart/44enr2er/)
	 - [фільтр](https://jsfiddle.net/mendart/0sLjg9jL/)
 - Документація:
	 - [офіційний сайт JQuery](https://jquery.com/)
	 - [офіційний сайт RequireJS](http://requirejs.org/)
	 - [збірка документацій | Devdocs](https://devdocs.io/)
 - Література/Курси:
	 - [книга «JQuery для початківців»](http://anton.shevchuk.name/jquery-book/),
	 - [онлайн курс RequireJS](https://www.pluralsight.com/courses/requirejs-javascript-dependency-injection)
