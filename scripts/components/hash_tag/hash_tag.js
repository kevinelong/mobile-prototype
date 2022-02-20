function hashTag(c, color = "none") {
    return div(`hash-tag ${color}`, c, action("explore", c));
}
