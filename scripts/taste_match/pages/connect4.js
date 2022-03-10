TASTE_MATCH_PAGES.add("connect4", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Discover new people
        </div>
        <div class="question-control">
            Follow experts, guides, locals and travel pros.  Make new friends and discover even more.
        </div>
        <div class="friend-suggestions">
            <div class="">
                Arthur Rightus
            </div>
            <div class="">
                Al Zeimers
            </div>
            <div class="">
                Uri Nerybladda
            </div>
        </div>
    </div>
</div>
`,
        [
            PaneAction("BACK", "connect3"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "thanks"),
        ]
    )
);
