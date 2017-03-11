console.log('Loaded!');

//change the text of main-text div

var element=document.getElementById('main-text');
element.innerHTML='New Value';

var img=document.getElementById('dino');
var marginLeft=0;
function moveRight(){
 
 marginLeft=marginLeft+5;
 img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
    var interval=SetInterval(moveRight,100);
};