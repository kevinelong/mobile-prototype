//EVENT HANDLER
function onTabClick(e, event) {
    if (!event.target.classList.contains("tab")) {
        return;
    }
    e.closest(".tab-set").querySelectorAll('.tab').forEach(
        t => t.classList.remove("tab-highlight")
    );
    e.closest(".tab-set").querySelectorAll('.tab-content').forEach(
        t => t.classList.add("hidden")
    );
    event.target.classList.add("tab-highlight");
    show(`.tab-content-${event.target.dataset.name}`);
}

//HTML COMPONENTS
const tab = (t, name) => {
    t.title = t.title ? t.title : t.name;
    const highlight = t.name === name ? "tab-highlight" : "";
    return div(
        `tab tab-${t.name} ${highlight}`,
        t.title + div(`tab-indicator`, ""),
        `data-name=${t.name}`
    );
}

const tabContent = (t, name) => {
    const hidden = t.name === name ? "" : "hidden";
    return div(`tab-content tab-content-${t.name} ${hidden}`, t.content)
}

const tabSet = (name = "", tabList = [], selectedTabName = "") => {
    return div("tab-set",
        div("tab-row", tabList.map(t => tab(t, selectedTabName)).join("")) +
        div("tab-row", tabList.map(t => tabContent(t, selectedTabName)).join("")),
        `onclick="onTabClick(this, event)"`
    );
};
