function action(name, which = "", id = 0, object={}) {
    return `onclick="actionClick(this, '${name}','${which}',${id})" data-object="${JSON.stringify(object)}"`;
}

function actionPanel(content) {
    return div(`action-panel`, content);
}

function actionItem(name, which = "", id = 0, textValue = "", iconColor = "", hideText=false) {
    return div(
        `action-item ${name} ${which}`,
        icon(name, iconColor, textValue, hideText),
        action(name, which, id)
    );
}

function personItem(name, which, index, person) {
    if(!name, !which, !index, !person){
        console.log(name, which, index, person);
    }
    return div(
        `action-item person ${name} ${which}`,
        personIcon(person),
        action(name, which, index, person)
    );
}

function actionClick(target, action, which = "", id = 0) {
    hideDialog();
    route(target, action, which, id);
}
