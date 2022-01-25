function search(items, id) {

    return label(
        `search`,
        input("vita-search", "text", 'placeholder="Type to search..."') +
        (items.length > 0
            ? div("autocomplete", listPeople(name, items, "", "right"))
            : ""),
        `data-previous_id="${id}"`
    );
}
