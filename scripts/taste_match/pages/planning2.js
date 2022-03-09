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
        <input type="checkbox" id="planning2-1" name="planning2">
        <label for="planning2-1">Google, Yelp, or Open Table</label>
        <input type="checkbox" id="planning2-2" name="planning2">
        <label for="planning2-2">AirBnB Experiences</label>
        <input type="checkbox" id="planning2-3" name="planning2">
        <label for="planning2-3">Trip Advisor</label>
        <input type="checkbox" id="planning2-4" name="planning2">
        <label for="planning2-4">Ask my friends who what I’m researching</label>
        <input type="checkbox" id="planning2-5" name="planning2">
        <label for="planning2-5">I let other people do the planning</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "planning"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "bucket_list"),
        ]
    )
);
