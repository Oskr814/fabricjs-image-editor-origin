(() => {
  const token = localStorage.getItem('token');

  if (token) {
    window.location.href = '/app';
  }
})();

async function login() {
  let errors = 0;
  const usernameError = document.querySelector('#usernameError');
  const passwordError = document.querySelector('#passwordError');
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');

  if (!username.value || username.value.trim() === '') {
    usernameError.innerHTML = 'Debe ingresar su usuario';
    errors++;
  }
  if (!password.value || password.value.trim() === '') {
    passwordError.innerHTML = 'Debe ingresar la contraseña';
    errors++;
  }

  if (errors) return;

  usernameError.innerHTML = '';
  passwordError.innerHTML = '';

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });

  const token = response.headers.get('Authorization');

  if (token) {
    sessionStorage.setItem('token', token);
    window.location.href = '/app';
  }
}
