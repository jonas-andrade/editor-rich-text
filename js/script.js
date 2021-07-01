var textarea = document.querySelector('.area');

var upcase = document.querySelector('#up-arrow');
var downcase = document.querySelector('#down-arrow');
var negrito = document.querySelector('#negrito');
var italico = document.querySelector('#italico');
var sublinhado = document.querySelector('#sublinhado');









upcase.addEventListener('click',()=>{
	var textSelected = textarea.value.substring(textarea.selectionStart,textarea.selectionEnd);
	textarea.value = textarea.value.replace(textSelected,textSelected.toUpperCase());
})

downcase.addEventListener('click',()=>{
	var textSelected = textarea.value.substring(textarea.selectionStart,textarea.selectionEnd);
	textarea.value = textarea.value.replace(textSelected,textSelected.toLowerCase());
})
negrito.addEventListener('click',()=>{
	var textSelected = textarea.value.substring(textarea.selectionStart,textarea.selectionEnd);
	
	textarea.value = textarea.value.replace(textSelected,textSelected.bold());
	
})
