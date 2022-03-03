$("select").imagepicker({
    hide_select: true,
});

function Plus(id) {
    let month = document.getElementById("mounths" + id).textContent;
    let i = parseInt(month);

    if (id == 1) {
        if (i > 0 && i < 12) {
            if (i == 1) {
                document.getElementById("mounths" + id).innerHTML = 3;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 1170 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 1090 ₽";
            }
            if (i == 3) {
                document.getElementById("mounths" + id).innerHTML = 6;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 2340 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 2090 ₽";
            }
            if (i == 6) {
                document.getElementById("mounths" + id).innerHTML = 12;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 4680 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 4000 ₽";
            }
        }
    }
    if (id == 2) {
        if (i > 0 && i < 12) {
            if (i == 1) {
                document.getElementById("mounths" + id).innerHTML = 3;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 1500 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 1400 ₽";
            }
            if (i == 3) {
                document.getElementById("mounths" + id).innerHTML = 6;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 2500 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 2400 ₽";
            }
            if (i == 6) {
                document.getElementById("mounths" + id).innerHTML = 12;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 5000 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 4500 ₽";
            }
        }
    }
    if (id == 3) {
        if (i > 0 && i < 12) {
            if (i == 1) {
                document.getElementById("mounths" + id).innerHTML = 3;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 2000 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 1800 ₽";
            }
            if (i == 3) {
                document.getElementById("mounths" + id).innerHTML = 6;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 3000 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 2500 ₽";
            }
            if (i == 6) {
                document.getElementById("mounths" + id).innerHTML = 12;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 6000 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 5500 ₽";
            }
        }
    }
}

function Minus(id) {
    let month = document.getElementById("mounths" + id).textContent;
    let i = parseInt(month);
    console.log(i);
    if (id == 1) {
        if (i > 0) {
            if (i == 12) {
                document.getElementById("mounths" + id).innerHTML = 6;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 4680 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 4000 ₽";
            }
            if (i == 6) {
                document.getElementById("mounths" + id).innerHTML = 3;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 2340 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 2090 ₽";
            }
            if (i == 3) {
                document.getElementById("mounths" + id).innerHTML = 1;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 590 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 390 ₽";
            }
        }
    }
    if (id == 2) {
        if (i > 0) {
            if (i == 12) {
                document.getElementById("mounths" + id).innerHTML = 6;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 5000 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "ена: 4500 ₽";
            }
            if (i == 6) {
                document.getElementById("mounths" + id).innerHTML = 3;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 2500 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 2400 ₽";
            }
            if (i == 3) {
                document.getElementById("mounths" + id).innerHTML = 1;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 790 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 590 ₽";
            }
        }
    }
    if (id == 3) {
        if (i > 0) {
            if (i == 12) {
                document.getElementById("mounths" + id).innerHTML = 6;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 3000 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 2500 ₽";
            }
            if (i == 6) {
                document.getElementById("mounths" + id).innerHTML = 3;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 2000 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 1800 ₽";
            }
            if (i == 3) {
                document.getElementById("mounths" + id).innerHTML = 1;
                document.getElementById("economybasic" + id).innerHTML = "<s>Цена: 1500 ₽</s>";
                document.getElementById("pricebasic" + id).innerHTML = "Цена: 990 ₽";
            }
        }
    }
}

/*
function OpenSpoiler() {
    var firstIsOpen = false;
    var secondIsOpen = false;

    if (secondIsOpen === false) {
        var idSpoiler = $(this).attr('href'),
            classSelect = 'spoiler-link--active';
        $(this).toggleClass(classSelect);
        $(idSpoiler).slideToggle(200);
        e.preventDefault();
        secondIsOpen = true;
    }
    if (secondIsOpen === true) {
        var idSpoiler = $(this).attr('href'),
            classSelect = 'spoiler-link--active';
        $(this).toggleClass(classSelect);
        $(idSpoiler).slideToggle(200);
        e.preventDefault();
        var idSpoiler = $(this).attr('href'),
            classSelect = 'spoiler-link--active';
        $(this).toggleClass(classSelect);
        $(idSpoiler).slideToggle(200);
        e.preventDefault();
        secondIsOpen = false;
    }
}*/

