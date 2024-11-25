function customReact(reactElem, container) {
    let domElem = document.createElement(reactElem.type);
    
    /*
        domElem.setAttribute('href', reactElem.props.href); ❌
        domElem.setAttribute('target', reactElem.props.target); ❌
    */

    for (const prop in reactElem.props) {
        domElem.setAttribute(prop, reactElem.props[prop]); // ✅
    }
    domElem.innerHTML = reactElem.children;
    container.appendChild(domElem);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Click Me!'
}

const mainContainer = document.getElementById('root');

customReact(reactElement, mainContainer);