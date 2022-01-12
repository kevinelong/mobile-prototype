function action(name, which = "", id = "") {
    return `onclick="actionClick('${name}','${which}','${id}')"`;
}

function actionPanel(content) {
    return div(`action-panel`, content);
}

function actionButton(name) {
    return div(`action-button`, name, action(name));
}

function actionItem(name, which = "", id = "", textValue = "", iconColor = "") {
    return div(
        `action-item`,
        icon(name, iconColor, textValue),
        action(name, which, id)
    );
}

function actionClick(action, which = "", id = "") {
    hideDialog();
    route(action, which, id);
}
