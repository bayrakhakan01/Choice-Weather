const select = document.querySelector('select');
const para  = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    
    const choice = select.value

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
        document.querySelector('html').style.background = 'linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)';
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
        document.querySelector('html').style.background = 'linear-gradient(100deg,#434343,#262626)';
    } else if (choice === 'snowing') {
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      document.querySelector('html').style.background = 'linear-gradient(10deg,#ff7b81,#af333d 41.07%,#319187 76.05%)';
    } else if (choice === 'overcast') {
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      document.querySelector('html').style.background = 'linear-gradient(30deg,greenyellow,#af002d 41.07%,purple 76.05%)';
    } else {
      para.textContent = '';
      document.querySelector('html').style.background = 'linear-gradient(30deg,#ee601d,#991940 41.07%,#f3e4f6 76.05%)';
    }
}
