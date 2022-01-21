function cardPerson(person, index = 0, limit = 3) {
    if (index >= limit) {
        return "";
    }
    return div(
        "person-icon",
        circle(personItem("person", "connect", index, person))
    );
}

function cardPeople(peopleList, showSuffix = false, verb = "", group = "", limit = 3) {
    if (!peopleList || peopleList.length == 0) {
        return "";
    }
    return div(
        "card-people",
        col(
            (verb.length ? text(`${verb.toUpperCase()} BY`) : "") +
            row(
                [...peopleList].map((p, i) => cardPerson(p, p.id - 1, limit)).join("") +
                (showSuffix ? circle(text(
                    `&nbsp;${peopleList.length} ${group ? group + (peopleList.length > 1 ? "s" : "") :""}&nbsp;`
                )) : "")
            )
        )
    );
}
