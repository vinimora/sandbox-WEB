function validacao()
{ 
	const form = document.formu;
	const {
		nome,
		senha,
		email,
	} = form;

	if (nome.value =="") {
		alert("por favor, preencha o formulario");
		nome.focus(); 
		return false; 
	}

	if (email.value=="" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
		alert("email invalido");  
		email.focus(); 
		return false;
	} 

	if (senha.value.length < 8) {
		alert(" A senha deve conter no minimo 8 caracteres");
		senha.focus();
		return false;
 	}

	if (senha.value.length > 16) {
		alert("A senha deve conter no maximo 16 caracteres"); 
		senha.focus(); 
		return false;
	}  
} 
