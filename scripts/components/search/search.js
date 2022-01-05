const search = (items) =>
    label(
        input("search", "text",
            "placeholder=\"Filter Text\""
            // +" onkeypress=\"if (this.value.length > 0){ show('.autocomplete'); }else{ hide('.autocomplete');}\""
        ) +
        div("autocomplete", simpleList(name,
            items
            , "", "right"))
    )
