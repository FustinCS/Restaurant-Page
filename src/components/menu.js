import '../style.css';

function menuComponent() {
    const element = document.createElement('div');
    element.appendChild(createMenuItem('sushi', 5));
    element.appendChild(createMenuItem('steak', 20));
    element.appendChild(createMenuItem('ice cream', 3));

    return element;
}

function createMenuItem(name, price) {
    const item = document.createElement('div');

    const itemName = document.createElement('h3');
    itemName.textContent = name;
    
    const itemPrice = document.createElement('p');
    itemPrice.textContent = '$' + price;

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.classList.add('item');
    return item;
}

export { menuComponent };