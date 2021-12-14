document.addEventListener("DOMContentLoaded",()=>{

const gbcn = n => document.getElementsByClassName(n)[0];

const div = (className, content) => `<div class="${className}">${content}</div>`

const title = text => div("title", text)
const choiceSet = content => div("choice-set", content)
const choice = text => div("choice", text)
const choiceSelected = text => div("choice selected", text)

const cardList = content => div("card-list", content)
const card = text => div("card", text)

const listItem = text => div("nav-list-item", text)

mainNavTab = (text="", selected=false, icon="compass") => `<div class="main-nav-tab">
    <div class="main-nav-tab-background">
        <div class="icon-frame ${selected?'selected':''}">
            <img class="icon" src="./${icon}.svg">
        </div>
        <div class="label">${text}</div>
    </div>
</div>`


gbcn("main-nav").innerHTML = mainNavTab("EXPLORE") + mainNavTab("BOARDS", false, "boards") + 
mainNavTab("PEOPLE", true, "people") + 
mainNavTab("AGENDA", false, "planner") + 
mainNavTab("PAYMENTS",false, "payments") ;

gbcn("inner-content").innerHTML = title("PEOPLE (/)") + 
choiceSet(
    choiceSelected("ALL NETWORK (23)") + 
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