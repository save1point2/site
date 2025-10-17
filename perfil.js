document.addEventListener("DOMContentLoaded", () => {
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const fotoPerfil = document.getElementById("fotoPerfil");
  const uploadFoto = document.getElementById("uploadFoto");
  const logoutBtn = document.getElementById("logout");

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioAtual = usuarios.find(u => u.email === usuarioLogado.email);

  if (usuarioAtual) {
    nomeInput.value = usuarioAtual.nome;
    emailInput.value = usuarioAtual.email;
    senhaInput.value = usuarioAtual.senha;
    if (usuarioAtual.foto) fotoPerfil.src = usuarioAtual.foto;
  }

  // Atualizar foto de perfil
  fotoPerfil.addEventListener("click", () => uploadFoto.click());

  uploadFoto.addEventListener("change", e => {
    const arquivo = e.target.files[0];
    const leitor = new FileReader();
    leitor.onload = () => {
      fotoPerfil.src = leitor.result;
    };
    if (arquivo) leitor.readAsDataURL(arquivo);
  });

  // Salvar alterações
  document.getElementById("perfilForm").addEventListener("submit", e => {
    e.preventDefault();

    usuarioAtual.nome = nomeInput.value;
    usuarioAtual.email = emailInput.value;
    usuarioAtual.senha = senhaInput.value;
    usuarioAtual.foto = fotoPerfil.src;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtual));

    alert("Perfil atualizado com sucesso!");
  });

  // Logout
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
  });
});

