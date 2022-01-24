function activityCard(item = {}, index= -1) {
    return card(
        "activity",
        item.title,
        item.description,
        item.people,
        [],
        item.image,
        item.tags,
        index,
        "recommended"
    )
}

function activityListItems(list) {
    if (!list) {
        return "";
    }
    return cardList(title(list.name + actionItem("show"))+ list.items.map(activityCard).join(""));
}

function activityList(list) {
    if (!list) {
        return "";
    }
    return cardList(list.map(activityListItems).join(""));
}

function dreamBoardPage(selected = false) {
    const boardData = [
        {
            name: icon("activities-black") + "Things to Do",
            items: []
        },
        {
            name: icon("landscape-black") + "Places to See",
            items: []
        },
        {
            name: icon("dining-black") + "Restaurants",
            items: [
                {
                    kind: "food",
                    title: "Brasil Arts Cafe",
                    description: "the perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations",
                    image: "images/photos/brasil_arts_cafe.jpeg",
                    people: [{ people:[peopleList[RUBY], peopleList[JOE]], title: "Pinned By", groupName: "Dreamer", subtitle: ""}],
                    tags: ["brazilian", "cafe"],
                }, {
                    kind: "food",
                    title: "Yoichi's",
                    description: "A prix-fixe only spot featuring traditional Japanese small plates &amp; sushi in an intimate setting.",
                    image: "images/photos/yoichis.jpg",
                    people: [{ people:[peopleList[RUBY], peopleList[JOE]], title: "Pinned By", groupName: "Dreamer", subtitle: ""}],
                    tags: ["japanese", "sushi", "prix-fixe"]
                }
            ]
        },
        {
            name: icon("lodging-black") + "Lodging",
            items: []
        },
        {
            name: icon("transportation-black") + "Transportation",
            items: []
        }
    ];

    return page(
        selected,
        "dream_board",
        "Santa Barbara",
        [
            icon("all") + "All",
            icon("ideas") + "Ideas",
            icon("favorites") + "Favorites",
            icon("going","","going"),
        ],
        "All",
        cardGroups(dreamers) +
        activityList(boardData),
        "all",
        "dream"
    );
}
