const food2List = CUISINES.map(s => checkboxControl(s)).join("\n");

TASTE_MATCH_PAGES.add("food2", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Food
        </div>
        <div class="question-control">
            What are your favorite cuisines? Select all that apply.
        </div>
    </div>
    <div class="checkbox-control">
        ${food2List}
    </div>
</div>
`,
    // DEFERRED SLIDERS: OCCASIONALLY <= => EVERY WEEK

    [
            PaneAction("BACK", "food"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "drink"),
        ]
    )
);