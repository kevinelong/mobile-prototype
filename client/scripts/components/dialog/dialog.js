function dialog(name, content = "") {
    return contentPanel(title(name + actionItem("close")) + content);
}

function showDialog(name, content = "") {
    window.currentDialog = name;
    get(".dialog").innerHTML = dialog(name, content);
    show(".smoke");
    show(".dialog");
}

function hideDialog() {
    console.log("window.currentDialog=", window.currentDialog);
    if(window.currentDialog === "Verify"){
        animatePoints();
    }
    window.currentDialog = "";
    hide(".smoke");
    hide(".dialog");
}
