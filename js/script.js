var textarea = document.querySelector('.area');
var control = true;

var upcase = document.querySelector('#up-arrow');
var downcase = document.querySelector('#down-arrow');
var negrito = document.querySelector('#negrito');
var italico = document.querySelector('#italico');
var sublinhado = document.querySelector('#sublinhado');
var paintletter = document.querySelector('#paint-letter');
var paintfundo = document.querySelector('#paint-fundo');

var paleta = document.querySelector('.color-letter');
var paletaf = document.querySelector('.color-fundo');

var z = document.querySelector('#c-z');
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
	paintletter.classList.toggle('toggleColor',control);
	if(control){paleta.style ="display: block;";control = false;
	}else{paleta.style ="display: none;";control = true;} 
	paleta.addEventListener('click',()=>{changeColor(1)})
})

paintfundo.addEventListener('click',()=>{
	paintfundo.classList.toggle('toggleColor',control);
	if(control){paleta.style ="display: block; border-radius: 48%;";control = false;
	}else{paleta.style ="display: none;";control = true;}
	paleta.addEventListener('click',()=>{changeColor(0)}) 
})


function changeColor(nu){
	 if (event.pageX > 1037 && event.pageX < 1110 && event.pageY > 193 && event.pageY < 247){
		  if(nu >= 1){textarea.style.color = "#fefe33";}else{
			textarea.style = "background-color: #fefe33";}
	}else if (event.pageX > 1101 && event.pageX < 1180 && event.pageY > 200 && event.pageY < 272){
			if(nu >= 1){textarea.style.color = "#fabc02";}else{
			textarea.style = "background-color: #fabc02";}
	}else if (event.pageX > 1143 && event.pageX < 1218 && event.pageY > 246 && event.pageY < 312){
			if(nu >= 1){textarea.style.color = "#fb9802";}else{
			textarea.style = "background-color: #fb9802";}
	}else if (event.pageX > 1168 && event.pageX < 1225 && event.pageY > 309 && event.pageY < 375){
			if(nu >= 1){textarea.style.color = "#fd5308";}else{
			textarea.style = "background-color: #fd5308";}
	}else if (event.pageX > 1144 && event.pageX < 1217 && event.pageY > 369 && event.pageY < 440){
			if(nu >= 1){textarea.style.color = "#fe2712";}else{
			textarea.style = "background-color: #fe2712";}
	}else if (event.pageX > 1116 && event.pageX < 1180 && event.pageY > 410 && event.pageY < 480){
			if(nu >= 1){textarea.style.color = "#a6184a";}else{
			textarea.style = "background-color: #a6184a";}
	}else if (event.pageX > 1037 && event.pageX < 1113 && event.pageY > 343 && event.pageY < 490){
			if(nu >= 1){textarea.style.color = "#8601af";}else{
			textarea.style = "background-color: #8601af";}
	}else if (event.pageX > 970 && event.pageX < 1036 && event.pageY > 412 && event.pageY < 483){
			if(nu >= 1){textarea.style.color = "#3c01a4";}else{
			textarea.style = "background-color: #3c01a4";}
	}else if (event.pageX > 930 && event.pageX < 1009 && event.pageY > 370 && event.pageY < 446){
			if(nu >= 1){textarea.style.color = "#0247fe";}else{
			textarea.style = "background-color: #0247fe";}
	}else if (event.pageX > 924 && event.pageX < 982 && event.pageY > 307 && event.pageY < 379){
			if(nu >= 1){textarea.style.color = "#0292ce";}else{
			textarea.style = "background-color: #0292ce";}
	}else if (event.pageX > 934 && event.pageX < 1005 && event.pageY > 240 &&  event.pageY < 314){
			if(nu >= 1){textarea.style.color = "#66b032";}else{
			textarea.style = "background-color: #66b032";}
	}else if (event.pageX > 972 && event.pageX < 1040 && event.pageY > 202 && event.pageY < 274){
			if(nu >= 1){textarea.style.color = "#d0ea2b";}else{
			textarea.style = "background-color: #d0ea2b";}
	}}

