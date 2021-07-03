var textarea = document.querySelector('.area');


var upcase = document.querySelector('#up-arrow');
var downcase = document.querySelector('#down-arrow');
var negrito = document.querySelector('#negrito');
var italico = document.querySelector('#italico');
var sublinhado = document.querySelector('#sublinhado');
var paintletter = document.querySelector('#paint-letter');
var paleta = document.querySelector('.color-letter');
var textSelected = window.getSelection();


upcase.addEventListener('click',()=>{
		downcase.classList.remove("toggleColor")
		upcase.classList.toggle('toggleColor')
 	 	textarea.innerHTML = textarea.innerText.toString().replace(textSelected,textSelected.toString().toUpperCase())
	
	
		

})

downcase.addEventListener('click',()=>{
	  upcase.classList.remove("toggleColor")
		downcase.classList.toggle('toggleColor')
	 	textarea.innerHTML = textarea.innerText.toString().replace(textSelected,textSelected.toString().toLowerCase())


})

negrito.addEventListener('click',()=>{
		negrito.classList.toggle('toggleColor')
	 textarea.innerHTML = textarea.innerText.toString().replace(textSelected,textSelected.toString().bold())

})
italico.addEventListener('click',()=>{
		italico.classList.toggle('toggleColor')
	 textarea.innerHTML = textarea.innerText.toString().replace(textSelected,textSelected.toString().italics())

})
sublinhado.addEventListener('click',()=>{
		sublinhado.classList.toggle('toggleColor')
	textarea.innerHTML = textarea.innerText.toString().replace(textSelected,"<u>"+textSelected.toString()+"</u>")

})

paintletter.addEventListener('click',()=>{
		paintletter.classList.toggle('toggleColor')
		paleta.style ="display: block;"	

})

paleta.addEventListener('click',(event)=>{
		  if (event.pageX > 1037 && event.pageX < 1190 && event.pageY > 198 && event.pageY < 247){
		textarea.style.color = "#fefe33";
	}else if (event.pageX > 1101 && event.pageX < 1142 && event.pageY > 199 && event.pageY < 274){
		textarea.style.color = "#fabb02";
	}else if (event.pageX > 1143 && event.pageX < 1218 && event.pageY > 246 && event.pageY < 312){
		textarea.style.color = "orange";
	}else if (event.pageX > 1168 && event.pageX < 1225 && event.pageY > 309 && event.pageY < 375){
		
	}else if (event.pageX > 1144 && event.pageX < 1217 && event.pageY > 369 && event.pageY < 440){
		textarea.style.color = "red";
	}else if (event.pageX > 1116 && event.pageX < 1180 && event.pageY > 410 && event.pageY < 480){
		textarea.style.color = "purple";
	}else if (event.pageX > 1037 && event.pageX < 1113 && event.pageY > 343 && event.pageY < 490){
		textarea.style.color = "#8a2be2";
	}else if (event.pageX > 970 && event.pageX < 1036 && event.pageY > 412 && event.pageY < 483){
		
	}else if (event.pageX > 930 && event.pageX < 1009 && event.pageY > 370 && event.pageY < 446){
		textarea.style.color = "blue";
	}else if (event.pageX > 924 && event.pageX < 982 && event.pageY > 307 && event.pageY < 379){
		textarea.style.color = "#007fff";
	}else if (event.pageX > 934 && event.pageX < 1005 && event.pageY > 240 &&  event.pageY < 314){
		textarea.style.color = "green";
	}else if (event.pageX > 972 && event.pageX < 1040 && event.pageY > 202 && event.pageY < 274){
		alert('verde claro')
	}
	

})