
    
function showday(year,month,day)
{ var result;
    year=document.getElementById("first").value;
    month=document.getElementById("second").value;
    day=document.getElementById("third").value;
     var mydate =new Date(year,month - 1,day)
     var get_day = mydate.getDay();
     switch(get_day){  
case 0:  
     result="Sunday";  
break;  
case 1:  
       result="Monday";  
break;  
case 2:  
      result="Tuesday";  
break; 
case 3:  
      result="Wednesday";  
break; 
case 4:  
      result="Thursday";  
break; 
case 5:  
      result="Friday";  
break; 
case 6:  
      result="Saturday";  
break; 
}  
     document.getElementById("answer1").value= result;
     console.log(mydate);
     
}
showday(year,month,day);
