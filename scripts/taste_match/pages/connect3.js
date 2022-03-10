TASTE_MATCH_PAGES.add("connect3", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Connect with Friends
        </div>
        <div class="question-control">
            Check out who's already enjoying Vita.
        </div>
        <div class="friend-suggestions">
            <div class="">
                Ann Chovey
            </div>
            <div class="">
                E.L. Moray
            </div>
            <div class="">
                Chris P. Bacon
            </div>
            <div class="">
                Pete Tsar
            </div>
            <div class="">
                Frank Furter
            </div>
        </div>
    </div>
</div>
`,
        [
            PaneAction("BACK", "connect2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "connect4"),
        ]
    )
);
