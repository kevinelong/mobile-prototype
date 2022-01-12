function getAll(q) {
    return document.querySelectorAll(q);
}

function get(q) {
    return getAll(q)[0];
}

function toName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-zA-Z0-9À-ž\s]/g, "-")
        .replace(" ", "_");
}

function select(e) {
    [...e.parentElement.children].forEach((s) =>
        s.classList.remove("selected")
    );
    e.classList.add("selected");
}

function showElement(e) {
    if (!e) return;
    e.classList.remove("hidden");
}

function hideElement(e) {
    if (!e) return;
    e.classList.add("hidden");
}

function showPage(pageName, action = "", id = "") {
    if ("" == pageName) {
        console.log("Missing pageName: " + pageName);
        return;
    }
    const page = get(`.page.${pageName}`);
    if (!page) {
        console.log("No such page element: " + pageName);
        return;
    }
    const parts = pageName.split("_");
    if (parts.length == 1) {
        window.lastPage = pageName;
        select(get("#main-nav-tab-" + pageName));
    }
    document.body.setAttribute("page", name);
    document.body.setAttribute("page-action", action);
    document.body.setAttribute("page-id", id);

    const pages = document.getElementsByClassName("page");
    [...pages].forEach(hideElement);
    showElement(page);
}

function show(selector) {
    const e = get(selector);
    if (!e) return;
    e.classList.remove("hidden");
}

function hide(selector) {
    const e = get(selector);
    if (!e) return;
    e.classList.add("hidden");
}

function selectPage(e) {
    select(e);
    const name = toName(e.id);
    const parts = name.split("-");
    if (parts.length < 2) return;
    const pageName = parts.pop();
    if (pageName.length < 1) return;


    if (pageName == "explore"){
        window.open("https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?node-id=765%3A1510&starting-point-node-id=765%3A1510&show-proto-sidebar=0", "_self");
    }

    window.lastPage = pageName;
    [...getAll(".page")].forEach(hideElement);
    showPage(pageName);

}

function fire(eventTypeName, elem = document.body) {
    const event = new Event(eventTypeName);
    elem.dispatchEvent(event);
}

function listen(eventTypeName, handler, elem = document.body) {
    elem.addEventListener(eventTypeName, handler);
}
