// author:Gurukiran D
// arrays to hold the id of particular div
var id=["current-day","second-day","third-day","fourth-day","fifth-day","sixth-day","seventh-day"];
var highest=["heighest","second-heighest","third-heighest","fourth-heighest","fifth-heighest","sixth-heighest","seventh-heighest"];
var lowest=["lowest","second-lowest","third-lowest","fourth-lowest","fifth-lowest","sixth-lowest","seventh-lowest"];
var images=["first","second","third","four","five","six","seven"]
function weatherreport()//onload function
{
    var morning=document.getElementsByClassName("morning")[0];
   var current_date=new Date();
   var time=current_date.getHours();
   if(time<12)
   {
      morning.innerHTML="Good Morning"; 
   }
   else if(time<16)
   {
    morning.innerHTML="Good Noon"; 
   }
   else if(time<20)
   {
    morning.innerHTML="Good Evning"; 
   }
    var city = document.getElementById("selection").value;
// var city = selected_city.options[selected_city.selectedIndex].value;
// var display_city;
// display_city=document.getElementsByClassName("place");
// display_city.innerHTML=city;

    var obj;//holds data recieved
    var temp2;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
     obj= this.responseText;
     console.log(obj) ;
     var pasres_data=JSON.parse(obj);  
     console.log(pasres_data); //parsing the string to objects
    for(i=0;i<7;i++)
    {
    var day=pasres_data.query.results.channel.item.forecast[i].day;//gets the  day and prints
    day=whichday(day);
    document.getElementById(id[i]).innerHTML =day;
    
    var imgtype=pasres_data.query.results.channel.item.forecast[i].text;
    
     if(imgtype=="Sunny")
     {
        var place= document.getElementById(images[i]);
        place.style.background="url(images/weather-icons_20180813_090711714.jpg) 10% 0";
     }

     else if(imgtype=="Mostly Sunny")
     {
    var place= document.getElementById(images[i]);
      place.style.background="url(images/weather-icons_20180813_090711714.jpg) 66% 5%";
     }

     else if(imgtype=="Cloudy")
     {
    var place= document.getElementById(images[i]);
      place.style.background="url(images/weather-icons_20180813_090711714.jpg) 96% 7%";
     }

   else if(imgtype=="Breezy")
     {
    var place= document.getElementById(images[i]);
      place.style.background="url(images/weather-icons_20180813_090711714.jpg) 66% 50%";
     }

     else if(imgtype=="Rainy")
     {
    var place= document.getElementById(images[i]);
      place.style.background="url(images/weather-icons_20180813_090711714.jpg) 5% 95%";
     }

    else if(imgtype=="Scattered Showers")
    {
         console.log(imgtype)
        var place= document.getElementById(images[i]);
        place.style.background="url(images/weather-icons_20180813_090711714.jpg) 95% 95%";
    }
    else if(imgtype=="Mostly Cloudy")
    {
        var place= document.getElementById(images[i]);
        place.style.background="url(images/weather-icons_20180813_090711714.jpg) 36% 7%";
    }
    
    else if(imgtype=="Partly Cloudy")
    {
        var place= document.getElementById(images[i]);
        place.style.background="url(images/weather-icons_20180813_090711714.jpg) 5% 50%";  
    }

    else if(imgtype=="Scattered Thunderstorms")
    {
        var place= document.getElementById(images[i]);
        place.style.background="url(images/weather-icons_20180813_090711714.jpg) 66% 95%";  
    }

    else if(imgtype=="Partly Rain")
    {
        var place= document.getElementById(images[i]);
        place.style.background="url(images/weather-icons_20180813_090711714.jpg) 94% 50%";  
    }

    else if(imgtype=="Mostly Rain")
    {
        var place= document.getElementById(images[i]);
        place.style.background="url(images/weather-icons_20180813_090711714.jpg) 34% 95%";  
    }

    
    var high=pasres_data.query.results.channel.item.forecast[i].high;
    var temp=eval((high-32)/1.8);
    temp2=temp.toFixed(0);
    document.getElementById(highest[i]).innerHTML =temp2+'&deg'+"&nbsp&nbsp&nbsp&nbsp|";
    var low=pasres_data.query.results.channel.item.forecast[i].low;
    var temp=eval((low-32)/1.8);
    temp2=temp.toFixed(0);
    document.getElementById(lowest[i]).innerHTML =temp2+'&deg';
    var weather_img=pasres_data.query.results.channel.item.forecast[i].text;
    }
    
    };
}
xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
    xhttp.send();
   
}
// switch case for finding the day
function whichday(temp)
{
    switch(temp)
    {
    case 'Mon': return "monday";
   
    case 'Tue': return "tuesday";
    
    case 'Wed': return "Wednesday";

    case 'Thu': return "thursday";
   
    case 'Fri': return "friday";
   
    case 'Sat': return "saturday";
    
    case 'Sun': return "sunday";
  
    }
}
