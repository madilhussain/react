function customReactFunction1(reactElement, container) {
    
    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);

}

function customReactFunction2(reactElement, container) {

    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to visit google.'
}

const mainRoot = document.getElementById('root');

customReactFunction1(reactElement, mainRoot);
customReactFunction2(reactElement, mainRoot);