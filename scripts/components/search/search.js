const search = (items) =>
    label(
        // icon("search", "black") +
        input("vita-search", "text",
            "placeholder=\"Type to search...\""
            // +" onkeypress=\"if (this.value.length > 0){ show('.autocomplete'); }else{ hide('.autocomplete');}\""
        ) +
        div("autocomplete", simpleList(name,
            items
            , "", "right"))
    )
