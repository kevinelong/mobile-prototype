document.addEventListener("DOMContentLoaded", () => {

    const content = c => div("content", c);
    const outerBox = c => div("outer-box", c);
    const innerContent = c => div("inner-content", c);
    const mainNavOuter = c => div("main-nav-outer", c);
    const hiddenSmoke = c => div("hidden smoke", c);
    const hiddenDialog = c => div("hidden dialog", c);
    const hiddenToast = c => div("hidden toast", c);

    document.body.innerHTML = content(
        outerBox(
            innerContent() +
            mainNavOuter() +
            hiddenToast("") +
            hiddenSmoke(
                hiddenDialog()
            )
        )
    );

    get(".main-nav-outer").innerHTML = mainNav(
        ["explore", "dream", "connect", "plan", "settle",], "connect");

    get(".inner-content").innerHTML =
        explorePage() +
        exploreDetailPage() +
        boardsPage() +
        planPage() +
        planDetailPage() +
        connectPage(true) +
        connectChatPage() +
        connectPersonPage() +
        settleList() +
        settleSplit() +
        settlePage()
});

window.lastPage = "connect";
