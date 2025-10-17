const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const goToRegister = document.getElementById("goToRegister");
const goToLogin = document.getElementById("goToLogin");

const loginBox = document.querySelector(".form-box.login");
const registerBox = document.querySelector(".form-box.register");

goToRegister.addEventListener("click", () => {
  loginBox.classList.add("hidden");
  registerBox.classList.remove("hidden");
});

goToLogin.addEventListener("click", () => {
  registerBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if (!name || !email || !password) {
    alert("Preencha todos os campos!");
    return;
  }

  if (localStorage.getItem(email)) {
    alert("Usuário já cadastrado!");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));
  alert("Cadastro realizado com sucesso!");
  registerForm.reset();
  registerBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const user = JSON.parse(localStorage.getItem(email));

  if (!user || user.password !== password) {
    alert("Email ou senha incorretos!");
    return;
  }

  // Armazena o usuário logado e redireciona
  localStorage.setItem("userLogged", JSON.stringify(user));
  window.location.href = "inicio.html";
});
