(function(){
"use strict";
function activateVideos(){
document.querySelectorAll(".video-mount[data-youtube-id]").forEach(function(mount){
var button=mount.querySelector(".video-activate");
if(!button)return;
button.addEventListener("click",function(){
var id=mount.getAttribute("data-youtube-id")||"";
if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;
var start=parseInt(mount.getAttribute("data-start")||"0",10);
if(!Number.isFinite(start)||start<0)start=0;
// YouTube embed `end` uses an absolute timestamp measured from the video beginning.
var end=parseInt(mount.getAttribute("data-end")||"0",10);
var endParam=Number.isFinite(end)&&end>start?"&end="+end:"";
var frame=document.createElement("iframe");
frame.src="https://www.youtube-nocookie.com/embed/"+id+"?start="+start+endParam+"&autoplay=1&rel=0";
frame.title=mount.getAttribute("data-label")||"Embedded YouTube research video";
frame.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
frame.setAttribute("referrerpolicy","strict-origin-when-cross-origin");
frame.setAttribute("allowfullscreen","");
frame.setAttribute("loading","lazy");
mount.replaceChildren(frame);
},{once:true});
});
}
function filters(){
var input=document.getElementById("library-search");
var topic=document.getElementById("topic-filter");
var year=document.getElementById("year-filter");
var discipline=document.getElementById("discipline-filter");
if(!input||!topic||!year)return;
var cards=Array.prototype.slice.call(document.querySelectorAll("#study-list .study"));
var count=document.getElementById("library-count");
var empty=document.getElementById("library-empty");
function update(){
var q=input.value.toLocaleLowerCase().trim();
var t=topic.value,y=year.value,d=discipline?discipline.value:"all",shown=0;
cards.forEach(function(card){
var passes=(t==="all"||card.dataset.topic===t)&&(d==="all"||card.dataset.discipline===d)&&(y==="all"||(y==="earlier"?Number(card.dataset.year)<=2023:card.dataset.year===y))&&(!q||card.textContent.toLocaleLowerCase().includes(q));
card.hidden=!passes;
if(passes)shown++;
});
if(count)count.textContent=shown+" of "+cards.length+" sources shown";
if(empty)empty.hidden=shown!==0;
}
input.addEventListener("input",update);
topic.addEventListener("change",update);
year.addEventListener("change",update);
if(discipline)discipline.addEventListener("change",update);
update();
}
activateVideos();filters();
})();