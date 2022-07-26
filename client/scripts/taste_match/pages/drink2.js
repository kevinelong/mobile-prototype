const whiteWineBrandsList = WHITE_WINE_BRANDS.map(s => checkboxControl(s)).join("\n");

const redWineBrandsList = RED_WINE_BRANDS.map(s => checkboxControl(s)).join("\n");

const roseWineBrandsList = ROSE_WINE_BRANDS.map(s => checkboxControl(s)).join("\n");

TASTE_MATCH_PAGES.add("drink2", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Drink
        </div>
        <div class="question-control">
            Choose your favorite wine brands.
        </div> 
    </div>
    <div class="checkbox-control">
        Select all your favorite white wine brands...
        ${whiteWineBrandsList}
    </div>
    <div class="checkbox-control">
        Select all your favorite red wine brands...
        ${redWineBrandsList}
    </div>
    <div class="checkbox-control">
        Select all your favorite rosé wine brands...
        ${roseWineBrandsList}
    </div>
</div>
`,
        [
            PaneAction("BACK", "drink"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "music"),
        ]
    )
);
