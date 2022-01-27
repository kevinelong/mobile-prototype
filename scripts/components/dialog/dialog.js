function dialog(name, content = "") {
    return contentPanel(title(name + actionItem("close")) + content);
}

function showDialog(name, content = "") {
    get(".dialog").innerHTML = dialog(name, content);
    show(".smoke");
    show(".dialog");
}

function hideDialog() {
    hide(".smoke");
    hide(".dialog");
}
