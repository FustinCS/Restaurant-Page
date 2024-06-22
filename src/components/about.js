function aboutComponent() {
    const element = document.createElement('div');

    const numberContainer = document.createElement('div');
    const number = document.createElement('p');
    const location = document.createElement('p');
    
    number.textContent = '415-123-4567';
    location.textContent = 'Plaza Verde';

    numberContainer.appendChild(number);
    numberContainer.appendChild(location);

    element.appendChild(numberContainer);

    return element;
}

export { aboutComponent };