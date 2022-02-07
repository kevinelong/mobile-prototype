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
        ["explore", "collect", "connect", "timeline", "plan", "settle"],
        "timeline"
    );

    get(".inner-content").innerHTML = [
        explorePage(),
        exploreDetailPage(),
        collectPage(),
        collectBoardPage(),
        planPage(),
        planDetailPage(),
        timelinePage(true),
        connectPage(),
        connectChatPage(),
        connectPersonPage(),
        settleList(),
        settleSplit(),
        settlePage(),
    ].join("");

    const outerBox2 = get(".outer-box");
    outerBoxWidth = outerBox2.clientWidth
        // console.log(outerBoxWidth);

    const contentPanel = get(".content-panel")
    const cssObjContentPanel = window.getComputedStyle(contentPanel)
    const contentPanelPaddingSides = parseFloat(cssObjContentPanel.paddingLeft) + parseFloat(cssObjContentPanel.paddingRight)
        // console.log(contentPanelPaddingSides)    

    timelineWindowWidth = outerBoxWidth - contentPanelPaddingSides
        // console.log(timelineWindowWidth)
        // const page = get(".page")
        // const cssObjPage = window.getComputedStyle(page)
        // console.log(cssObjPage)

    const timeline = get(".timeline");
    const days = timeline.children;

    // console.log(timeline.scrollWidth)
    // console.log(timeline.scrollLeft)
    // console.log(timeline.getBoundingClientRect());
    // console.log(timeline.offsetWidth)
    // console.log(days[18].offsetWidth)
    // console.log(days[18].getBoundingClientRect())
    // console.log(days[18].clientWidth);

    // console.log( 
    //     days[18].clientWidth +
    //         parseFloat(cssObj.marginLeft) +
    //         parseFloat(cssObj.marginRight)
    // );

    let count = 0
    let timelineScrollWidth = 0
    for (let i = 0; i < days.length; i++) {
        const cssObjDay = window.getComputedStyle(days[i])
        timelineScrollWidth += days[i].clientWidth +
            parseFloat(cssObjDay.marginLeft) +
            parseFloat(cssObjDay.marginRight)
        count += 1
    }

    // console.log(count, timelineScrollWidth)

    // const timelineScrollStart = (timelineScrollWidth / 2)
    const timelineScrollStart = (timelineScrollWidth / 2) - (timelineWindowWidth / 2)
        // console.log(timelineScrollStart)

    timeline.scrollLeft = timelineScrollStart

    // const cssObjTimeline = window.getComputedStyle(timeline)
    // console.log(cssObjTimeline.getPropertyValue("width"))
    // margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
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