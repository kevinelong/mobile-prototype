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
});