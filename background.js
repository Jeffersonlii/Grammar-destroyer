window.onload=function(){
    console.log("page loaded!");

    var elements = document.querySelectorAll( 'body *' );//get all elements as an array
    console.log(elements);
    for(var i = 0; i < elements.length; i++){
        console.log(elements[i].innerHTML);
    }
    
}
//* and i -> me and *