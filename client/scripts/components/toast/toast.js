let current_timeout_id = undefined;

function showToast(message) {
    const ti = document.createElement("div");
    ti.classList.add("toast-item");
    get(".toast").appendChild(ti);

    if (undefined !== current_timeout_id) {
        clearTimeout(current_timeout_id);
    }
    ti.innerHTML = message;

    const duration = 2000;

    show(".toast");

    function handleTimeout() {
        current_timeout_id = undefined;
        hide(".toast");
        get(".toast").innerHTML = "";
    }

    current_timeout_id = setTimeout(handleTimeout, duration);
}
