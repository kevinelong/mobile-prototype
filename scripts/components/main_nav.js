const mainNavTab = (text = "", selected = false, icon = "compass", index) =>
    `<div 
        id="main-nav-tab-${toName(text)}" 
        class="main-nav-tab index-${index} ${selected ? ' selected' : ''}" 
        onclick="selectPage(this)">
        
        <div class="main-nav-tab-background" id="${toName(text)}">
            <div class="icon-frame">
                <img class="icon" src="./images/nav/icon-nav-${icon}-black.svg">
            </div>
            <div class="label">${text}</div>
        </div>
</div>`

const mainNav = (tabNames, selectedItem = "") => div(`main-nav length-${tabNames.length}`, [...tabNames].map(
    (t, i) => mainNavTab(t.toUpperCase(), t == selectedItem, t, i)
).join(""));

