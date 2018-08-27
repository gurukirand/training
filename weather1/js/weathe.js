// author:Gurukiran D
// arrays to hold the id of particular div
var id=["#current-day","#second-day","#third-day","#fourth-day","#fifth-day","#sixth-day","#seventh-day"];
var highest=["#heighest","#second-heighest","#third-heighest","#fourth-heighest","#fifth-heighest","#sixth-heighest","#seventh-heighest"];
var lowest=["#lowest","#second-lowest","#third-lowest","#fourth-lowest","#fifth-lowest","#sixth-lowest","#seventh-lowest"];
var images=["#first","#second","#third","#four","#five","#six","#seven"];
var city;
$(document).ready(function()//ready function
{
    city=$(".active").attr("value");
    weather();
    $('a').click(function(){
        city=$(this).attr("value");
        weather();
    }) 
    $("#bar").click(function(){
        $("#selection").slideToggle("slow",function(){
        //    $("#selection").hide();
            
        });});

});
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

function weather()
{

//  getting data through api
    $("#place").text(city);
    $.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data,status){
    var obj=data;
    console.log(obj);
   var current_date=new Date();// getting current datedate
   var time=current_date.getHours();// get the cuttent hour
      if(time<12)
   {
     $("#morning").text("Good Morning"); 
   }
   else if(time<16)
   {
    $("#morning").text("Good Afternoon"); 
   }
   else if(time<24)
   {
    console.log(time)
    $("#morning").text("Good Evening");  
   }
    for(i=0;i<7;i++)
    {
    var day=obj.query.results.channel.item.forecast[i].day;//gets the  day and prints
    day=whichday(day);
    $(id[i]).text(day);
    
    var imgtype=obj.query.results.channel.item.forecast[i].text;
    // displays relavent weather image
     if(imgtype=="Sunny")
     {
        
        // place.css.background="url(images/weather-icons_20180813_090711714.jpg) 10% 0";
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 10% 0%");
     }

     else if(imgtype=="Rain")
     {
    
    //   place.css.background="url(images/weather-icons_20180813_090711714.jpg) 5% 95%";
      $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 5% 95%");
     }

     else if(imgtype=="Mostly Sunny")
     {
        
    //   place.css.background="url(images/weather-icons_20180813_090711714.jpg) 66% 5%";
      $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 66% 5%");
     }

     else if(imgtype=="Cloudy")
     {
       
    //   place.css.background="url(images/weather-icons_20180813_090711714.jpg) 96% 7%";
      $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 96% 7%");
     }

   else if(imgtype=="Breezy")
     {
        // $(images[i]).css.("background","url(images/weather-icons_20180813_090711714.jpg') 66% 50%')");
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 66% 50%");
     }

     else if(imgtype=="Rainy")
     {
       
       
    //   place.css.background="url(images/weather-icons_20180813_090711714.jpg) 5% 95%";
      $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 5% 95%");
     }
     
     else if(imgtype=="Thunderstorms")
     { 
    //   place.css.background="url(images/weather-icons_20180813_090711714.jpg) 5% 95%";
      $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 64% 96%");
     }
     

    else if(imgtype=="Scattered Showers")
    {
         
        // place.css.background="url(images/weather-icons_20180813_090711714.jpg) 95% 95%";
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 95% 95%");
    }
    else if(imgtype=="Mostly Cloudy")
    {
       
        // place.css.background="url(images/weather-icons_20180813_090711714.jpg) 36% 7%";
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 35% 6%");
    }
    
    else if(imgtype=="Partly Cloudy")
    {
        // place.css.background="url(images/weather-icons_20180813_090711714.jpg) 5% 50%";  
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 5% 50%");
    }

    else if(imgtype=="Scattered Thunderstorms")
    {
      
        // place.css.background="url(images/weather-icons_20180813_090711714.jpg) 66% 95%";  
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 66% 95%");
    }

    else if(imgtype=="Partly Rain")
    {
     
        // place.css.background="url(images/weather-icons_20180813_090711714.jpg) 94% 50%";  
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg') 94% 50%");
    }

    else if(imgtype=="Mostly Rain")
    {
        // $(images[i]).css.background="url(images/weather-icons_20180813_090711714.jpg) 34% 95%";  
        $(images[i]).css("background", "url('images/weather-icons_20180813_090711714.jpg')  34% 95%");
    }
   


    // highest temparature display
    var high=obj.query.results.channel.item.forecast[i].high;
    var temp=eval((high-32)/1.8);
    temp2=temp.toFixed(0);
    $(highest[i]).text(temp2+String.fromCharCode(176));

    // $(highest[i]).text(temp2+'&deg'+"&nbsp&nbsp&nbsp&nbsp|");
    // lowest temparature display
    var low=obj.query.results.channel.item.forecast[i].low;
    var temp=eval((low-32)/1.8);
    temp2=temp.toFixed(0);
    $(lowest[i]).text(temp2+String.fromCharCode(176));
    // var weather_img=obj.results.channel.item.forecast[i].text;
    }
});  
}