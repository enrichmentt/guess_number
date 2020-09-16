function random(max) {
    return Math.ceil(Math.random() * max);
}

alert("Попробуйте угадать загаданное число от 1 до 100");


let number = random(100);
let guess = prompt('Введите число');
let attempt = 1;

while (true) {
    if (guess > number) {
        alert("Заданное число меньше");
        guess = prompt('Введите число');
        attempt++;
    } else if (guess < number) {
        alert("Заданное число больше");
        guess = prompt('Введите число');
        attempt++;
    } else {
        alert("Вы угадали число c " + attempt + " раза");
        break
    }
}