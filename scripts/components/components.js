function text(textValue, color) {
    textValue = `${textValue}`; //ensure that the parameter is converted to text in case its was something like qty
    const word_count = textValue.split().length;
    return div(`text wc-${word_count} ${color}`, textValue);
}

function image(path = "") {
    return div("image", "", `style="background-image: url('${path}')"`)
}

function title(textValue) {
    return div("title", textValue);
}

function subtitle(textValue) {
    return div("subtitle", textValue);
}

function circle(textValue) {
    return div("circle", textValue);
}

function contentPanel(content, className = "") {
    return content ? div(`content-panel ${className}`, content) : "";
}

function row(content, attrs = "") {
    return div("row", content, attrs);
}


function rangeRow(content, attrs = "") {
    return div("range-row", content, attrs);
}


function col(content) {
    return div("col", content);
}

function iconPath(name, color = "") {
    return [PREFIX_ICONS, name, color ? "-" + color : "", SUFFIX_ICONS]
        .join("")
        .replace(/([^:]\/)\/+/g, "$1");
}

function facePath(number) {
    return [PREFIX_FACES, number, SUFFIX_FACES]
        .join("")
        .replace(/([^:]\/)\/+/g, "$1");
}

// const iconPath = (name, color = "") => [
//     PREFIX_ICONS,
//     name,
//     color ? "-" + color : "",
//     SUFFIX_ICONS
// ].join('').replace(/([^:]\/)\/+/g, "$1");

const ICON_MAP = {
    "collect_board-black": "collect-black",
    "explore_detail-black": "explore-black",
    "settle_split-black": "settle-black",
    "settle_list-black": "settle-black",
    "connect_chat-black": "connect-black",
    "plan_detail-black": "plan-black",
    accept: "plan",
};

function iconMap(icon) {
    icon = cleanName(icon).toLowerCase();
    if (ICON_MAP.hasOwnProperty(icon)) {
        return ICON_MAP[icon];
    }
    return icon;
}

function icon(name = "menu", iconColor = "", textValue = "", hideText = false) {
    return (
        div(
            `icon-frame ${iconColor}`,
            `<img class="icon" src="${iconPath(iconMap(name), iconColor)}">`
        ) + (textValue && !hideText ? text(textValue, iconColor) : "")
    );
}

function personIcon(person) {
    if (!person || !person.id) {
        return "";
    }

    return (
        div("icon-frame", `<img class="icon" src="${facePath(person.id)}">`) +
        text(person.name ? person.name : "")
    );
}

function person(person) {

    if (!person) {
        //   console.log("person function requires a person object");
        return "";
    }

    return personItem(
        person.name,
        "connect_person",
        person.id,
        person
    );
}

function inputMessage() {
    return label(
        "input-message",
        input("message-input", "text", `placeholder="Type a message..."`)
    );
}

function sectionTitle(content) {
    return div("section-title", content);
}


function actionButton(content, className, attrs) {
    return closedTag(
        "button",
        content,
        `action-button ${className}`,
        `onclick="actionClick('${className}', '${className}', '${className}')" $attrs`
    );
}
