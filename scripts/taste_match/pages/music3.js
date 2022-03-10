const bandsList = BANDS.map(s => checkboxControl(s)).join("\n");

TASTE_MATCH_PAGES.add("music3", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Your taste in music
        </div>
        <div class="question-control">
            Select all musicians/bands you enjoy so we can match you with the best music experiences
        </div>
    </div>
    <div class="interests-list">
        ${bandsList}
    </div>
</div>
`,
        [
            PaneAction("BACK", "music2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "connect"),
        ]
    )
);
