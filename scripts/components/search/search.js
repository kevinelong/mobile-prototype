function search(items) {

    return label(
        "search",
        input("vita-search", "text", 'placeholder="Type to search..."') +
            (items.length > 0
                ? div("autocomplete", listPeople(name, items, "", "right"))
                : "")
    );
}
