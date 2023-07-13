import myName from './myName';
import './style.css';
import Icon from './icon.png';


function component() {
  const element = document.createElement('div');
  element.classList.add("hello")

  // use your function!
  element.textContent = myName('Cody');
  return element;
}

document.body.appendChild(component());
