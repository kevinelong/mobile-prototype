
const dialog = (name, content = "") => contentPanel(
    title(name) + content
);
const showDialog = (name, content = "") => {
    get(".dialog").innerHTML = dialog(name, content);
    show(".smoke");
    show(".dialog");
}

const hideDialog = () => {
    hide(".smoke");
    hide(".dialog");
}

listen("click", e => {
    console.log(e.target);
    if (e.target.classList.contains("smoke")) {
        hide(".smoke");
        hide(".dialog");
    }
}, get(".smoke"));