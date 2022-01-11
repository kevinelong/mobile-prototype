const search = (items) =>
    label("search",
        input("vita-search", "text",
            "placeholder=\"Type to search...\""
        ) +
        (items.length > 0 ? div("autocomplete", simpleList(name,
            items
            , "", "right")) : "")
    )
