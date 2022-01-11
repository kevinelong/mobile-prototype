
function tag(name, className="", attrs="") {
    return `<${name} class="${className}" ${attrs}>`;
}
function closedTag(name, content, className="", attrs="") {
    return `<${name} class="${className}" ${attrs}>${content}</${name}>`;
}
function div(className, content, attrs) {
    return closedTag("div", content, className, attrs);
}

function a(text, href, className="") {
    return closedTag("a", text, "",`href="${href}"`);
}
function img(className, src = "") {
    return tag("img", `${className} image`, `src="${src}"`);
}

function label(className, content) {
    return closedTag(`label ${className}`, content);
}

window.onTextInput = (event) => {
    if (event.keyCode==13){
        event.preventDefault();
        event.target.value='';
        return false;
    }
}
function input(
    name,
    inputType="text",
    attrs=""
) {
    return tag(
        "input",
        name,
        `name="${name}" type="${inputType}" onkeypress="onTextInput(event);" ${attrs}`
    );
}
