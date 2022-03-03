TASTE_MATCH_PAGES.add("gender", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Tell us a bit about yourself
        </div>
        <div class="question-control">
            How do you identify?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="radio1" name="radio">
        <label for="radio1">Man</label>
        <input type="radio" id="radio2" name="radio">
        <label for="radio2">Woman</label>
        <input type="radio" id="radio3" name="radio">
        <label for="radio3">Non-Binary</label>
        <input type="radio" id="radio4" name="radio">
        <label for="radio4">Transgender</label>
        <input type="radio" id="radio5" name="radio">
        <label for="radio5">Other</label>
    </div>
</div>
`,
        [
            PaneAction("SKIP", `thanks`),
            PaneAction("NEXT", "thanks"),
        ]
    )
);
