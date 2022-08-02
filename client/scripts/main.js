function getRectTop(div) {
    const rect = div.getBoundingClientRect()
    // const left = rect.left
    const top = rect.top
    // console.log(top)
    // const right = rect.right
    // const bottom = rect.bottom
    // const x = rect.x
    // const y = rect.y
    // const width = rect.width
    // const height = rect.height
    // return `left: ${left}, top: ${top}, right: ${right}, bottom: ${bottom}, x: ${x}, y: ${y}, width: ${width}, height: ${height}`
    return top
}

function initScroll() {
    // debugger;
    const outerBoxWidth = get(".outer-box").clientWidth;

    const contentPanel = get(".content-panel");
    const cssObjContentPanel = window.getComputedStyle(contentPanel);
    const contentPanelPaddingSides =
        parseFloat(cssObjContentPanel.paddingLeft) +
        parseFloat(cssObjContentPanel.paddingRight);

    const timelineWindowWidth = outerBoxWidth - contentPanelPaddingSides;
    // const page = get(".page")
    // const cssObjPage = window.getComputedStyle(page)

    const dayPicker = get(".day-picker");
    const days = dayPicker.children;

    let count = 0;
    let timelineScrollWidth = 0;

    for (let i = 0; i < days.length; i++) {
        const cssObjDay = window.getComputedStyle(days[i]);
        timelineScrollWidth +=
            days[i].clientWidth +
            parseFloat(cssObjDay.marginLeft) +
            parseFloat(cssObjDay.marginRight);
        count += 1;
    }
    // debugger;
    // const timelineScrollStart = (timelineScrollWidth / 2)
    const timelineScrollStart =
        timelineScrollWidth / 2 - timelineWindowWidth / 2;

    dayPicker.scrollLeft = timelineScrollStart;

    // const cssObjTimeline = window.getComputedStyle(timeline)
    // margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)

    window.currentPage = "timeline";
    window.lastPage = "timeline";
    hide(".smoke");
    hide(".dialog");

    const onScrollStop = (object, callback, milliseconds) => {
        // debugger;
        let timerID;
        if (typeof object === "undefined") {
            console.log("no object")
            return;
        }
        object.addEventListener(
            "scroll",
            (e) => {
                clearTimeout(timerID);
                timerID = setTimeout(() => {
                    callback();
                }, milliseconds);
                console.log("scroll check")
                // navigator.vibrate(30);
            },
            false
        );
    };

    let cardList = get(".timeline.page .card-list");
    const cps = cardList.querySelectorAll(".is-current-period");

    if (cps && cps.length > 1) {
        cardList.scrollTop = cps[1].offsetTop - (cps[1].offsetHeight / 2) - 210;
    }else{
        console.log("WTF", cps, cardList, cps.length, cps[1].offsetTop);
    }


    // const timelineHeight = get(".timeline.page").offsetHeight;

    // const headerHeight = cardListHeight - timelineHeight;

    const milliseconds = 300;
    const offset = 0;
    const offset2 = 0;
    const divisor = 2;

    // let scrolling = false;
    const snapScroll = () => {
        const cardListHeight = cardList.offsetHeight;
        const cardListHeightHalf = Math.floor(cardListHeight / 2);
        // debugger;
        // if (scrolling === true) {
        //      console.log("scrolling false")
        //     return;
        // }
        // scrolling = true;
        console.log("SCROLL")
        // scrolling = true;

        let scrollAmount = cardList.scrollTop;

        let centers = [];

        [...cardList.querySelectorAll(".card")].forEach((c) => {
            const half = Math.floor(c.offsetHeight / 2);
            const delta = Math.abs(
                c.offsetTop +
                half +
                offset2 -
                (scrollAmount + cardListHeightHalf)
            );
            // console.log(delta, scrollAmount, cardListHeightHalf, half, c.offsetTop);
            centers.push([delta, c]);
        });
        let target;
        centers.sort((a, b) => a[0] - b[0]);
        centers.forEach((c, i) => {
            let o = c[1];
            if (i === 0) {
                // setTimeout(() => {
                target = o
                o.style.opacity = 1;
                o.classList.add("selected");
                // }, 400)
                
                // console.log(Array.from(o.parentNode.children).indexOf(o));
                // console.log(o.)
                // console.log(o.offsetTop, cardListHeightHalf, o.offsetHeight);
                
            } else {
                o.classList.remove("selected");
                o.style.opacity = "0.65";
            }
            
        });
        cardList.scroll({
                    top:
                        offset +
                        (target.offsetTop - cardListHeightHalf) +
                        Math.floor(target.offsetHeight / divisor),
                    behavior: "smooth",
                });
                console.log(target.offsetTop)
        

        // scrollAmount = cardList.scrollTop;
        // setTimeout(() => {
        //     centers = [];

        //     [...cardList.querySelectorAll(".card")].forEach((c) => {
        //         const half = Math.floor(c.offsetHeight / 2);
        //         const delta = Math.abs(
        //             getRectTop(c) +
        //             half +
        //             offset2 -
        //             (scrollAmount + cardListHeightHalf)
        //         );
        //         // console.log(delta, scrollAmount, cardListHeightHalf, half, c.offsetTop);
        //         centers.push([delta, c]);
        //     });
        //     centers.sort((a, b) => a[0] - b[0]);
        //     centers.forEach((c, i) => {
        //         let o = c[1];
        //         if (i === 0) {
        //             // debugger;
        //             o.style.opacity = 1;
        //             o.classList.add("selected");
        //             // console.log(Array.from(o.parentNode.children).indexOf(o));
        //             // console.log(o.)
        //             // console.log(o.offsetTop, cardListHeightHalf, o.offsetHeight);
        //             cardList.scroll({
        //                 top:
        //                     offset +
        //                     (getRectTop(o) - cardListHeightHalf) +
        //                     Math.floor(o.offsetHeight / divisor),
        //                 behavior: "smooth",
        //             });
        //             console.log("SCROLL")
        //         } else {
        //             o.classList.remove("selected");
        //             o.style.opacity = "0.65";
        //         }
        //     });
        // }, 10);
        
        // setTimeout(() => {
        //     scrolling = false;
        //     console.log("set to false")
        // }, 650);

        //console.log(centers);
    }

    onScrollStop(
        cardList,
        snapScroll,
        milliseconds
    );

    snapScroll();
}

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

    function mapView(c) {
        return div("map", c, 'id="map"');
    }

    // <div id='map' style='height: 555px; width: 320px;'></div>

    document.body.innerHTML = content(
        outerBox(
            innerContent(
                [
                    explorePage(),
                    exploreDetailPage(),
                    exploreFakePage(),
                    broadcastPage(),
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
                    mapView(),
                ].join("")
            ) +
                circle("") +
                mainNavOuter(
                    mainNav(
                        ["explore", "broadcast", "collect", "plan", "settle"],
                        ["connect", "timeline"],
                        "timeline"
                    )
                ) +
                hiddenToast("") +
                hiddenSmoke(hiddenDialog())
        )
    );

    setTimeout(initScroll, 500);

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

    

    function initMap() {
        const tl = typeof L;
        if (tl === "undefined") {
            return setTimeout(initMap, 500);
        }
        // let host = 'https://maps.omniscale.net/v2/{id}/style.default/{z}/{x}/{y}.png';
        let host = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        let attribution =
            '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>';
        let map = L.map("map").setView([34.41, -119.69], 12);
        // const id = window.location.hostname.indexOf("kevinelong") == -1 && window.location.hostname.indexOf("localhost") == -1 ? 'vitaexplorer-05d4f193' : 'kevinelong-github-io-0f6096e4';
        // console.log("MAP API KEY: "+ id);
        L.tileLayer(host, {
            // id: id,
            attribution: attribution,
        }).addTo(map);
        map.attributionControl.setPrefix(false);

        const data = [
            {
                name: "Loquita Santa Barbara",
                description: "Loquita Santa Barbara<br>5 Friends liked this.",
                latlong: [34.414843631936535, -119.69157509814653],
            },
            {
                name: "Boathouse at Hendry's Beach",
                description:
                    "Boathouse at Hendry's Beach<br>14 Friends and 2 Co-Curators liked this.",
                latlong: [34.408724829930925, -119.74230426640375],
            },
            {
                name: "The Black Sheep",
                description:
                    "The Black Sheep<br>14 Friends and 2 Co-Curators liked this.",
                latlong: [34.419441971416056, -119.6969748812218],
            },
        ];
        data.forEach((item) => {
            let marker = L.marker(item.latlong, {
                opacity: 0.75,
                title: item.name,
            });
            marker.bindPopup(item.description).openPopup();
            marker.addTo(map);
        });
        get("#map").classList.add("hidden");
        get("#map").style.zIndex = "300";
    }

    initMap();

    /***
     * Settle/Expense/Pay/Split
     */

    const focusTarget = document.querySelectorAll(".expense-name")[0];
    if (focusTarget !== undefined) {
        focusTarget.focus();
    }
    //parentElement.querySelectorAll(".expense-amount")[0].oninput = onAddExpense;
    //
    // window.addEventListener("keyup", (e) => {
    //   if (e.key === "Enter") {
    //     document.querySelector("button").click();
    //   }
    // });

    populateExpenses();
    const ed = get(".explore_detail .content-panel");
    ed.innerHTML = exploreCardDetail(...EXPLORE_DATA[6]);

    function now() {
        // TODO hard code to find dead zones and test fixes for dead zones.
        // return new Date("2022-07-14T11:46:00");
        return new Date();
    }

    function setTitleTime() {
        const date = now();
        get(".title .time.span").innerHTML =
            date.toString().split(" ")[0] +
            " " +
            date.toString().split(" ")[1] +
            " " +
            date.toString().split(" ")[2] +
            " " +
            date.toLocaleTimeString();
        setTimeout(setTitleTime, 1000);
    }

    setTitleTime();

    window.kaching = new Audio("sounds/chaching.mp3");


});
