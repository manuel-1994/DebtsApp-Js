import view from "./listUserDebts.html";
import { debtsList } from "../../";


export const listUserDebts = (id) => {
  const div = document.createElement("div");
  div.innerHTML = view;
  const tbody = div.querySelector("tbody");

  const { debts } = debtsList;
  Object.values(debts).forEach(({name, userDebts}) => {
      if (id === name){
          Object.values(userDebts).forEach(({desc,value,id})=>{
              const date = new Date(id).toLocaleDateString()
              tbody.innerHTML += `  <tr data-id=${id}>
              <td >${date}</td>
              <td >${desc}</td>
              <td>${value} $</td>
            </tr>`;
          })
      }
  });
  return div.firstElementChild;
};