import view from "./header.html";


const createHtml = () => {
  const container = document.querySelector('.main-container')
  const div = document.createElement("div");
  div.innerHTML = view;

  return container.insertAdjacentElement('afterbegin', div.firstElementChild)
};

export const header = () => {
  createHtml()
}