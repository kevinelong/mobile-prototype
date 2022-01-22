function action(name, which = "", id = -1, object = {}) {
    // if(name=="block"){
    //     debugger;
    // }
    return `onclick="actionClick(this, '${name}','${which}',${id})" data-object="${JSON.stringify(
        object
    ).replace(/\"/g, "'")}"`;
}

function actionPanel(content) {
    return div(`action-panel`, content);
}

function actionItem(
    name,
    which = "",
    index = -1,
    textValue = "",
    iconColor = "",
    hideText = false
) {
    return div(
        `action-item ${name} ${which}`,
        icon(name, iconColor, textValue, hideText),
        action(name, which, index)
    );
}

function personItem(name, which, index, person) {
    if ((!name, !which, !index, !person)) {
        console.log(name, which, index, person);
    }
    return div(
        `action-item person ${name} ${which}`,
        personIcon(person),
        action(name, which, index, person)
    );
}

function actionClick(target, action, which = "", index = -1, data = {}) {
    hideDialog();
    route(target, action, which, index, data);
}
