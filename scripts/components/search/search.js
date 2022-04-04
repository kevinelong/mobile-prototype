function search(items, id, message="Search for?") {

    return div(
        `search fill`,
        input("vita-search", "text", `placeholder="${message}"`) +
        (items.length > 0
            ? div("autocomplete", listPeople(name, items, "", "right"))
            : ""),
        `data-previous_id="${id}"`
    );
}
