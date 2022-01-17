function action(name, which = "", id = "") {
    return `onclick="actionClick('${name}','${which}','${id}')"`;
}

function actionPanel(content) {
    return div(`action-panel`, content);
}

function actionItem(name, which = "", id = "", textValue = "", iconColor = "", hideText=false) {
    return div(
        `action-item`,
        icon(name, iconColor, textValue, hideText),
        action(name, which, id)
    );
}

function personItem(name, which = "", id = "", person = {}) {
    return div(
        `action-item`,
        personIcon(person),
        action(name, which, id)
    );
}

function actionClick(action, which = "", id = "") {
    hideDialog();
    route(action, which, id);
}
