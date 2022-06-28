function tag(name, className = "", attrs = "") {
    return `<${name} class="${className}" ${attrs}>`;
}

function closedTag(name, content, className = "", attrs = "") {
    return `<${name} class="${className} ${name}" ${attrs}>${content !== undefined ? content : ""}</${name}>`;
}

function div(className, content, attrs) {
    return closedTag("div", content, className, attrs);
}

function span(className, content = "", attrs = "") {
    return closedTag("span", content, className, attrs);
}

function a(text, href, className = "") {
    return closedTag("a", text, className, `href="${href}"`);
}

function p(content = "", className = "") {
    return `<p ${className ? 'class="' + className + '"' : ""}>${content}</p>`;
}

function button(text, attrs, className = "") {
    return closedTag("button", text, `button ${className}`, attrs);
}

function link(text, attrs, className = "") {
    return closedTag("button", text, `button link ${className}`, attrs);
}

function helpText(text, className = "") {
    return closedTag("div", text, `help-text ${className}`);
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
        `name="${name}" id="${name}" class="${name}" type="${inputType}" onkeypress="onTextInput(event);" ${attrs}`
    );
}


function option(name, value) {
    return closedTag(
        "option",
        name,
        `name="${name}" value="${value}"`
    );
}

function radioInput(name = "", value = "", attrs = "") {
    return label("radio-input",
        row(
            tag(
                "input",
                name,
                `name="${name}" value="${value}" type="radio" ${attrs}`
            ) + text(value)
        )
    );
}

function select(name, optionList) {
    return closedTag(
        `select ${name}`,
        optionList.map(o => option(o.name, o.value)).join("")
    );
}

function radioControl(name, list) {
    return div(
        `radio-control ${name}`,
        list.map(o => radioInput(name, o.value, `data-name="${o.name}"`)).join("")
    );
}

function checkboxControl(textValue = "", name = "", checked = "", attrs = "") {
    name = name ? cleanName(name) : cleanName(textValue);
    checked = checked ? `checked="checked"` : "";
    return div("checkbox-pair nowrap row",
        tag("input", name,
            `name="${name}" id="${name}" ${checked}" type="checkbox" ${attrs}`
        ) + label("label-" + name, textValue, "for=" + name)
    );
}

function selectOptionsComponent(displayName, optionList) {
    return label("select-options-component",
        (displayName ? text(displayName) : "") +
        select(cleanName(displayName), optionList)
    )
}

function radioOptionItem(name = "option", value = "") {
    return {name: name, value: (value ? value : name)};
}

function radioComponent(name, optionList) {
    return label("radio-component",
        text(name) +
        radioControl(cleanName(name), optionList)
    )
}


function textarea(name, content = "", attrs = "") {
    return closedTag(
        `textarea ${name}`,
        content,
        `name="${name}" onkeypress="onTextInput(event);" ${attrs}`
    );
}

function checkbox(name = "") {
    return input(name, "checkbox");
}

function number(amount=0, name = "number", className="number") {
    return label(className,
        input(name, "number",
        `value="${amount}"`)
    );
}

function toggleItem(text) {
    return label(
        "toggle-switch",
        input("", "checkbox") +
        span("toggle-target round") +
        div("toggle-text", text)
    );
}

function toggleSet(list = [""]) {
    return list.map(toggleItem).join("");
}

const tooltip = (tip, content) => div("tooltip", content + span("tooltiptext", tip));
