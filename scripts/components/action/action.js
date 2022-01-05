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
    icon(name) + text(name),
    action(name, which, id)
);

const actionClick = (action, which = "", id = "") => {
    hideDialog();
    if (action == "back") {
        showPage(window.lastPage);
    } else if ("open" == action) {
        showPage(which, action, id);
    } else if (["add", "new"].includes(action)) {
        addMessage();
    } else if (["search", "more"].includes(action)) {
        showDialog("Search", search([
            ["KL", "Kevin", "Long", ""],
            ["NM", "Nina", "Marie", ""],
            ["GB", "Greg", "Bellowe", ""]
        ]));
    } else if (["hide"].includes(action)) {
        hideDialog();
    } else if (["plan"].includes(action)) {
        showToast("Added to Plan");
    } else if (["settle"].includes(action)) {
        showToast("Payment Settled");
    } else {
        console.log(action);
    }
}