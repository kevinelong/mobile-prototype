function explorePage(selected = false) {
    return page(
        selected,
        "explore",
        "Explore",
        [],
        "",
          img(
              "figma-content",
              "images/explore_cards.png",
              action("open", "explore_detail")
          )
    );

    // return `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRNFPr2XMBBFuj60EEo3TK7%2FVita---Greg%3Fnode-id%3D765%253A1510%26starting-point-node-id%3D765%253A1510" allowfullscreen></iframe>`
    return page(
        selected,
        "explore",
        "Explore",
        ["All", "Personal", "Matches", "Deals"],
        // [
        //     "ALL NETWORK",
        //     "PLANNERS",
        //     "FRIENDS",
        //     "CONFIRMATIONS",
        //     "NEW PEOPLE",
        //     "MATCHES",
        //     "DEALS"
        // ],
        "All",
        cardList(
            exploreCard(
                "images/photos/cannon-beach.jpg",
                "Haystack Rock",
                "Cannon Beach, Oregon",
                "This is an iconic photo opportunity",
                ["Landmark", "Recommended"],
                ["Kevin Long", "Greg Bellowe", "Nina Marie"],
                ["share", "heart", "pin"]
            )
        ),
        "ALL NETWORK"
    );
}
