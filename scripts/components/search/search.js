function search(items, id, message="Search for?") {

    return label(
        `search`,
        input("vita-search", "text", `placeholder="${message}"`) +
        (items.length > 0
            ? div("autocomplete", listPeople(name, items, "", "right"))
            : ""),
        `data-previous_id="${id}"`
    );
}
