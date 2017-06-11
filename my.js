$(document).ready(function(){
 var selectletter=["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H"];
 var counter=0;
 var all=new Array();
 var fun=function()
   {
   $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(selectletter[Math.floor(Math.random() * 16)]);
   all[counter]=$(this).text();
   counter++;
      if(counter==2)
        { if(all[0]==all[1])
    	   {  
             
             alert("success!!");
           }
          else
           { 
             
       	     alert("failure!!");
       	   }
       }
   }
 $("td").on('click',fun);
    

});