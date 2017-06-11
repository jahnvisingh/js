$(document).ready(function(){
 var selectletter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 var counter=0;
 var all=new Array();
 var fun=function()
   {
   $(this).css({"background-color":"white","text-align":"center","font-size":"50px"}).html(selectletter[Math.floor(Math.random() * 26)]);
   all[counter]=$(this);
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