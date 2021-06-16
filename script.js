
  const arrowButton = document.querySelector(".submit");
  const divError = document.querySelector(".alert");

  arrowButton.addEventListener("click", function(event) {

  event.preventDefault();
  divError.innerHTML = '';

  const inputEmail = document.querySelector(".input");
  const errorEmail = document.querySelector(".error_msg");

  if(inputEmail.validity.valid) {
    errorEmail.innerHTML = '';
  } else {
    errorEmail.innerHTML = 'Please provide a valid email';
    insertErrorIcon();
  }
});

  function insertErrorIcon (){
  const img = document.createElement("img");
  img.setAttribute('src', 'images/icon-error.svg');
  divError.appendChild(img);
}
