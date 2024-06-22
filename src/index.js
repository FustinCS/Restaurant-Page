import { homePageComponent } from "./components/homepage";
import { menuComponent } from "./components/menu";
import { aboutComponent } from "./components/about";

const content = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

content.appendChild(homePageComponent());

home.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(homePageComponent());
})

menu.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(menuComponent());
})

about.addEventListener('click', () => {
    content.replaceChildren();
    content.appendChild(aboutComponent());
})