TASTE_MATCH_PAGES.add("trips", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            On trips...
        </div>
        <div class="question-control">
            what do you splurge on?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="trips-1" name="trips">
        <label for="trips-1">I'll splurge on experiences</label>
        <input type="radio" id="trips-2" name="trips">
        <label for="trips-2">I'll splurge on meals</label>
        <input type="radio" id="trips-3" name="trips">
        <label for="trips-3">I'll splurge on lodging</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "bucket-list"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "trips2"),
        ]
    )
);
