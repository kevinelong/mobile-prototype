const mainNavTab = (text = "", selected = false, icon = "compass") =>
    `<div id="main-nav-tab-${toName(text)}" class="main-nav-tab ${selected ? ' selected' : ''}" onclick="selectPage(this)">
<div class="main-nav-tab-background" id="${toName(text)}">
    <div class="icon-frame">
        <img class="icon" src="./images/nav/icon-nav-${icon}-white.svg">
    </div>
    <div class="label">${text}</div>
</div>
</div>`