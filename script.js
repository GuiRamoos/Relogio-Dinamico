const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if (hr < 10 ) hr = '0' + hr

    if (minutes < 10 ) minutes = '0' + minutes

    if (seconds < 10 ) seconds = '0' + seconds

    horas.textContent = hr;
    minutos.textContent = minutes;
    segundos.textContent = seconds;
})