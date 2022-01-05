let st = undefined;
let duration = 0;
const showToast = (message) => {

    const ti = document.createElement("toast-item");
    get(".toast").appendChild(ti);

    if (undefined !== st) {
        clearTimeout(st);
        ti.innerHTML += message;
    }else{
        ti.innerHTML = message;
    }

    duration = 2000;

    show(".toast")

    st = setTimeout((e) => {
        hide(".toast");
        st = undefined
        duration = 0;
        get(".toast").innerHTML = "";
    }, duration);
}