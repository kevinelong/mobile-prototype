function action(name, which = "", id = "") {
    return `onclick="actionClick(this, '${name}','${which}','${id}')"`;
}

function actionPanel(content) {
    return div(`action-panel`, content);
}

function actionItem(name, which = "", id = "", textValue = "", iconColor = "", hideText=false) {
    return div(
        `action-item ${name} ${which}`,
        icon(name, iconColor, textValue, hideText),
        action(name, which, id)
    );
}

function personItem(name, which = "", id = "", person = {}) {
    return div(
        `action-item person ${name} ${which}`,
        personIcon(person),
        action(name, which, id)
    );
}

function actionClick(target, action, which = "", id = "") {
    hideDialog();
    route(target, action, which, id);
}
