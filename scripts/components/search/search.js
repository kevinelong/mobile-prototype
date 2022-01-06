const search = (items) =>
    label(
        icon("search", "black") +
        input("search", "text",
            "placeholder=\"Search Filter Text\""
            // +" onkeypress=\"if (this.value.length > 0){ show('.autocomplete'); }else{ hide('.autocomplete');}\""
        ) +
        div("autocomplete", simpleList(name,
            items
            , "", "right"))
    )
