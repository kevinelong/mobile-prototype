const toName = name => name.toLowerCase().replace(/[^a-zA-Z0-9À-ž\s]/g, "-").replace(" ","_");

const select = e => {
    const selected = e.parentElement.getElementsByClassName('selected');
    [...e.parentElement.children].forEach(s => s.classList.remove('selected'));
    e.classList.add('selected');
    const b = document.body;
    [...b.classList].forEach(c => b.classList.remove(c));
    b.classList.add(`selected-${toName(e.parentElement.id)}-${toName(e.id)}`);
}


document.addEventListener("DOMContentLoaded", () => {

    const get = q => document.querySelectorAll(q)[0];

    const div = (className, content, attrs) => `<div class="${className}" ${attrs}>${content}</div>`

    const title = text => div("title", text)
    const choiceSet = content => div("choice-set", content, "id='secondary-nav'")
    const choice = (text, selected=false) => div(`choice choice-${toName(text)} ${selected?'selected':''}`, text, `id='${toName(text)}' onclick='select(this)'`)

    const cardList = content => div("card-list", content)
    const card = text => div("card", text)

    const listItem = text => div("nav-list-item", text)


    mainNavTab = (text = "", selected = false, icon = "compass") => `<div id="main-nav-tab-${toName(text)}" class="main-nav-tab ${selected ? ' selected' : ''}" onclick="select(this)">
    <div class="main-nav-tab-background">
        <div class="icon-frame">
            <img class="icon" src="./images/icon-nav-${icon}-white.svg">
        </div>
        <div class="label">${text}</div>
    </div>
</div>`


    get(".main-nav").innerHTML = mainNavTab("EXPLORE") +
        mainNavTab("BOARDS", false, "boards") +
        mainNavTab("PEOPLE", true, "people") +
        mainNavTab("AGENDA", false, "planner") +
        mainNavTab("PAYMENTS", false, "payments");

    // select(get("#main-nav-tab-people"));

    get(".inner-content").innerHTML = title("... PEOPLE (/) *") +
        choiceSet(
            choice("ALL NETWORK (23)", true) +
            choice("PLANNERS (5)") +
            choice("FRIENDS (5)") +
            choice("CONFIRMATIONS (1)") +
            choice("NEW PEOPLE (1)") +
            choice("MATCHES (1)") +
            choice("DEALS (1)")
        ) +
        // listItem("List Item 1") + listItem("List Item 2") +
        cardList(
            card("[Kind] Subject<br>&nbsp;<br>Body of the text message.") +
            card("[Kind] Subject<br>&nbsp;<br>Body of the text message."))
});