

var btn = document.getElementsByClassName("logo tb")[0];
var isvisible = false ; 
btn.addEventListener("click",function(){
    
    

    if (isvisible){
        document.getElementsByClassName("right_section")[0].style.visibility="hidden";
        isvisible = false; 
    }
    else {
        document.getElementsByClassName("right_section")[0].style.visibility="visible";
        isvisible=true;
         }
})


// For navigation ****************************

//var btnpr = document.getElementsByClassName("tb");
//
//
//btnpr[1].addEventListener("click",function(){
//    
//document.getElementsByClassName("tb")[1].style.backgroundColor="grey";
// window.open("?","_self");
//
//})
//
//btnpr[2].addEventListener("click",function(){
//    
//document.getElementsByClassName("tb")[1].style.backgroundColor="grey";
// window.open("?","_self");
//
//})
//
//
//btnpr[3].addEventListener("click",function(){
//    
//document.getElementsByClassName("tb")[1].style.backgroundColor="grey";
// window.open("?","_self");
//
//})
//
//
////btnpr[4].addEventListener("click",function(){
////    
////document.getElementsByClassName("tb")[1].style.backgroundColor="grey";
//// window.open("?","_self");
////
////})
//
//
//btnpr[5].addEventListener("click",function(){
//    
//document.getElementsByClassName("tb")[1].style.backgroundColor="grey";
// window.open("?","_self");
//
//})
    


var btn = document.getElementsByClassName("navSbtn")[0];

btn.addEventListener("click",function(){
    
       var sein = document.getElementsByClassName("navSearch")[0];
    
       var seback =document.getElementsByClassName("SePa tb")[0] 
       
       
       if(window.innerWidth>550){
        sein.style.width= "90px";
         sein.style.padding= "10px";
        
        seback.style.width= "100px";
       }
    else {
        sein.style.height= "25px";
        
        
        seback.style.height= "27px";}
        
})




// for namvigation *****************