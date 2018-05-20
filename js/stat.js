window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    ctx.fillRect(110,20, 420, 270);
   
    ctx.fillStyle = 'white';
    ctx.fillRect(100,10, 420, 270);
    ctx.strokeRect(100,10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура, вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    /* Как рассчитать гистограмму:
    1) посчитать максимальный результат
    2) сделать максимальный результат равным 150 пикс
    3) сделать остальные результаты пропорциональными максимальному. */

    var max = -1;
    var maxIndex = -1;

    for(var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
            maxIndex = i;
        }
    } // Отсортировали максимальный результат прохождения. Нужно разобраться, как здесь работает maxIndex, я пока врубаю только, что это сортировка имен, а вот каким образом...

    ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 80);

    var histogramWidth = 150;
    var step = histogramWidth / (max - 0); // Посчитали длину прямоугольника в гистаграмму.
    var barHeigth = 20; // Высота одной полоски
    var indent = 40; // Отступ между полосками
    var initialX = 120;
    var initialY = 100;
    var lineHeight = 15; // Высота столбика
    // Рисуем гистаграмму.

    for (var i=0; i<times.length; i++) {
    (names[i] == 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'blue'
        ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeigth);
        ctx.fillText(names[i], initialX + histogramWidth, initialY + lineHeight + indent * i);    //Рисуем гистограмму.
    }
};