const { response } = require("express");

const submitBtn = document.getElementById('submitBtn');

const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityValue = cityname.value;
   
    
    if(cityValue== " " || cityValue == null){
        city_name.innerText = `Please enter the city name`;
        
    }
    else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=a2f0028b292b22442970457669f7e23e`;
            const response = await fetch(url);
            const data =  await response.json();
            const arrData = [data]
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            
        }
        catch{
            city_name.innerText =` Please enter the city name properly`;

        }

    }
}

submitBtn.addEventListener('click',getInfo)