function Pay(id) {

    let sum = document.getElementById("pricebasic" + id).textContent;
    var number = document.getElementById("operator" + id).options.selectedIndex;
    let operator = document.getElementById("operator" + id).options[number].text;
    let userId = document.getElementById("idcheck").innerText;
    let transaction = document.getElementById("transaction").textContent;

    console.log(transaction);
    var output = $('#output' + id);

    $.ajax({
        url: 'backend/pay.php', // путь к php-обработчику
        type: 'POST', // метод передачи данных
        dataType: 'json', // тип ожидаемых данных в ответе
        data: {sum: sum, operator: operator, userid: userId, transaction: transaction}, // данные, которые передаем на сервер
        beforeSend: function () { // Функция вызывается перед отправкой запроса
            output.text('Запрос отправлен. Ждите ответа.');
        },
        error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
            output.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
        },
        complete: function () { // функция вызывается по окончании запроса
            output.append('<p>Запрос полностью завершен!</p>');
            //Вызываем функцию открытия спойлера.
            // OpenSpoiler();
            Openbox('tarif' + id + 'box2', 'on');
            Openbox('tarif' + id + 'box1', 'off');

        },
        success: function (json) { // функция, которая будет вызвана в случае удачного завершения запроса к серверу
            // json - переменная, содержащая данные ответа от сервера. Обзывайте её как угодно ;)
            // output.html(json);
            let operator = json[0];
            let sum = json[2];

            document.getElementById('operatorCheck').innerHTML = operator;
            document.getElementById('sumCheck').innerHTML = sum;
            //console.log(operator);
            if (operator == 'qiwi') {
                var div = document.getElementById("qiwi" + id).style.display;
                document.getElementById("qiwi" + id).style.display = "block";
                document.getElementById("webmoney" + id).style.display = "none";
                document.getElementById("yandex" + id).style.display = "none";
                document.getElementById("card" + id).style.display = "none";

                document.getElementById("output_code" + id).value = json[1];
                document.getElementById("output_price" + id).value = json[2];
                document.getElementById("output_wallet" + id).value = json[3];
            }
            if (operator == 'webmoney') {
                var div = document.getElementById("webmoney"+id).style.display;
                document.getElementById("webmoney" + id).style.display = "block";
                document.getElementById("qiwi" + id).style.display = "none";
                document.getElementById("yandex" + id).style.display = "none";
                document.getElementById("card" + id).style.display = "none";
            }
            if (operator == 'card') {
                var div = document.getElementById("card" + id).style.display;
                document.getElementById("card" + id).style.display = "block";
                document.getElementById("qiwi" + id).style.display = "none";
                document.getElementById("yandex" + id).style.display = "none";
                document.getElementById("webmoney" + id).style.display = "none";
            }
            if (operator == 'yandex') {
                var div = document.getElementById("yandex" + id).style.display;
                document.getElementById("yandex" + id).style.display = "block";
                document.getElementById("output_code_yandex" + id).value = json[2];

                var outputYandex = $('#yandexframe'+id)
                outputYandex.html(json[1]);

                document.getElementById("qiwi" + id).style.display = "none";
                document.getElementById("webmoney" + id).style.display = "none";
                document.getElementById("card" + id).style.display = "none";
            }
        }
    });
}

function PayCheck() {
    let userId = document.getElementById("idcheck").innerText;
    let operator = document.getElementById("operatorCheck").innerText;
    let sum = document.getElementById("pricebasic").textContent;
    let code = document.getElementById("output_code").value;
    let transaction = document.getElementById("transaction").textContent;

    console.log('send:');
    console.log(operator);
    console.log(userId);
    console.log(sum);
    console.log(code);
    console.log(transaction);

    var output = $('#checkOutput');

    $.ajax({
        url: 'backend/payCheck.php', // путь к php-обработчику
        type: 'POST', // метод передачи данных
        dataType: 'json', // тип ожидаемых данных в ответе
        data: {sum: sum, operator: operator, userid: userId, code: code, transaction: transaction}, // данные, которые передаем на сервер
        beforeSend: function () { // Функция вызывается перед отправкой запроса
            output.text('Запрос отправлен. Ждите ответа.');
        },
        error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
            output.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
        },
        complete: function () { // функция вызывается по окончании запроса
            output.append('<p>Запрос полностью завершен!</p>');

        },
        success: function (json) { // функция, которая будет вызвана в случае удачного завершения запроса к серверу
            // json - переменная, содержащая данные ответа от сервера. Обзывайте её как угодно ;)
            let message = json;

            console.log('return: ' + message);
            output.text(message);
        }
    });
}

function Copy_code() {
    var copyText = document.getElementById("output_code");
    copyText.select();
    document.execCommand("copy");
}

function Copy_sum() {
    var copyText = document.getElementById("output_price");
    copyText.select();
    document.execCommand("copy");
}

function Copy_wallet() {
    var copyText = document.getElementById("output_wallet");
    copyText.select();
    document.execCommand("copy");
}

function Copy_code_yandex(id) {
    var copyText = document.getElementById("output_code_yandex" + id);
    copyText.select();
    document.execCommand("copy");
}

function Openbox(id, status) {
    var current = document.getElementById(id).style;
    console.log(id);
   // console.log(current);
    //сделать если это box2 - то чтоб у row margin=0 и закругление убиралось
    if (status === 'on') {
        current.display = 'block';
        if(id === 'tarif3box1'){
            document.getElementById("tarif3").className= "row block4 text-white";
        }
        // current.marginTop = '0';
        // openbox.last.display = '';
        //delay(1);
    }
    if (status === 'off') {
        current.display = '';
        // current.marginTop = 0;
        // openbox.last.display = '';
       // delay(1);
    }
}

Openbox.last = {};