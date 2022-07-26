let TASTE_MATCH_PAGES = PaneSet("taste-match", "gender");

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
    <body>
        <div class="content">
            <div class="outer-box">
                <div class="inner-content">
                    <div class="taste-match">
                        ${panes(TASTE_MATCH_PAGES)}
                    </div>
                </div>
            </div>
        </div>
    </body>`;

    const paneContents = getAll(".pane-content")
    console.log(paneContents)

    const progressControl = `
    <div class="progress-control">
        <div class="progress-line">
            <div class="line-full"></div>
            <img class="progress-icon" src="images/flight_yellow.svg" alt="">
        </div>
    </div>
`
    
    const planePages = []

    for (let i = 0; i < paneContents.length; i++) {
        paneContents[i].firstElementChild.insertAdjacentHTML("beforebegin", progressControl)
        planePages.push(paneContents[i])
    }

    const progressLine = planePages[0].querySelector(".progress-line")
    const distanceMultiplier = progressLine.offsetWidth / (planePages.length + 1)
    console.log(distanceMultiplier)

    for (let i = 0; i < planePages.length; i++) {
        
        const lineFull = planePages[i].querySelector(".line-full")
        const progressIcon = planePages[i].querySelector(".progress-icon")
        
        const iconDistance = distanceMultiplier * i
        lineFull.style.width = `${iconDistance + 0}px`
        progressIcon.style.left = `${iconDistance - 2}px`
    }
});