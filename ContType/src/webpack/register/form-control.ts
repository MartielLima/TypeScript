import isEmail from 'validator/lib/isEmail';

const form = document.querySelector('.form') as HTMLFormElement;

function throwsError(element: HTMLInputElement, text: string): void {
  const error = document.createElement('span');
  error.classList.add('error-message');
  error.innerText = text;

  const myParent = element.parentElement as HTMLDivElement;
  removeError(element);
  myParent.classList.add('show-error-message');
  myParent.appendChild(error);
}

function removeError(element: HTMLInputElement): void {
  const myParent = element.parentElement as HTMLDivElement;
  const spanErrors = myParent.querySelectorAll('.error-message');
  try {
    spanErrors.forEach((error) => myParent.removeChild(error));
  } catch (e) {
    console.log(e);
  }
  if (myParent) myParent.classList.remove('show-error-message');
}

function validatePassword(): void {
  if (!password.value) throwsError(password, 'A senha deve ser informada.');
  else if (password.value.length <= 3 || password.value.length > 50) {
    throwsError(password, 'A senha deve conter entre 4 e 50 digitos!');
  } else removeError(password);
}

function validatePassword2(): void {
  if (!password2.value) throwsError(password2, 'A senha deve ser informada.');
  else if (password2.value !== password.value)
    throwsError(password2, 'As senhas informadas devem ser iguais!');
  else removeError(password2);
}

function validateEmail(): void {
  if (!email.value) throwsError(email, 'O e-mail deve ser informado.');
  else if (!isEmail(email.value)) throwsError(email, 'E-mail invalido!');
  else removeError(email);
}

function validateUsername(): void {
  if (!username.value) throwsError(username, 'Deve ser informado usuario.');
  else if (username.value.length <= 3)
    throwsError(username, 'O usuario deve conter no minimo 3 digitos.');
  else removeError(username);
}

// Validando username
const username = form.username as HTMLInputElement;
username.addEventListener('blur', validateUsername);

// Validando email
const email = form.email as HTMLInputElement;
email.addEventListener('blur', validateEmail);

//Validando senha
const password = form.password as HTMLInputElement;
const password2 = form.password2 as HTMLInputElement;
password.addEventListener('blur', validatePassword);
password2.addEventListener('blur', validatePassword2);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  if (form.querySelectorAll('.error-message').length === 0) {
    validatePassword();
    validatePassword2();
    validateEmail();
    validateUsername();
  }

  const errors = form.querySelectorAll('.error-message').length;

  if (!errors) form.submit();
});
