// Вывод даты
// *****
const d = new Date();
const day = ["Воскресенье,", "Понедельник,", "Вторник,", "Среда,", "Четверг,", "Пятница,", "Суббота,"];
const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

// Форматирование даты для атрибута datetime
const datetimeString = d.getFullYear() + '-' + 
                       String(d.getMonth() + 1).padStart(2, '0') + '-' + 
                       String(d.getDate()).padStart(2, '0') + 'T' + 
                       String(d.getHours()).padStart(2, '0') + ':' + 
                       String(d.getMinutes()).padStart(2, '0') + ':' + 
                       String(d.getSeconds()).padStart(2, '0');

// Установка значения атрибута datetime
document.getElementById("currentTime").setAttribute("datetime", datetimeString);

// Вывод текста в элемент
const outputText = day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
document.getElementById("currentTime").innerHTML = outputText;