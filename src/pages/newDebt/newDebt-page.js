import "./newDebt.css";
import view from "./newDebt.html";
import { Debts } from "../../classes";
import { debtsList } from "../..";
import { listUserDebts, sidebar } from "../../components";

const body = document.body;
let id, form, txtInput;
const createHtml = () => {
  const main = document.createElement("main");
  main.innerHTML = view;
  txtInput = main.querySelectorAll("input");
  form = main.querySelector("form");
  return body.append(main);
};

const events = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newDebt = new Debts(
      txtInput[0].value,
      txtInput[1].value,
      txtInput[2].value
    );

    debtsList.newDebt(newDebt);
    id = txtInput[0].value;
    form.reset();
  });
};

export const sectionNewDebt = () => {
  body.innerHTML= ''
  sidebar()
  createHtml();
  events();
};
