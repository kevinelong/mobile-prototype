function tag(name, className = "", attrs = "") {
    return `<${name} class="${className}" ${attrs}>`;
}

function closedTag(name, content, className = "", attrs = "") {
    return `<${name} class="${className} ${name}" ${attrs}>${content}</${name}>`;
}

function div(className, content, attrs) {
    return closedTag("div", content, className, attrs);
}

function span(className, content, attrs) {
    return closedTag("span", content, className, attrs);
}

function a(text, href, className = "") {
    return closedTag("a", text, className, `href="${href}"`);
}

function img(className, src = "", attrs = "") {
    return tag("img", `${className} image`, `src="${src}" ${attrs}`);
}

function label(className, content, attrs = "") {
    return closedTag(`label`, content, className, attrs);
}

function checkBox(name, className, isChecked, attrs) {
    return label(`label-${className}`, row(input(name, "checkbox", attrs + isChecked ? `checked="checked"` : '') + text(name)));
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


function option(name, value) {
    return closedTag(
        "option",
        name,
        `name="${name}" value="${value}"`
    );
}

function select(name, optionList) {
    return closedTag(
        `select ${name}`,
        optionList.map(o => option(o.name, o.value)).join("")
    );
}


function selectOptionsComponent(name, optionList) {
    return label("select-options-component",
        text(name) +
        select(cleanName(name), optionList)
    )
}


function textarea(name, content = "", attrs = "") {
    return closedTag(
        `textarea ${name}`,
        content,
        `name="${name}" onkeypress="onTextInput(event);" ${attrs}`
    );
}
