TASTE_MATCH_PAGES.add("trips4", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            On trips...
        </div>
        <div class="question-control">
            how do you budget for a trip? Select all that apply.
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="trips4-1" name="trips4">
        <label for="trips4-1">I use a spreadsheet, email or computer software</label>
        <input type="radio" id="trips4-2" name="trips4">
        <label for="trips4-2">I create a budget on paper</label>
        <input type="radio" id="trips4-3" name="trips4">
        <label for="trips4-3">I create a budget in my head</label>
        <input type="radio" id="trips4-4" name="trips4">
        <label for="trips4-4">I use a budget app</label>
        <input type="radio" id="trips4-5" name="trips4">
        <label for="trips4-5">I don't budget experiences or trips4</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "trips3"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "thanks"),
        ]
    )
);
