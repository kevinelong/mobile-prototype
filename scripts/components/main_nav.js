function mainNavTab(text = "", selected = false, icon = "compass", index) {
    return `
        <div
            id="main-nav-tab-${toName(text)}"
            class="main-nav-tab index-${index} ${selected ? " selected" : ""}"
            onclick="selectPage(this)">
        
            <div class="main-nav-tab-background" id="${toName(text)}">
                <div class="icon-frame">
                    <img class="icon" src="./images/nav/icon-nav-${icon}-black.svg">
                </div>
                <div class="nav-caption">${text}</div>
            </div>
        </div>
    `;
}

function mainNav(tabNames = [""], promotedTabs = [""], selectedItem = "") {
    return div(
            `main-nav length-${tabNames.length}`,
            [...tabNames]
                .map((t, i) => mainNavTab(t.toUpperCase(), t === selectedItem, t, i))
                .join("")
        ) +
        div(`promoted-tabs length-${tabNames.length}`,
            [...promotedTabs]
                .map((t, i) => mainNavTab(t.toUpperCase(), t === selectedItem, t, i))
                .join("")
        );
}
