$("select").imagepicker({
    hide_select: true,
});

function Plus() {
    var price = 490;
    let month = document.getElementById("mounths").textContent;
    let i = parseInt(month);
    if (i !== 24) {
        document.getElementById('months').value = i + 1;
    }
    if (i > 0 && i < 24) {
        ++i;
        document.getElementById("mounths").innerHTML = i;
        if (i == 1) {
            document.getElementById("economybasic").innerHTML = "<s>Цена: 590 ₽</s>";
            document.getElementById("pricebasic").innerHTML = "Цена: 1 ₽";
        } else if (i > 1 && i < 3) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let summa = Math.floor((price * i) * 0.8155);
            document.getElementById("pricebasic").innerHTML = "Цена: " + summa + " ₽";
        } else if (i > 2 && i < 6) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let summa = Math.floor((price * i) * 0.810);
            document.getElementById("pricebasic").innerHTML = "Цена: " + summa + " ₽";
        } else if (i > 5 && i < 12) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let summa = Math.floor((price * i) * 0.8);
            document.getElementById("pricebasic").innerHTML = "Цена: " + summa + " ₽";
        } else if (i > 11 && i < 25) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let summa = Math.floor((price * i) * 0.795);
            document.getElementById("pricebasic").innerHTML = "Цена: " + summa + " ₽";
        }
    }
}

function Minus() {
    var price = 490;
    let month = document.getElementById("mounths").textContent;
    let i = parseInt(month);
    if (i !== 1) {
        document.getElementById('months').value = i - 1;
    }
    if (i > 1) {
        --i;
        document.getElementById("mounths").innerHTML = i;
        if (i == 1) {
            document.getElementById("economybasic").innerHTML = "<s>Цена: 590 ₽</s>";
            document.getElementById("pricebasic").innerHTML = "Цена: 490 ₽";
        } else if (i > 1 && i < 3) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let difference = Math.floor((price * i) * 0.8155);
            document.getElementById("pricebasic").innerHTML = "Цена: " + difference + " ₽";
        } else if (i > 2 && i < 6) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let difference = Math.floor((price * i) * 0.810);
            document.getElementById("pricebasic").innerHTML = "Цена: " + difference + " ₽";
        } else if (i > 5 && i < 12) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let difference = Math.floor((price * i) * 0.8);
            document.getElementById("pricebasic").innerHTML = "Цена: " + difference + " ₽";
        } else if (i > 11 && i < 25) {
            let summaeco = Math.floor((price * i));
            document.getElementById("economybasic").innerHTML = "<s>Цена: " + summaeco + " ₽ <s>";
            let difference = Math.floor((price * i) * 0.795);
            document.getElementById("pricebasic").innerHTML = "Цена: " + difference + " ₽";
        }
    }
}

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

}

function Pay() {
    let sum = document.getElementById("pricebasic").textContent;
    var number = document.getElementById("operator").options.selectedIndex;
    let operator = document.getElementById("operator").options[number].text;
    let userId = document.getElementById("idcheck").innerText;

    console.log(userId);
    var output = $('#output');

    $.ajax({
        url: 'backend/pay.php', // путь к php-обработчику
        type: 'POST', // метод передачи данных
        dataType: 'json', // тип ожидаемых данных в ответе
        data: {sum: sum, operator: operator, userid: userId}, // данные, которые передаем на сервер
        beforeSend: function () { // Функция вызывается перед отправкой запроса
            output.text('Запрос отправлен. Ждите ответа.');
        },
        error: function (req, text, error) { // отслеживание ошибок во время выполнения ajax-запроса
            output.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
        },
        complete: function () { // функция вызывается по окончании запроса
            output.append('<p>Запрос полностью завершен!</p>');
            //Вызываем функцию открытия спойлера.
            OpenSpoiler();
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
                var div = document.getElementById("qiwi").style.display;
                document.getElementById("qiwi").style.display = "block";
                document.getElementById("webmoney").style.display = "none";
                document.getElementById("yandex").style.display = "none";
                document.getElementById("card").style.display = "none";

                document.getElementById("output_code").value = json[1];
                document.getElementById("output_price").value = json[2];
                document.getElementById("output_wallet").value = json[3];
            }
            if (operator == 'webmoney') {
                var div = document.getElementById("webmoney").style.display;
                document.getElementById("webmoney").style.display = "block";
                document.getElementById("qiwi").style.display = "none";
                document.getElementById("yandex").style.display = "none";
                document.getElementById("card").style.display = "none";
            }
            if (operator == 'card') {
                var div = document.getElementById("card").style.display;
                document.getElementById("card").style.display = "block";
                document.getElementById("qiwi").style.display = "none";
                document.getElementById("yandex").style.display = "none";
                document.getElementById("webmoney").style.display = "none";
            }
            if (operator == 'yandex') {
                var div = document.getElementById("yandex").style.display;
                document.getElementById("yandex").style.display = "block";
                document.getElementById("output_code_yandex").value = json[2];

                var outputYandex = $('#yandexframe')
                outputYandex.html(json[1]);

                document.getElementById("qiwi").style.display = "none";
                document.getElementById("webmoney").style.display = "none";
                document.getElementById("card").style.display = "none";
            }
        }
    });
}

function PayCheck(){
    let userId = document.getElementById("idcheck").innerText;
    let operator = document.getElementById("operatorCheck").innerText;
    let sum = document.getElementById("pricebasic").textContent;
    let code = document.getElementById("output_code").value;

    console.log('send:');
    console.log(operator);
    console.log(userId);
    console.log(sum);
    console.log(code);

    var output = $('#checkOutput');

    $.ajax({
        url: 'backend/payCheck.php', // путь к php-обработчику
        type: 'POST', // метод передачи данных
        dataType: 'json', // тип ожидаемых данных в ответе
        data: {sum: sum, operator: operator, userid: userId, code: code}, // данные, которые передаем на сервер
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
            // output.html(json);
            let message = json;
            console.log('return: '+message);
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

function Copy_code_yandex() {
    var copyText = document.getElementById("output_code_yandex");
    copyText.select();
    document.execCommand("copy");
}


function openbox(id){
    var current= document.getElementById(id).style;

    if(current.display === 'block'){
        current.display = '';
        delay(1);
    }else{
        current.display = 'block';
    }
    if(openbox.last !== current) {
        openbox.last.display='';
        openbox.last = current;
    }
}
openbox.last = {};