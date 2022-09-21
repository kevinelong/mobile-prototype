function hashTag(c, color = "none", attrs="") {
    return a(c, `javascript:showPage('explore', '${c}');`, `hash-tag ${color}`, attrs);
}
