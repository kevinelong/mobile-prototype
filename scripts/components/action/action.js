const action = (name, which = "", id = "") => ` onclick="actionClick('${name}','${which}','${id}')"`;

const actionPanel = (content) => div(
    `action-panel`,
    content);
const actionButton = (name) => div(
    `action-button`,
    name,
    action(name)
);
const actionItem = (name, which = "", id = "") => div(
    `action-item`,
    icon(name),
    action(name, which, id)
);
