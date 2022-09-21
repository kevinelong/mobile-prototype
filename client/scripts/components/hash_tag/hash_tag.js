function hashTag(c, color = "none", attrs="") {
    return div("hash-tag", c, `onclick="showPage('explore');actionClick(event, this, 'Apply','filter-things-to-do','0')"`);
}
