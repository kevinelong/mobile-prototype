TASTE_MATCH_PAGES.add("thanks", Pane( `
<div class="question-heading">
    <div class="title-control">
        Thank you!
    </div>
    <div class="question-control">
        Click next to start Exploring your personalized feed!
    </div>
</div>
`,
        [
            PaneAction("BACK", "birthday"),
            PaneAction("CONTINUE", "main.html"),
            // PaneAction("NEXT", `main.html`),
        ]
    )
);
