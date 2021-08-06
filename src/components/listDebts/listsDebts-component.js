import view from "./listDebts.html";
import { debtsList } from "../../";


const createHtml = () => {
  const divTable = document.querySelector('.table-container')
  const div = document.createElement("div");
  div.innerHTML = view;
  const tbody = div.querySelector("tbody");

  const { debts } = debtsList;
  Object.values(debts).forEach((user) => {
    tbody.innerHTML += `  <tr data-id=${user.name}>
    <td >${user.name}</td>
    <td >${user.total}</td>
    <td><a href="#/debts/${user.name}" class="btn btn-success" >√</a></td>
  </tr>`;
  });

  divTable.append(div.firstElementChild)
};

export const listDebts = ()=>{
  createHtml()
  window.link = (id) =>{
    const baseUrl= "#/deudas"
    window.location.href = `${baseUrl}/${id}`
  }
}