import "./home.css";
import home from './home.html'




export const sectionHome = () => {
  const div = document.createElement("div");
  div.innerHTML = home
  return div.firstElementChild;
};
