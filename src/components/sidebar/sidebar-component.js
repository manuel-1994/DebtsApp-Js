import view from "./sidebar.html";

export const sidebar = () => {
  const div = document.createElement("div");
  div.innerHTML = view;
  const side = div.querySelector(".side");
  side.innerHTML = `
    <h1 class="side-title">DebtsApp</h1>
    <hr>
    <ul class="side-nav">
      <li class="side-nav-list"><a class="side-nav-item" href="#/home">Inicio</a></li>
      <li class="side-nav-list"><a class="side-nav-item" href="#/debts">Deudas</a></li>
      <li class="side-nav-list"><a class="side-nav-item" href="#" >Deudores</a></li>
    </ul>
    `;

  return div.firstElementChild;
};
