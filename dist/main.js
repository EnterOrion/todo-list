(()=>{"use strict";const e=function(){const e=document.getElementById("inbox");e.innerHTML=" ";const t=document.createElement("p");t.innerText="Projects",e.appendChild(t)},t=function(){const e=document.getElementById("inbox");e.innerHTML=" ";const t=document.createElement("p");t.innerText="Today",e.appendChild(t)},n=document.getElementById("projectInfo");function o(){const e=document.getElementById("inbox");e.innerHTML=" ";const t=document.createElement("p");t.innerText="So many projects",e.appendChild(t)}function l(){document.getElementById("projectForm").style.display="block"}const c=function(e){const t=document.createElement("div"),n=document.getElementById("inbox");t.setAttribute("id","project-div"),null===n.querySelector("#project-div")&&n.appendChild(t);const o=document.createElement("div");o.setAttribute("class","project-box");for(let n=0;n<e;n++)t.appendChild(o.cloneNode(!0))},d=document.getElementById("taskInfo");function r(){document.getElementById("taskForm").style.display="block"}const i=function(e){const t=document.createElement("div"),n=document.getElementById("inbox");t.setAttribute("id","task-div"),null===n.querySelector("#task-div")&&n.appendChild(t);const o=document.createElement("div");o.setAttribute("class","task-box");for(let n=0;n<e;n++)t.appendChild(o.cloneNode(!0))};let s=[],m=[];const a=document.getElementById("taskInfo"),u=document.getElementById("projectInfo"),p=function(){document.getElementById("taskForm").style.display="none";let e=[];document.getElementById("inbox").innerHTML="";for(let t=0;t<s.length;t++)e.push(s[t]);let t=JSON.stringify(e);localStorage.setItem("tasks",t);let n=JSON.parse(localStorage.getItem("tasks"));for(let e=0;e<n.length;e++){let t=n[e].title,o=n[e].description,l=n[e].dueDate,c=n[e].projectName,d=n[e].priority;i(n.length),document.getElementById("task-div").children.item(e).innerHTML+=`\n            <button id="close-task">Delete</button>\n            <p><strong>Task title:</strong> ${t}</p>\n            <p><strong>Details:</strong> ${o}</p>\n            <p><strong>Due date:</strong> ${l}</p>\n            <p><strong>Project:</strong> ${c}</p>\n            <p><strong>Priority</strong> <div id=${d}>${d}</div></p>\n        `}},g=function(){document.getElementById("projectForm").style.display="none";let e=[];const t=document.getElementById("projectCategory");document.getElementById("inbox").innerHTML="";for(let t=0;t<m.length;t++)e.push(m[t]);for(let e=t.length-1;e>0;e--)t.remove(e);let n=JSON.stringify(e);localStorage.setItem("projects",n);let o=JSON.parse(localStorage.getItem("projects"));for(let e=0;e<o.length;e++){let n=o[e].projectName,l=document.createElement("option");l.text=n,t.add(l),c(o.length),document.getElementById("project-div").children.item(e).innerHTML+=`\n        <p><strong>Project title:</strong> ${n}</p>\n        `}},y=function(){e(),p()};document.getElementById("today").addEventListener("click",t),document.getElementById("home").addEventListener("click",y),document.getElementById("projects").addEventListener("click",o),document.getElementById("newTask").addEventListener("click",r),document.getElementById("btn cancel").addEventListener("click",p),document.getElementById("newProject").addEventListener("click",l),document.getElementById("btn cancel proj").addEventListener("click",g),e(),a.addEventListener("submit",(e=>{e.preventDefault();const t=a.elements.title,n=a.elements.description,o=a.elements.dueDate,l=a.elements.projectCategory,c=a.elements.priority,r={title:t.value,description:n.value,dueDate:o.value,projectName:l.value,priority:c.value};!function(){const e=d.elements.title,t=d.elements.description,n=d.elements.dueDate,o=d.elements.projectCategory,l=d.elements.priority;e.value="",t.value="",n.value="",o.value="",l.value=""}(),s.push(r)})),u.addEventListener("submit",(e=>{e.preventDefault();const t={projectName:u.elements.titleProj.value};n.elements.titleProj.value="",m.push(t)}))})();