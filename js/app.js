//  toggole 
 const toggole =(id, property) => {
     document.getElementById(id).style.display = property;
 }

const API_KEY = `f5721af885fa780086fa772e8f4465bc`;

const searchTemprature = () => {
    const city = document.getElementById('search-box');
    const cityName = city.value;
    city.value = '';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemprature(data))
    toggole('showWeather', 'none')
    toggole('spinner', 'block')
    toggole('noResults', 'none')
}



const displayTemprature = (temprature) => {
    console.log(temprature)
    if (temprature.cod === '404'){
        const noResults = document.getElementById('noResults');
        noResults.textContent = '';
        noResults.innerHTML = `
        <div id="city">city not found</div>
        `
        const weatherContainer = document.getElementById('showWeather');
            weatherContainer.innerHTML = ''

    }
        else{
            const weatherContainer = document.getElementById('showWeather');
            // weatherContainer.textContent = ''
            weatherContainer.innerHTML = `
            <section class="location">
            <div id="country-details">
            <div id="city">${temprature.name},</div>
            <div id="country"> ${temprature.sys.country}</div>
            </div>
                <div class="date">today</div>
                <img id="weather-icon" src="" alt="">
           </section>
           <div class="current">
               
               <div id="temp">${temprature.main.temp}<span>°c</span> </div>
               <div id="weather">${temprature.weather[0].main}</div>
               <div>Feels like: <span id="hi-low">${temprature.main.feels_like}</span>c</div>
           </div>
            `
            const noResults = document.getElementById('noResults');
        noResults.innerHTML = '';
        

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`
    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', url);
    console.log(temprature)
 
}
toggole('showWeather', 'block')
    toggole('spinner', 'none')
    toggole('noResults', 'block')
}
const search = document.getElementById('search-box');
search.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     searchTemprature()
    }
  });



const searchTemprature1 = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=comilla&appid=f5721af885fa780086fa772e8f4465bc&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemprature1(data))
}

searchTemprature1()

const setInnerText1 = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemprature1 = (temprature) => {
    
    
    const weatherContainer = document.getElementById('showWeather');
    // weatherContainer.textContent = ''
    weatherContainer.innerHTML = `
    <section class="location">
    <div id="country-details">
    <div id="city">${temprature.name},</div>
    <div id="country"> ${temprature.sys.country}</div>
    </div>
        <div class="date">today</div>
        <img id="weather-icon" src="" alt="">
   </section>
   <div class="current">
       
       <div id="temp">${temprature.main.temp}<span>°c</span> </div>
       <div id="weather">${temprature.weather[0].main}</div>
       <div>Feels like: <span id="hi-low">${temprature.main.feels_like}</span>c</div>
   </div>
    `
    const noResults = document.getElementById('noResults');
noResults.innerHTML = '';
  

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`
    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', url)
    console.log(temprature);
    if (temprature.cod === '404'){
        
        document.getElementById('box').innerHTML = `
        <div id="city">city not found<span id="country"></span></div>
        `
    } 
}

// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }
  // setInnerText('city', temprature.name);
    // setInnerText('temp', temprature.main.temp);
    // setInnerText('hi-low', ('Feels like', temprature.main.feels_like));
    // setInnerText('weather', temprature.weather[0].main);
    // // setInnerText('country' ,temprature.sys.country)




// console.log('connected')