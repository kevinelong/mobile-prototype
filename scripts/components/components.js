function text(textValue, color) {
    textValue = `${textValue}`; //ensure that the parameter is converted to text in case its was something like qty
    const word_count = textValue.split().length;
    return div(`text wc-${word_count} ${color}`, textValue);
}

function image(path = "") {
    return div("image", "", `style="background-image: url('${path}')"`)
}

function title(textValue) {
    return div("title", textValue);
}

function subtitle(textValue) {
    return div("subtitle", textValue);
}

function circle(textValue) {
    return div("circle", textValue);
}

function contentPanel(content, className = "") {
    return content ? div(`content-panel ${className}`, content) : "";
}

function row(content, attrs = "", className = "") {
    return div(`row${(className ? ' ' + className : '')}`, content, attrs);
}

function spread(content, attrs = "", className = "") {
    return div(`spread${(className ? ' ' + className : '')}`, content, attrs);
}

function rangeRow(content, attrs = "") {
    return div("range-row", content, attrs);
}


function col(content, attrs = "", className = "") {
    return div(`col${(className ? ' ' + className : '')}`, content, attrs);
}

function stack(content, attrs="", className="") {
    return div(`stack${(className ? ' ' + className : '')}`, content, attrs);
}

function rack(content, attrs="", className="") {
    return div(`rack${(className ? ' ' + className : '')}`, content, attrs);
}

function iconPath(name, color = "") {
    return [PREFIX_ICONS, name, color ? "-" + color : "", SUFFIX_ICONS]
        .join("")
        .replace(/([^:]\/)\/+/g, "$1");
}

function facePath(number) {
    return [PREFIX_FACES, number, SUFFIX_FACES]
        .join("")
        .replace(/([^:]\/)\/+/g, "$1");
}

// const iconPath = (name, color = "") => [
//     PREFIX_ICONS,
//     name,
//     color ? "-" + color : "",
//     SUFFIX_ICONS
// ].join('').replace(/([^:]\/)\/+/g, "$1");

const ICON_MAP = {
    "collect_board-black": "collect-black",
    "explore_detail-black": "explore-black",
    "settle_split-black": "settle-black",
    "settle_list-black": "settle-black",
    "settle_day-black": "settle-black",
    "connect_chat-black": "connect-black",
    "plan_detail-black": "plan-black",
    accept: "plan",
};

function iconMap(icon) {
    icon = cleanName(icon).toLowerCase();
    if (ICON_MAP.hasOwnProperty(icon)) {
        return ICON_MAP[icon];
    }
    return icon;
}

function icon(name = "menu", iconColor = "", textValue = "", hideText = false) {
    return (
        div(
            `icon-frame ${iconColor}`,
            `<img class="icon" src="${iconPath(iconMap(name), iconColor)}">`
        ) + (textValue && !hideText ? text(textValue, iconColor) : "")
    );
}

function personIcon(person) {
    if (!person || !person.id) {
        return "";
    }

    return (
        div("icon-frame", `<img class="icon" src="${facePath(person.id)}">`) +
        text(person.name ? person.name : "")
    );
}

function person(person) {

    if (!person) {
        //   console.log("person function requires a person object");
        return "";
    }

    return personItem(
        person.name,
        "connect_person",
        person.id,
        person
    );
}

function inputMessage() {
    return label(
        "input-message",
        row(
            input("message-input", "text", `placeholder="Type a message..."`) +
            actionItem("add", "attachment")
        )
    );
}

function sectionTitle(content) {
    return div("section-title", content);
}


function actionButton(content, actionName="", which="", id="", attrs="") {
    actionName = actionName ? actionName : cleanName(content);
    which = which ? which : actionName;
    return closedTag(
        "button",
        content,
        `action-button ${actionName}`,
        `onclick="actionClick(event, this, '${actionName}', '${which}', '${id}');" ${attrs}`
    );
}

function mapPreview() {
    return div("map-preview",
        mapActivityCard(activityData[0].items[0])
    )
}

function mapPanel() {
    return div("map-panel",
        button("Est. Time/Distance", "", `est-time-distance button`) +
        actionItem("pin")+
        mapPreview()
    , action("pin"));
}

function hashTags(tags, tagAttrs = "") {
    if (!tags || tags.length === 0) {
        return "";
    }
    return div("card-tags", [...tags].map(
        t => hashTag(t, "none", tagAttrs)
    ).join(""));
}

function interest(text, className = "") {
    return `<div class="hash-tag ${className}">${text
    }</div>`
}

function showMore(button) {
    const list = button.parentElement.querySelectorAll(".hash-tag")
    Array.from(list).map(e => e.classList.remove("hidden"))
    button.remove()
}

function interestList(title, list, limit = 4) {
    const more = `<button onclick="showMore(this)" class="link">${list.length - limit} more</button>`
    return title + `<div class="main-interests">` +
        list.map((i, x) => x < limit ? interest(i) : interest(i, "hidden")).join("") +
        (list.length > limit ? more : "") +
        `</div>`;
}


function labeledInput(name = "", inputType = "text", attrs="") {
    return label(
        cleanName(name),
        (name ? text(name) : "") + input(name, inputType, attrs)
    );
}

function newISODateTime() {
    const date = new Date();
    const dateTimeStr = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
        .toISOString();
    return dateTimeStr;
}

function selectDate(name = "", chosenDate = "") {
    if (!chosenDate) {
        const dateString = newISODateTime().split("T")[0];
        return labeledInput(name, "date", `value=${dateString}`);
    }
    return labeledInput(name, "date", `value=${chosenDate}`);
}

function selectTime(name = "", chosenTime = "") {
    if (!chosenTime) {
        const timeString = newISODateTime().split("T")[1].slice(0, 5);
        return labeledInput(name, "time", `value=${timeString}`);
    }
    return labeledInput(name, "time", `value=${chosenTime}`);
}

function labeledRange(
    name = "",
    inputType = "date",
    fromText = "From",
    toText = "To"
) {
    return label(
        cleanName(name),
        (name ? text(name) : "") +
        rangeRow(
            labeledInput(fromText, inputType) +
            " - " +
            labeledInput(toText, inputType)
        )
    );
}

function selectDateRange(name = "") {
    return labeledRange(name, "date");
}

function selectTimeRange(name = "") {
    return labeledRange(name, "time");
}

function calendarControl(name="calendar"){
    return div("calendar-control", input(name, "date"))
}

function timeControl(name="time"){
    return div("time-control", input(name, "time"))
}