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

listen(
    "click",
    (e) => {
        console.log(e.target);
        if (e.target.classList.contains("smoke")) {
            hide(".smoke");
            hide(".dialog");
        }
    },
    get(".smoke")
);
