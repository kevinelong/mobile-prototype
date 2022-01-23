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

function select(e, id) {
    [...e.parentElement.children].forEach((s) =>
        s.classList.remove("selected")
    );
    e.classList.add("selected");
    applyConnectPageFilter(e, id);
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

function applyFilter() {

}

function selectPage(e) {
    select(e);
    const name = toName(e.id);
    const parts = name.split("-");
    if (parts.length < 2) return;
    const pageName = parts.pop();
    if (pageName.length < 1) return;

    window.lastPage = pageName;
    const pages = getAll(".page");
    if (!pages) {
        debugger;
        console.log("", "getAll, can't find .pages to hide.");
    } else {
        [...pages].forEach(hideElement);
    }
    showPage(pageName);
}

function fire(eventTypeName, elem = document.body) {
    const event = new Event(eventTypeName);
    elem.dispatchEvent(event);
}

function listen(eventTypeName, handler, elem = document.body) {
    elem.addEventListener(eventTypeName, handler);
}

function cleanName(n) {
    return n.trim().toUpperCase().replace(/\s/g, "-");
}

function applyConnectPageFilter(e) {

    if (!e) {
        return;
    }

    const cp = e.closest(".page");
    if (!cp) {
        return;
    }

    const cards = cp.querySelectorAll(".card");
    const text = e.innerHTML.toUpperCase();
    console.log(text);

    cards.forEach((c, i) => {

        if ("ALL" == text) {
            return showElement(c);
        }

        if (!e.dataset.choice || !c.dataset.kind) {
            return hideElement(c);
        }

        let kind = cleanName(c.dataset.kind);
        let choiceName = cleanName(e.dataset.choice);
        const content = cleanName(c.outerHTML);
        console.log(content);

        if (choiceName == kind) {
            return showElement(c);
        }

        if ("NOTIFICATIONS" == choiceName && !["1-ON-1", "GROUP-CHAT"].includes(kind)) {
            return showElement(c);
        }
        hideElement(c);
    });
}

function applyFilterText(parentElement, childClass, searchText) {

    if (!parentElement) {
        return;
    }

    const children = parentElement.querySelectorAll(childClass);

    children.forEach((c, i) => {

        if ("" == searchText) {
            return showElement(c);
        }

        let cleanText = cleanName(searchText);
        const content = cleanName(c.outerHTML);

        if (content.indexOf(cleanText) === -1) {
            showElement(c);
        } else {
            hideElement(c);
        }

    });
}

function onStar(target, index) {
    const parent = target.closest(".card");

    for (let i = 0; i < 4; i++) {
        console.log(i)
        if (i <= index) {
            console.log("on");
            parent.getElementsByClassName("star-" + i)[0].classList.add("on")
        } else {
            console.log("off");
            parent.getElementsByClassName("star-" + i)[0].classList.remove("on")
        }
    }
    parent.getElementsByClassName("text")[0].innerHTML = `${index + 1}`;
    parent.querySelectorAll(".rating-action > .icon-frame img")[0].setAttribute("src", iconPath("star"));
    const ra = parent.querySelectorAll(".action-item.review");
    debugger;
    if (ra){
        showElement(ra[0]);
    }
}

function star(index) {
    return div("rating-star star-" + index, icon("star"), `onclick="onStar(this, ${index})"`)
}

function rating() {
    return div("rating", [0, 1, 2, 3].map(star).join(""))
}

function ratingAction() {
    return div("action-item rating-action", rating() + icon("star-outline", "", "?"));
}

function reviewAction() {
    return div("action-item review hidden", icon("review", "", "review"));
}
