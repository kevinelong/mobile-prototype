function action(name, which = "", id = -1, object={}) {
    return `onclick="actionClick(this, '${name}','${which}',${id})" data-object="${JSON.stringify(object).replace(/"/g,"'")}"`;
}

function actionPanel(content) {
    return div(`action-panel`, content);
}

const ACTION_COMPONENT_MAP = {
    "rate" : ratingAction,
    "review" : reviewAction,
}
function actionItem(name, which = "", index = -1, textValue = "", iconColor = "", hideText=false, qty= 0) {
    if (ACTION_COMPONENT_MAP.hasOwnProperty(name) ) {
        return ACTION_COMPONENT_MAP[name]();
    }

    if("favorite"===name){
        textValue = qty ? qty : textValue;
    }

    return div(
        `action-item ${name} ${which}`,
        icon(name, iconColor, textValue, hideText),
        action(name, which, index)
    );
}

function personItem(name, which, index, person) {
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
