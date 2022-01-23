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
            name: "Things to Do",
            items: []
        },
        {
            name: "Places to See",
            items: []
        },
        {
            name: "Restaurants",
            items: [
                {
                    kind: "food",
                    title: "Brasil Arts Cafe",
                    description: "the perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations",
                    image: "images/photos/brasil_arts_cafe.jpeg",
                    people: [peopleList[BF], peopleList[JOE], peopleList[RUBY],],
                    tags: ["brazilian", "cafe"],
                }, {
                    kind: "food",
                    title: "Yoichi's",
                    description: "A prix-fixe only spot featuring traditional Japanese small plates &amp; sushi in an intimate setting.",
                    image: "images/photos/yoichis.jpg",
                    people: [peopleList[BF], peopleList[JOE],],
                    tags: ["japanese", "sushi", "prix-fixe"]
                }
            ]
        },
        {
            name: "Lodging",
            items: []
        },
        {
            name: "Transportation",
            items: []
        }
    ];

    return page(
        selected,
        "dream_board",
        "Santa Barbara",
        [
            "All",
            "Ideas",
            "Favorites",
            "Going",
        ],
        "All",
        activityList(boardData),
        "ALL NETWORK",
        "dream"
    );
}
