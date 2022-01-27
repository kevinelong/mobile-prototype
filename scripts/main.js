document.addEventListener("DOMContentLoaded", () => {
    function content(c) {
        return div("content", c);
    }

    function outerBox(c) {
        return div("outer-box", c);
    }

    function innerContent(c) {
        return div("inner-content", c);
    }

    function mainNavOuter(c) {
        return div("main-nav-outer", c);
    }

    function hiddenSmoke(c) {
        return div("hidden smoke", c);
    }

    function hiddenDialog(c) {
        return div("hidden dialog", c);
    }

    function hiddenToast(c) {
        return div("hidden toast", c);
    }

    document.body.innerHTML = content(
        outerBox(
            innerContent() +
                circle("") +
                mainNavOuter() +
                hiddenToast("") +
                hiddenSmoke(hiddenDialog())
        )
    );

    get(".main-nav-outer").innerHTML = mainNav(
        ["explore", "dream", "connect", "plan", "settle"],
        "connect"
    );

    get(".inner-content").innerHTML = [
        explorePage(),
        exploreDetailPage(),
        dreamPage(),
        dreamBoardPage(),
        planPage(),
        planDetailPage(),
        connectPage(true),
        connectChatPage(),
        connectPersonPage(),
        settleList(),
        settleSplit(),
        settlePage(),
    ].join("");
});

window.lastPage = "connect";

listen(
    "click",
    (e) => {
        //   console.log(e.target);
        if (e.target.classList.contains("smoke")) {
            hide(".smoke");
            hide(".dialog");
        }
    },
    get(".smoke")
);
