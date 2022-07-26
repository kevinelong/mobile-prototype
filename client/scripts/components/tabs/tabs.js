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
    show(`.tab-content-${cleanName(event.target.dataset.name)}`);
}

//HTML COMPONENTS
const tab = (t, name) => {
    t.title = t.title ? t.title : t.name;
    const highlight = cleanName(t.name) === cleanName(name) ? "tab-highlight" : "";
    return div(
        `tab tab-${cleanName(t.name)} ${highlight}`,
        t.title + div(`tab-indicator`, ""),
        `data-name=${cleanName(t.name)}`
    );
}

const tabContent = (t, name) => {
    const hidden = cleanName(t.name) === cleanName(name) ? "" : "hidden";
    return div(`tab-content tab-content-${cleanName(t.name)} ${hidden}`, t.content)
}

const tabSet = (name = "", tabList = [], selectedTabName = "", preTabs = "", postTabs = "") => {
    return div(`tab-set ${cleanName(name)}`,
        div("tab-row", preTabs +
            tabList.map(t => tab(t, selectedTabName)).join("") +
            postTabs) +
        div("tab-row", tabList.map(t => tabContent(t, selectedTabName)).join("")),
        `onclick="onTabClick(this, event)"`
    );
};

const tabData = (name, content) => {
    return {name: name, content: content};
};


/*
USAGE:
    tabSet(name, [
        {name: "Timeline", content: timelineContent},
        {name: "Messages", content: messagesContent},
    ], "Timeline")
 */