import view from "./listDebtors.html";

const createHtml = () => {
  const divTable = document.querySelector(".table-container");
  const div = document.createElement("div");
  div.innerHTML = view;
  const tbody = div.querySelector("tbody");

  divTable.append(div.firstElementChild);
};

export const listDebtors = () => {
  createHtml();
  window.link = (id) => {
    const baseUrl = "#/deudores";
    window.location.href = `${baseUrl}/${id}`;
  };
};
