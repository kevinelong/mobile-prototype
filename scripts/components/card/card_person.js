function cardPerson(person, index = 0, limit = 3, which = -1) {
    return div(
        "person-icon",
        circle(personItem("person", which, index, person))
    );
}

function cardContact(person, tags = [], actionName = "connect_chat") {
    return div(
        "card contact",
        row(
            circle(contactItem("contact", person)) +
            hashTags(tags) +
            actionItem(actionName)
        )
    );
}

function cardGroup(peopleList) {
    return div(
        "card contact",
        row(
            icon("people", "black") +
            hashTags(peopleList.map(p => p.name)) +
            actionItem("connect_chat", "open", -1, "")
        ) +
        row(
            actionItem("add", "connect", -1, "Add Participant")
        ),
        action("open", "connect_chat")
    );
}

const PLURALS = {
    "taste match": "taste matches",
    "person": "people",
    "match": "matches"
}

function pluralSuffix(word) {
    const wordLower = word.toLowerCase();
    if (PLURALS.hasOwnProperty(wordLower)) {
        return PLURALS[wordLower].toLowerCase();
    }
    return `${wordLower}s`;
}

function cardPeople(group, limit = -1, index, all) {
    const titleText = group.title ? group.title.toUpperCase() : "";
    const length = group.people.length;
    const isPlural = ((length !== 1) && (titleText.length > 0)) ? titleText : "";
    const textGroup = group.groupName === "" ? `${length}` : `&nbsp;${length} ${isPlural ? pluralSuffix(group.groupName) : group.groupName}&nbsp;&nbsp;`;
    const isSameKind = index > 0 && group.title === all[index - 1].title;
    const isLast = index === all.length - 1;
    return div(
        "card-people",
        col(
            (isSameKind ? "" : text(titleText)) +
            row(
                [...group.people].map(p => cardPerson(p, p.id - 1, limit, p.id - 1)).join("") +
                circle(text(textGroup))
            )
            // + (!isSameKind || isLast ? text(group.subtitle) : "")
        )
    );
}

function cardGroups(groups, limit = 0) {
    return groups.map((g, i, all) => cardPeople(g, limit, i, all)).join("");
}

function cardSummary(groups, limit = 0) {
    let result = [];
    groups.reduce(function (r, v) {
        if (!r[v.title]) {
            r[v.title] = {title: v.title, qty: 0};
            result.push(r[v.title])
        }
        r[v.title].qty += v.people.length;
        return r;
    }, {});
    return result.map(g => `${g.title} ${g.qty}`).join(", ");
}
