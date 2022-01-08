const action = (name, which = "", id = "") => `onclick="actionClick('${name}','${which}','${id}')"`;

const actionPanel = (content) => div(
    `action-panel`,
    content
);

const actionButton = (name) => div(
    `action-button`,
    name,
    action(name)
);

const actionItem = (name, which = "", id = "", textValue = "", iconColor = "") => div(
    `action-item`,
    icon(name, iconColor, textValue),
    action(name, which, id)
);

const actionClick = (action, which = "", id = "") => {
    hideDialog();
    route(action,which,id);
}