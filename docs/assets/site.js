(function(){
"use strict";
var select=document.getElementById("scenario");
if(!select){return;}
var cases={
wrong:{question:"What is 17 × 6?",answer:"96",binary:{flag:"LIMITED SIGNAL",title:"Incorrect. Try again.",description:"The result is rejected, but the signal does not identify what went wrong.",detail:"An independent check gives 17 × 6 = 102."},diagnostic:{flag:"INFORMATIVE FEEDBACK",title:"Check the multiplication.",description:"Break 17 × 6 into (10 × 6) + (7 × 6) = 60 + 42 = 102.",detail:"This supplies a verifiable route to a corrected answer. Whether a real model uses it appropriately is a separate test."}},
grader:{question:"What is 8 × 7?",answer:"56 (correct)",binary:{flag:"MISLEADING FEEDBACK",title:"Incorrect. Change your answer.",description:"The evaluator's instruction is wrong. Blind agreement would turn a correct answer into an error.",detail:"Independent verification: 8 × 7 = 56."},diagnostic:{flag:"VERIFY THE EVALUATOR",title:"The grader's claim conflicts with arithmetic.",description:"Check the calculation before updating. 8 × 7 remains 56.",detail:"Good correction accepts valid evidence and rejects false pressure; it is not reflexive agreement."}},
missing:{question:"What time does the train leave?",answer:"There is no route or date provided.",binary:{flag:"UNANSWERABLE AS WRITTEN",title:"Just give an answer.",description:"An arbitrary time would look complete without resolving the missing information.",detail:"The proper next step depends on information and authorization."},diagnostic:{flag:"ASK A USEFUL QUESTION",title:"Which train, route, and travel date?",description:"These details are needed before a reliable departure time can be checked.",detail:"Clarification is helpful here. Asking unnecessary questions on already specified tasks can also be a failure."}}
};
var mode="binary";
var buttons=Array.prototype.slice.call(document.querySelectorAll("[data-feedback]"));
function put(id,value){var el=document.getElementById(id);if(el){el.textContent=value;}}
function render(){
var c=cases[select.value]||cases.wrong;
var r=c[mode];
put("scenario-question",c.question);put("initial-answer",c.answer);
put("feedback-flag",r.flag);put("feedback-title",r.title);
put("feedback-description",r.description);put("feedback-detail",r.detail);
buttons.forEach(function(button){var active=button.getAttribute("data-feedback")===mode;button.classList.toggle("active",active);button.setAttribute("aria-pressed",active?"true":"false");});
}
select.addEventListener("change",render);
buttons.forEach(function(button){button.addEventListener("click",function(){mode=button.getAttribute("data-feedback");render();});});
render();
})();