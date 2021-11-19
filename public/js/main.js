
// api =  https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=a2f0028b292b22442970457669f7e23e
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityname');
const cityOutput = document.getElementById('city_output')
const tempStatus = document.getElementById('temp_status');
const day = document.getElementById('day');
const datahide = document.querySelector('.middle_class')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityValue = cityName.value;
    datahide.classList.add('hide_class')
    
    if(cityValue == ""){
        cityOutput.innerText = `Please Enter Your City Name`;
        console.log("It is empty");
        
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=a2f0028b292b22442970457669f7e23e`;

               
                console.log(cityValue);
                const responce = await fetch(url);
                const data = await responce.json();
                // console.log(data)
                const arrData = [data];
                console.log(arrData);
                tempStatus.innerText= arrData[0].main.temp;
                cityOutput.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
                datahide.classList.remove('hide_class');

            }
            
            
            catch(err){
                    // alert("error");
                    cityOutput.innerText = `Please enter proper city name`;
                    datahide.classList.add('hide_class');
                }
        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=a2f0028b292b22442970457669f7e23e`;
        //  await fetch(url).then((response) => {

        //     if (response.ok) {
        //         alert("Responce ok");
        //         console.log(cityValue);
        //         const data = response.json()
        //         // console.log(data)
        //         const arrData = [data];
        //         console.log(arrData)
        //         tempStatus.innerText = arrData[0].main.temp;
        //     } else {
        //       throw new Error('Something went wrong');
        //     }
        //   })
          
        //   .catch((error) => {
        //     console.log(error)
        //   });
     }
}

submitBtn.addEventListener('click',getInfo)