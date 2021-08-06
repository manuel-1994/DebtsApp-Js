import view from "./listDebts.html";
import { debtsList } from "../../";


export const listDebts = () => {
  const div = document.createElement("div");
  div.innerHTML = view;
  const tbody = div.querySelector("tbody");

  window.link = (id) =>{
    const baseUrl= "#/debts"
    window.location.href = `${baseUrl}/${id}`
  }

  const { debts } = debtsList;
  Object.values(debts).forEach((user) => {
    tbody.innerHTML += `  <tr data-id=${user.name}>
    <td >${user.name}</td>
    <td >${user.total}</td>
    <td><a href="#/debts/${user.name}" class="btn btn-success" >√</a></td>
  </tr>`;
  });

  return div.firstElementChild;
};
