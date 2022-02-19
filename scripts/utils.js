function getAll(q) {
    return document.querySelectorAll(q);
}

function get(q) {
    return getAll(q)[0];
}

function currency(number) {
    if (typeof number === "string") {
        number = Number(number);
    }
    return number.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
}

function toName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-zA-Z0-9À-ž\s]/g, "-")
        .replace(" ", "_");
}

function titleCase(str) {
    return str.replace("-", " ").split(' ').map(function(word) {
        return word === word.toUpperCase() ? word : (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }).join(' ');
}

function selectItem(e, id, index, text) {
    console.log("select", e, id, index, text);
    [...e.parentElement.children].forEach((s) =>
        s.classList.remove("selected")
    );
    e.classList.add("selected");
    applyFilter(e, id, index, text);
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
    if ("" === pageName) {
        //   console.log("Missing pageName: " + pageName);
        return;
    }
    const page = get(`.page.${pageName}`);
    if (!page) {
        //   console.log("No such page element: " + pageName);
        return;
    }
    const parts = pageName.split("_");
    if (parts.length === 1) {
        window.lastPage = pageName;
        selectItem(get("#main-nav-tab-" + pageName));
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
    if (!e) {
        console.log(`selector '${selector}' not matched.`)
        return;
    }
    e.classList.add("hidden");
}

function selectPage(e) {
    selectItem(e);
    const name = toName(e.id);
    const parts = name.split("-");
    if (parts.length < 2) return;
    const pageName = parts.pop();
    if (pageName.length < 1) return;

    window.lastPage = pageName;
    const pages = getAll(".page");

    if (!pages) {
        //   console.log("", "getAll, can't find .pages to hide.");
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
    return encodeURI(`${n}`.trim().toUpperCase().replace(/\s/g, "-"));
}

function applyConnectFilter(e, id, index, text) {
    console.log("applyConnectFilter", e, id, index, text)
    const cp = e.closest(".page");
    if (!cp) {
        return;
    }

    const cards = cp.querySelectorAll(".card");
    text = cleanName(text);

    cards.forEach(c => {

        if ("ALL" === text) {
            return showElement(c);
        }

        if (!e.dataset.choice || !c.dataset.kind) {
            return hideElement(c);
        }

        let kind = cleanName(c.dataset.kind);
        let choiceName = cleanName(e.dataset.choice);
        if (choiceName === kind) {
            return showElement(c);
        }

        if ("NOTIFICATIONS" === choiceName && !["1-ON-1", "GROUP-CHAT"].includes(kind)) {
            return showElement(c);
        }

        hideElement(c);
    });
}

function applyExploreFilter(e, id, index, text) {
    console.log("applyExploreFilter", e, id, index, text);
    if (1 === index) {
        showSearch("Filter");
    } else if (2 === index) {
        showThingsToDo();
    } else if (3 === index) {
        showRestaurants();
    } else if (4 === index) {
        showLodging();
    } else {
        console.log("INVALID ID: " + id);
    }
}

function applyFilter(e, id, index, text) {

    if (!e || !e.closest) {
        return;
    }

    const page = e.closest(".page");

    if (!page) {
        return;
    }

    if (page.classList.contains("connect")) {
        applyConnectFilter(e, id, index, text);
    } else if (page.classList.contains("explore")) {
        if (id === "to-do-subcategory-choices") {
            if (text === "BROADCAST") {
                show(`.${id} .${text}`);
            }
        } else {
            applyExploreFilter(e, id, index, text);
        }
    }
}


function applyFilterText(parentElement, childClass, searchText) {

    console.log("applyFilterText", parentElement, childClass, searchText);

    if (!parentElement) {
        return;
    }

    const children = parentElement.querySelectorAll(childClass);

    children.forEach((c) => {

        if (!searchText) {
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
    const parent = target.closest(".action-item");
    const cardElement = target.closest(".card");

    for (let i = 0; i < 4; i++) {
        const starElement = parent.getElementsByClassName("star-" + i)[0];
        if (i <= index) {
            starElement.classList.add("on")
        } else {
            starElement.classList.remove("on")
        }
    }

    parent.getElementsByClassName("text")[0].innerHTML = `${index + 1}`;
    parent.querySelectorAll(".rating-action > .icon-frame img")[0].setAttribute("src", iconPath("star"));

    const ra = cardElement.querySelectorAll(".action-item.review");

    if (ra) {
        showElement(ra[0]);
    }

    showToast("Rating Sent!")
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

function object_list_to_list_of_lists(raw_data, key_list) {
    let output = []
    output.push(key_list.map(key => key.toUpperCase()));
    raw_data.map(item => {
        output.push(key_list.map(key => item[key]))
    });
    return output;
}


const hasPeople = e => e.groups && e.groups[0] && e.groups[0].people;
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;
const linear = c => `linear-gradient(${c})`;
const bg = c => `background:${c};`;
const bgImage = (i, color) => `${color} url('${i}') center/cover no-repeat;`;
const styleAttr = (c, color) => `style="${c};background-color:${color};"`;
const gradient = list => linear(list.map(a => rgba(...a)).join(', '));
const gradStyle = (list, color) => styleAttr(bg(gradient(list)), color);
const imgStyle = (list, imagePath, color) => styleAttr(bg(gradient(list) + ',  ' + bgImage(imagePath, color)), color);
const rgbA = (list, n = 0) => list.map(a => [n, n, n, a]);

const isCurrent = ve=>ve.period === getPeriods()[current_period];
const currentPrefix = ic => ic ? 'is' : 'not';
const currentClass = ve => `${currentPrefix(isCurrent(ve))}-current-period`;
const cardStyle = ve=> ve.imagePath ? imgStyle(rgbA([.7, 0, .7]), ve.imagePath, ve.period.color) : gradStyle(rgbA([.7, 0, .7]), ve.period.color);
