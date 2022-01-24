function cardPerson(person, index = 0, limit = 3, which= -1) {
    // if (index >= limit) {
    //     return "";
    // }
    return div(
        "person-icon",
        circle(personItem("person", which, index, person))
    );
}

function cardPeople(group, limit=-1){
    // if(limit===0){
    //     return "";
    // }
    //        [{ people:peopleList, title: "Linked With", groupName: "Dreamer", subtitle: "23 shared cards"}]
    const titleText = group.title ? group.title.toUpperCase() : "";
    const length = group.people.length;
    const plural =( (length !== 1) && (titleText.length > 0)) ? "s" : "";
    const textGroup = group.groupName === "" ? `${length}` : `&nbsp;${length} ${group.groupName + plural}&nbsp;&nbsp;`;

    return div(
        "card-people",
        col(
            text(titleText) +
            row(
                [...group.people].map(p => cardPerson(p, p.id - 1, limit, p.id - 1)).join("") +
                circle(text(textGroup))
            ) +
            text(group.subtitle)
        )
    );
}

function cardGroups(groups, limit=0) {
    return groups.map(g=>cardPeople(g,limit)).join("");
}
