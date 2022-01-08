const search = (items) =>
    label("search",
        input("vita-search", "text",
            "placeholder=\"Type to search...\""
        ) +
        div("autocomplete", simpleList(name,
            items
            , "", "right"))
    )
