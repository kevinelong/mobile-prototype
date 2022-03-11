TASTE_MATCH_PAGES.add("birthday", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Demographics
        </div>
        <div class="question-control">
            When were you born?
        </div>
    </div>
    <div class="calender-control">
        <!-- <label for="date">Birthday:</label> -->
        <input type="date" id="date" name="date" placeholder="Enter a date...">
    </div>
</div>
`,
        [
            PaneAction("BACK", "gender"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "city"),
        ]
    )
);
