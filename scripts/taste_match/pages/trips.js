TASTE_MATCH_PAGES.add("trips", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            On trips...
        </div>
        <div class="question-control">
            what do you splurge on? Select all that apply
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="trips-1" name="trips">
        <label for="trips-1">I'll splurge on experiences</label>
        <input type="checkbox" id="trips-2" name="trips">
        <label for="trips-2">I'll splurge on meals</label>
        <input type="checkbox" id="trips-3" name="trips">
        <label for="trips-3">I'll splurge on lodging</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "bucket_list"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "trips2"),
        ]
    )
);
