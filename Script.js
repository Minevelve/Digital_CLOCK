function set_alarm(){
     document.getElementById("set-alarm").innerHTML = "Party Time !!";
     }
function set_alarm_party_time()
{
    document.getElementById("set-alarm").innerHTML = "Set Alarm";
 }


function showTime()
    {
      
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    
    if(hour >= 12){
      document.getElementById("am_or_pm").innerHTML = "PM";
    }
    else{
      document.getElementById("am_or_pm").innerHTML = "AM";
    }
    if(hour > 12)
    {
      hour = hour - 12;
    }

    if(hour == 0)
    {
      hour = 12;
    }

    if(hour < 10)
    {
      hour = "0" + hour;
    }

    
    if(minute < 10)
    {
      minute = "0" + minute;
    }

    if(second < 10)
    {
      second = "0" + second;
    }
//image-01
    if(hour == 10)
    {
      document.getElementById("GRAB_SOME_HEALTHY_BREAKFAST").style.visibility = "visible";
      document.getElementById("girl-img-1").style.visibility = "visible";
      document.getElementById("Good-Morning-Wake-Up").style.visibility = "visible";
    }
 
    if(hour != 10){
      document.getElementById("GRAB_SOME_HEALTHY_BREAKFAST").style.visibility = "hidden";
      document.getElementById("girl-img-1").style.visibility = "hidden";
      document.getElementById("Good-Morning-Wake-Up").style.visibility = "hidden";
    }
//image- 02
    if(hour == 12)
    {
      document.getElementById("LET_S_HAVE_SOME_LUNCH").style.visibility = "visible";
      document.getElementById("Lunch-time-1").style.visibility = "visible";
      document.getElementById("good_afternoon").style.visibility = "visible";    
    }

    if(hour != 12){
      document.getElementById("LET_S_HAVE_SOME_LUNCH").style.visibility = "hidden";
      document.getElementById("Lunch-time-1").style.visibility = "hidden";
      document.getElementById("good_afternoon").style.visibility = "hidden";  
    }

// //image- 03 
  
    if(hour == 06)
    {
      document.getElementById("GOOD_EVENING").style.visibility = "visible";
      document.getElementById("yewing").style.visibility = "visible";
      document.getElementById("tea_image").style.visibility = "visible";    
    }

    if(hour != 06){
      document.getElementById("GOOD_EVENING").style.visibility = "hidden";
      document.getElementById("yewing").style.visibility = "hidden";
      document.getElementById("tea_image").style.visibility = "hidden";  
    }

// //image - 04

if(hour == 08)
    {
      document.getElementById("GOOD_NIGHT").style.visibility = "visible";
      document.getElementById("night_night").style.visibility = "visible";
      document.getElementById("NIGHT_image").style.visibility = "visible";    
    }

    if(hour != 08){
      document.getElementById("GOOD_NIGHT").style.visibility = "hidden";
      document.getElementById("night_night").style.visibility = "hidden";
      document.getElementById("NIGHT_image").style.visibility = "hidden";  
    }
//Page No. 5 
    if(hour == 10 && minute == 54 && second == 01 )
    {
      document.getElementById("page-no-5-setup").style.visibility = "visible";
    }

    if(hour !== 10 && minute !== 54 && second !== 01){
      document.getElementById("page-no-5-setup").style.visibility = "hidden";
      }

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
   
    var time = new Date();
    var hour1 = time.getHours();
    var minute1 = time.getMinutes();
    var second1 = time.getSeconds();
    
    document.getElementById("hour1").innerHTML = hour;
    document.getElementById("minute1").innerHTML = minute;
    document.getElementById("second1").innerHTML = second;
   
  
  }

    setInterval(showTime, 1000);


  

   
  