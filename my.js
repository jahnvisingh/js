$(document).ready(function(){
 var selectletter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 
$("td").click(function(){
$(this).css({"background-color":"white","text-align":"center","font-size":"30px"}).append(selectletter[Math.floor(Math.random() * 26)]);
});

});
