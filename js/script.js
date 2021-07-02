var textarea = document.querySelector('.area');


var upcase = document.querySelector('#up-arrow');
var downcase = document.querySelector('#down-arrow');
var negrito = document.querySelector('#negrito');
var italico = document.querySelector('#italico');
var sublinhado = document.querySelector('#sublinhado');

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

