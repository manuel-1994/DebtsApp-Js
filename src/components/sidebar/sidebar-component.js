import view from "./sidebar.html";

const body = document.body;
const createHtml = () => {
  const div = document.createElement("div");
  div.innerHTML = view;

  return body.insertAdjacentElement('afterbegin', div.firstElementChild)
};

export const sidebar = () => {
  createHtml()
}