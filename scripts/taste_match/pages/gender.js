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
        <input type="radio" id="gender-1" name="gender">
        <label for="gender-1">Man</label>
        <input type="radio" id="gender-2" name="gender">
        <label for="gender-2">Woman</label>
        <input type="radio" id="gender-3" name="gender">
        <label for="gender-3">Non-Binary</label>
        <input type="radio" id="gender-4" name="gender">
        <label for="gender-4">Transgender</label>
        <input type="radio" id="gender-5" name="gender">
        <label for="gender-5">Other</label>
    </div>
</div>
`,
        [
            PaneAction("SKIP", "connect4"),
            PaneAction("NEXT", "birthday"),
        ]
    )
);
