const food2List = CUISINES.map(s => checkboxControl(s)).join("\n");

TASTE_MATCH_PAGES.add("food2", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
        Tell us about your eating habits so we can match you with the best food experiences:
        </div>
        <div class="question-control">
            Select your favorite cuisines...
        </div>
    </div>
    TODO SLIDERS: OCCASIONALLY <= => EVERY WEEK
    <div class="interests-list">
        ${food2List}
    </div>
</div>
`,
        [
            PaneAction("BACK", "food"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "drink"),
        ]
    )
);