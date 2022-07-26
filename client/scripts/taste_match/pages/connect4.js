TASTE_MATCH_PAGES.add("connect4", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Discover new people
        </div>
        <div class="question-control">
            Follow experts, guides, locals and travel pros.  Make new friends and discover even more.
        </div>
        <div class="connect-suggestions">
            <div class="suggestions-friend">
                <img src="images/faces/face11.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Leontina Bishop</div>
                            <div class="info-location">Sicily, Italy</div>
                        </div>
                        <div class="friend-tag">Expert</div>
                        <div class="friend-buttons">
                            <button class="btn-add">Friend</button>
                            <button class="btn-follow">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suggestions-friend">
                <img src="images/faces/face12.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Katlego McGee</div>
                            <div class="info-location">Johannesburg, South Africa</div>
                        </div>
                        <div class="friend-tag">Expert</div>
                        <div class="friend-buttons">
                            <button class="btn-add">Friend</button>
                            <button class="btn-follow">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suggestions-friend">
                <img src="images/faces/face13.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Jamyang Zhou</div>
                            <div class="info-location">Tibet, China</div>
                        </div>
                        <div class="friend-tag">Guide</div>
                        <div class="friend-buttons">
                            <button class="btn-add">Friend</button>
                            <button class="btn-follow">Follow</button>
                        </div>
                    </div>
                </div>
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
