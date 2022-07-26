TASTE_MATCH_PAGES.add("trips3", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            On trips...
        </div>
        <div class="question-control">
            do you budget for a trip? Select all that apply.
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="trips3-1" name="trips3">
        <label for="trips3-1">I like to detail out as many of the expenses as possible beforehand</label>
        <input type="checkbox" id="trips3-2" name="trips3">
        <label for="trips3-2">I like to detail out as many of the expenses as possible beforehand only for longer trips</label>
        <input type="checkbox" id="trips3-3" name="trips3">
        <label for="trips3-3">I don't need to detail out expenses beforehand</label>
        <input type="checkbox" id="trips3-4" name="trips3">
        <label for="trips3-4">I don't detail expenses beforehand, but I should</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "trips2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "trips4"),
        ]
    )
);
