function tag(name, className = "", attrs = "") {
    return `<${name} class="${className}" ${attrs}>`;
}

function closedTag(name, content, className = "", attrs = "") {
    return `<${name} class="${className} ${name}" ${attrs}>${content}</${name}>`;
}

function div(className, content, attrs) {
    return closedTag("div", content, className, attrs);
}

function a(text, href, className = "") {
    return closedTag("a", text, className, `href="${href}"`);
}

function img(className, src = "", attrs = "") {
    return tag("img", `${className} image`, `src="${src}" ${attrs}`);
}

function label(className, content, attrs="") {
    return closedTag(`label`, content, className, attrs);
}

window.onTextInput = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        event.target.value = "";
        return false;
    }
};

function input(name, inputType = "text", attrs = "") {
    return tag(
        "input",
        name,
        `name="${name}" type="${inputType}" onkeypress="onTextInput(event);" ${attrs}`
    );
}
