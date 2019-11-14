import _ from 'lodash';
import './styles/test.css';
import testImg from './images/test.jpg';
import click from './click';
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  var eleImg = document.createElement('img');
  eleImg.src=testImg;
  var button = document.createElement('button');
  button.innerHTML='点击';
  button.onclick=click;
  element.appendChild(button);
  element.appendChild(eleImg);
  return element;
}

document.body.appendChild(component());