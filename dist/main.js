(()=>{"use strict";const e=function(){const e=document.getElementById("inbox");e.innerHTML=" ";const t=document.createElement("p");t.innerText="Projects",e.appendChild(t)},t=function(){const e=document.getElementById("inbox");e.innerHTML=" ";const t=document.createElement("p");t.innerText="Today",e.appendChild(t)};function n(){const e=document.getElementById("inbox");e.innerHTML=" ";const t=document.createElement("p");t.innerText="So many projects",e.appendChild(t)}function o(){document.getElementById("projectForm").style.display="block"}function l(){document.getElementById("projectForm").style.display="none"}const c=document.getElementById("taskInfo");function d(){document.getElementById("taskForm").style.display="block"}const s=function(e){const t=document.createElement("div"),n=document.getElementById("inbox");t.setAttribute("id","task-div"),null===n.querySelector("#task-div")&&n.appendChild(t);const o=document.createElement("div");o.setAttribute("class","task-box");for(let n=0;n<e;n++)t.appendChild(o.cloneNode(!0))};let i=[];const m=document.getElementById("taskInfo"),a=function(){console.log("success"),document.getElementById("taskForm").style.display="none";let e=[];document.getElementById("inbox").innerHTML="",console.log(i);for(let t=0;t<i.length;t++)e.push(i[t]);let t=JSON.stringify(e);localStorage.setItem("tasks",t);let n=JSON.parse(localStorage.getItem("tasks"));for(let e=0;e<n.length;e++)n[e].title,s(n.length)};document.getElementById("today").addEventListener("click",t),document.getElementById("home").addEventListener("click",e),document.getElementById("projects").addEventListener("click",n),document.getElementById("newTask").addEventListener("click",d),document.getElementById("btn cancel").addEventListener("click",a),document.getElementById("newProject").addEventListener("click",o),document.getElementById("btn cancel proj").addEventListener("click",l),e(),m.addEventListener("submit",(e=>{e.preventDefault();const t=m.elements.title,n=m.elements.description,o=m.elements.dueDate,l=m.elements.projectCategory,d=m.elements.priority,s={title:t.value,description:n.value,dueDate:o.value,projectName:l.value,priority:d.value};!function(){const e=c.elements.title,t=c.elements.description,n=c.elements.dueDate,o=c.elements.projectCategory,l=c.elements.priority;e.value="",t.value="",n.value="",o.value="",l.value=""}(),i.push(s)}))})();