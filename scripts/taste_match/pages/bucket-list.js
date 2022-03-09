TASTE_MATCH_PAGES.add("bucket-list", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            What is your dream destination?
        </div>
        <div class="question-control">
            If you could go anywhere, where would you go?
        </div>
        <div class="text-control">
            <input type="text" placeholder="I would go to...">
        </div>
    </div>
</div>
`,
        [
            PaneAction("BACK", "planning2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "trips"),
        ]
    )
);
