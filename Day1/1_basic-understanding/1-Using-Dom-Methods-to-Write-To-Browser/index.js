const rootElement = document.getElementById('app');

const hOneElement = document.createElement('h1');
hOneElement.className = "orange";
hOneElement.innerText = "Hello World!";

rootElement.appendChild(hOneElement);