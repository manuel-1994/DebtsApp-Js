
export const sidebar = (title) => {
  const main = document.querySelector('.main-content')
  const div = document.createElement("div");
  const view = `    
    <aside class="side px-4 pt-2">
    <h2>${title}</h2>
    <img class="aside-img" src="./assets/webpack-logo.png" alt="">
    </aside>`;
  div.innerHTML = view;
  main.insertAdjacentElement('afterbegin',div.firstElementChild)
};
