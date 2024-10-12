Шаг 1: Определение основной функции

function MainObject(value) {
this.value = value; // Храним текущее значение
}
Здесь мы создаем конструктор MainObject, который принимает параметр value и сохраняет его в свойстве this.value. Этот объект будет служить основой для работы с массивами, строками и числами.

Шаг 2: Определение прототипа для работы с массивами

MainObject.prototype.MyArray = function(value) {
this.value = value; // Храним массив
};
Мы добавляем конструктор MyArray к прототипу MainObject. Он будет хранить массив в this.value.

Шаг 3: Определение методов для MyArray

MainObject.prototype.MyArray.prototype.map = function(callback) {
const result = [];
for (let i = 0; i < this.value.length; i++) {
result.push(callback(this.value[i], i, this.value));
}
this.value = result; // Обновляем текущее значение
return this; // Возвращаем текущий объект для цепочки
};
Метод map принимает функцию обратного вызова (callback), применяет её к каждому элементу массива и возвращает новый массив.
После обработки массив обновляется, и метод возвращает this, позволяя использовать цепочку вызовов.

Шаг 4: Определение прототипов для строк и чисел

MainObject.prototype.MyString = function(value) {
this.value = value; // Храним строку
};

MainObject.prototype.MyNumber = function(value) {
this.value = value; // Храним число
};
Аналогично MyArray, мы создаем конструкторы для строк и чисел, которые также будут хранить значения в this.value.
Шаг 5: Определение методов для MyString и MyNumber

MainObject.prototype.MyString.prototype.toUpperCase = function() {
this.value = this.value.toUpperCase(); // Преобразуем строку к верхнему регистру
return this; // Возвращаем текущий объект для цепочки
};

MainObject.prototype.MyNumber.prototype.add = function(num) {
this.value += num; // Складываем с числом
return this; // Возвращаем текущий объект для цепочки
};
Для MyString и MyNumber мы создаем методы, которые изменяют значение this.value и возвращают this для продолжения цепочки вызовов.
Шаг 6: Статические методы для создания экземпляров

MainObject.MyArray.create = function(array) {
return new MainObject.prototype.MyArray(array);
};

MainObject.MyString.create = function(string) {
return new MainObject.prototype.MyString(string);
};

MainObject.MyNumber.create = function(number) {
return new MainObject.prototype.MyNumber(number);
};
Мы добавляем статические методы create для каждого типа, чтобы упростить создание новых экземпляров MyArray, MyString и MyNumber.
Шаг 7: Использование экземпляров и вызов методов

Теперь, когда структура готова, давайте посмотрим на шаги, которые происходят при вызове
методов на экземплярах.

Пример использования MyArray

const resultArray = MainObject.MyArray.create([1, 2, 3, 4])
.map(num => num _ 2)
.filter(num => num > 4)
.toArray();
Создание экземпляра: MainObject.MyArray.create([1, 2, 3, 4]) создает новый экземпляр MyArray, хранящий массив [1, 2, 3, 4].
Вызов метода map:
map(num => num _ 2) выполняет функцию обратного вызова для каждого элемента массива, создавая новый массив [2, 4, 6, 8] и обновляя this.value.
Вызов метода filter:
filter(num => num > 4) фильтрует элементы, оставляя только те, которые больше 4, и обновляет this.value до [6, 8].
Получение результата:
toArray() возвращает финальное значение массива [6, 8].
Пример использования MyString

const resultString = MainObject.MyString.create("hello world")
.toUpperCase()
.toLowerCase()
.toString();
Создание экземпляра: MainObject.MyString.create("hello world") создает новый экземпляр MyString, хранящий строку "hello world".
Вызов метода toUpperCase:
toUpperCase() преобразует строку к верхнему регистру, обновляя this.value до "HELLO WORLD".
Вызов метода toLowerCase:
toLowerCase() преобразует строку к нижнему регистру, обновляя this.value обратно до "hello world".
Получение результата:
toString() возвращает финальное значение строки "hello world".
Пример использования MyNumber

const resultNumber = MainObject.MyNumber.create(10)
.add(5)
.subtract(3)
.valueOf();
Создание экземпляра: MainObject.MyNumber.create(10) создает новый экземпляр MyNumber, хранящий число 10.
Вызов метода add:
add(5) складывает 5 с текущим значением, обновляя this.value до 15.
Вызов метода subtract:
subtract(3) вычитает 3, обновляя this.value до 12.
Получение результата:
valueOf() возвращает финальное значение числа 12.
