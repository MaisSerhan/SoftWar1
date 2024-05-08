var h1=document.getElementById('event');
var d1=0;
const root = document.querySelector(':root');
var rootstyle =getComputedStyle(root);
var width = rootstyle.getPropertyValue('--event-width');
var padding = rootstyle.getPropertyValue('--event-padding');

function showhide(){
    if(d1==0){ 
        h1.style.display='flex';
        root.style.setProperty('--event-width', '111px'); 
        root.style.setProperty('--event-padding', '10px'); 
        d1=1;}
    else{
        h1.style.display='none';
        root.style.setProperty('--event-width', '0px'); 
        root.style.setProperty('--event-padding', '0px'); 
        d1=0;
    }}

var h2=document.getElementById('bare');
var d2=0;

function showhide1(){
    if(d2==0){ 
        h2.style.display='block';
        d2=0;}
    else{
        h2.style.display='none';
        d2=0;
    }}