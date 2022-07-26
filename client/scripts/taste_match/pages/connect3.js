TASTE_MATCH_PAGES.add("connect3", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Connect with Friends
        </div>
        <div class="question-control">
            Check out who's already enjoying Vita.
        </div>
        <div class="connect-suggestions">
            <div class="suggestions-friend">
                <img src="images/faces/face4.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Viktor Ecclestone</div>
                            <div class="info-location">Kemerovo Oblast, Russia</div>
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
                <img src="images/faces/face5.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Lois Kimball</div>
                            <div class="info-location">Galicia, Spain</div>
                        </div>
                        <div class="friend-tag" style="display:none"></div>
                        <div class="friend-buttons">
                            <button class="btn-add">Friend</button>
                            <button class="btn-follow">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suggestions-friend">
                <img src="images/faces/face6.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Jeane Paquet</div>
                            <div class="info-location">California, United States</div>
                        </div>
                        <div class="friend-tag">Local</div>
                        <div class="friend-buttons">
                            <button class="btn-add">Friend</button>
                            <button class="btn-follow">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suggestions-friend">
                <img src="images/faces/face9.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Montgomery Toloni</div>
                            <div class="info-location">North Carolina, United States</div>
                        </div>
                        <div class="friend-tag" style="display:none"></div>
                        <div class="friend-buttons">
                            <button class="btn-add">Friend</button>
                            <button class="btn-follow">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="suggestions-friend">
                <img src="images/faces/face10.png">
                <div class="friend-body">
                    <div class="body-content">
                        <div class="friend-info">
                            <div class="info-name">Slamet Lupu</div>
                            <div class="info-location">Java, Indonesia</div>
                        </div>
                        <div class="friend-tag" style="display:none"></div>
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
            PaneAction("BACK", "connect2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "connect4"),
        ]
    )
);
