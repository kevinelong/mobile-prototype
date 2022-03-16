TASTE_MATCH_PAGES.add("connect", Pane(`
    <div class="taste-match-page page1">
        <div class="question-heading">
            <div class="question-control">
                Connect with friends, family, and people you want to follow to automatically discover new ideas, and start planning together.
            </div>
            <div class="question-control">
                Vita is better with friends. Connect with family and friends so you can discover ieas and start planning together.
            </div>
        </div>
        <div class="connect-buttons">
            <div class="button-control">
                <button type="submit" class="button-skip">Skip</button>
            </div>
            <div class="button-control">
                <button type="submit" class="button-import">Import Contacts</button>
            </div>
        </div>
    </div>
    `,
            [
                PaneAction("BACK", "music3"),
                PaneAction("SKIP", "thanks"),
                PaneAction("NEXT", "connect2"),
            ]
        )
    );
