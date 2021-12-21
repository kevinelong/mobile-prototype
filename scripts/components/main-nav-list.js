const mainNav = (tabNames, selectedItem = "") => [...tabNames].map(
    t => mainNavTab(t.toUpperCase(), t == selectedItem, t)
).join("");
