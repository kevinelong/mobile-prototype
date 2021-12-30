document.addEventListener("DOMContentLoaded", () => {
    get(".main-nav-outer").innerHTML = mainNav(
        ["explore", "boards", "people", "agenda", "payments",], "payments");
    get(".inner-content").innerHTML =
        explorePage() +
        boardsPage() +
        agendaPage() +
        peoplePage() +
        paymentsList() +
        paymentsSplit() +
        paymentsPage(true)
});

window.lastPage = "payments";

const search = ()=> contentPanel(
    title("Search") +
    label(
        input("search", "text", "onkeypress=\"if (this.value.length > 0){ show('.autocomplete'); }else{ hide('.autocomplete');}\"") +
        div("autocomplete hidden", simpleList("", [
            ["KL","Kevin","Long",""],
            ["GB","Greg","Bellowe",""]
        ],"","hide"))
    )
);
const showSearch = ()=>{
    get(".dialog").innerHTML = search();
    show(".smoke");
    show(".dialog");
}
const hideSearch = ()=>{
    hide(".smoke");
    hide(".dialog");
}

const actionClick = (action) => {
    hideSearch();
    if (action == "back"){
        showPage(window.lastPage);
    }else if (["search","more"].includes(action)){
        showSearch();
    }else if (["hide"].includes(action)){
        hideSearch();
    }else{
        console.log(action);
    }
}

listen("click",e=>{
    console.log(e.target);
    if(e.target.classList.contains("smoke")) {
        hide(".smoke");
        hide(".dialog");
    }
}, get(".smoke"));
//
// listen("click",e=>{
//     e.preventDefault();
// }, get(".dialog"));
