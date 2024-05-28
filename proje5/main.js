//elementleri seçelim

const searchInput=document.querySelector("#searchinput");
searchInput.addEventListener("keypress",findWeatherInfo);
const cityNameEl=document.querySelector(".cityName");
const degreeEl=document.querySelector(".degree");
const describeEl=document.querySelector(".describe");

 const weatherApı=new WeatherAPI();

function findWeatherInfo(e){
   // console.log(e.target.value); yazılan her karekteri console da görmek için yazdık
   if(e.keyCode=='13'){
    const cityName=searchInput.value.trim();//ınputa yazılan değerin sağ ve solundaki boşlukları siler
    weatherApı.getWeatherInfo(cityName)
    .then(data=>{
      console.log(data);
      display(data);
    })
    .catch(err=>console.log(err));
   }

}


 function display(data){
   cityNameEl.textContent=data.name;
   degreeEl.textContent=Math.round(data.main.temp);//dereceyi en yakın sayıya yuvarladık
   describeEl.textContent=data.weather[0].description;

   searchInput.value="";

}
