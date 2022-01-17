function dreamCardNotification(who, quantity, which) {
    return card(
        "dream",
        div(
            "titles dream",
            row(icon("dream") + col(cardTitle("Dream") + cardSubtitle(which)))
        ) +
            actionItem(
                "open",
                "dream"
                // "https://www.figma.com/proto/RNFPr2XMBBFuj60EEo3TK7/Vita---Greg?page-id=1%3A995&node-id=724%3A3890&viewport=241%2C48%2C0.45&scaling=min-zoom&starting-point-node-id=724%3A3890&show-proto-sidebar=0"
            ),
        text(
            `${quantity} new items added to your linked ${which} dream board by your friend ${who.name}.`
        ),
        [who],
        ["dream"],
        "",
        "",
        "",
        true,
        "Added",
        "Co-Planner"
    );
}
