TASTE_MATCH_PAGES.add("city", Pane(`
    <div class="taste-match-page page1">
        <div class="question-heading">
            <div class="title-control">
                Demographics
            </div>
            <div class="question-control">
                What city do you live in?
            </div>
        </div>
        <div class="text-control">
            <input type="text" placeholder="Enter a city...">
        </div>
    </div>
    `,
            [
                PaneAction("BACK", "birthday"),
                PaneAction("SKIP", "thanks"),
                PaneAction("NEXT", "interests"),
            ]
        )
    );
