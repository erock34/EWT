$(document).ready(function(){
    $("p").css({color:"darkred","margin-top":"20px"});
    $(".redFont");
    $(".myTag").css({color:"darkred","margin-top":"20px"});
    $("[href]").css("color","#777");
$("#hide").on("click",function(){
    $("p").hide();
});
$("#show").on("click",function(){
    $("p").show();
});
$("#toggle").on("click",function(){
    $("h1").toggle();

});
});
//$(function(){

//})