function collectBoardDetailsPage(selected = false) {
    return page(
        selected,
        "collect",
        "Collect", ["All", "Activities", "Dining", "Landmarks", "Lodging"],
        "All",
        "collectBoardDetailsPage",
        "ALL NETWORK"
    );
}