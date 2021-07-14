function getPassword(){
	
	var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+?><:{}[]"
	var passwordLength = 16;
	var password = "";

	for (var i=0; i<passwordLength; i++){
		
		console.log(password);

		var randomNumber = Math.floor(Math.random() * chars.length); 
		password += chars.substring(randomNumber,randomNumber+1);


		//Math.floor()
		//Math.random()
		//substring()
	}
		document.getElementById("password").value = password;
};

function copyPassword(){
	var copyPassText = document.getElementById("password");
	copyPassText.select();
	copyPassText.setSelectionRange(0,9999);
	document.execCommand("copy");

};





