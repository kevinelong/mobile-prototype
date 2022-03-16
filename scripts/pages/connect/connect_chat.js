function shortName(name){
    const cleansed = cleanName(name).toLowerCase();
    const parts = cleansed.split("-");
    return parts[0] + ' ' + parts[parts.length-1][0] + ".";
}

function connectChatPage(selected = false) {
    return page(
        selected,
        "connect_chat",
        subtitle(messageListExample.members.map(m=>shortName(m.name)).join(", ")) ,
        [],
        "",
        messagePanel(messageListExample.messages),
        "",
        "connect",
        [],
        "Search Chat History",
        "",
        "",
        "",
        ""
    );
}
