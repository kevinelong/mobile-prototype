TASTE_MATCH_PAGES.add("planning2", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            How do you plan your free time in your home town?
        </div>
        <div class="question-control">
            Select all that apply
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="checkbox1" name="checkbox">
        <label for="checkbox1">Google, Yelp, or Open Table</label>
        <input type="checkbox" id="checkbox2" name="checkbox">
        <label for="checkbox2">AirBnB Experiences</label>
        <input type="checkbox" id="checkbox3" name="checkbox">
        <label for="checkbox3">Trip Advisor</label>
        <input type="checkbox" id="checkbox4" name="checkbox">
        <label for="checkbox4">Ask my friends who what I’m researching</label>
        <input type="checkbox" id="checkbox5" name="checkbox">
        <label for="checkbox5">I let other people do the planning</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "planning"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "bucket-list"),
        ]
    )
);
