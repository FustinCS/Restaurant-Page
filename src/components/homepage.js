import Icon from '../images/icon.png';

function homePageComponent() {
    const element = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = "Epic Restaurant Name";

    const description = document.createElement('p')
    description.textContent = "Very fancy description, just imagine this had some cool text inside of it.";

    const image = new Image();
    image.src = Icon;
    
    element.appendChild(title);
    element.appendChild(description);
    element.appendChild(image);

    return element;
}

export { homePageComponent };