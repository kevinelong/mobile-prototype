TASTE_MATCH_PAGES.add("trips2", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            On trips...
        </div>
        <div class="question-control">
            how much do you like to spend? Select all that apply.
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="trips2-1" name="trips2">
        <label for="trips2-1">I like to budget travel</label>
        <input type="checkbox" id="trips2-2" name="trips2">
        <label for="trips2-2">I like to spend moderately</label>
        <input type="checkbox" id="trips2-3" name="trips2">
        <label for="trips2-3">I like luxury travel</label>
        <input type="checkbox" id="trips2-4" name="trips2">
        <label for="trips2-4">Depends on the type of trip</label>
        <input type="checkbox" id="trips2-5" name="trips2">
        <label for="trips2-5">Depends on who I'm with</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "trips"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "trips3"),
        ]
    )
);
