TASTE_MATCH_PAGES.add("music2", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Your taste in music
        </div>
        <div class="question-control">
            Select all musical genres you enjoy...
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="music2-1" name="music2">
        <label for="music2-1">Pop</label>
        <input type="checkbox" id="music2-2" name="music2">
        <label for="music2-2">Hip-hop & rap</label>
        <input type="checkbox" id="music2-3" name="music2">
        <label for="music2-3">Rock</label>
        <input type="checkbox" id="music2-4" name="music2">
        <label for="music2-4">Dance & electronic</label>
        <input type="checkbox" id="music2-5" name="music2">
        <label for="music2-5">Latin</label>
        <input type="checkbox" id="music2-6" name="music2">
        <label for="music2-6">Indie & alternative rocks</label>
        <input type="checkbox" id="music2-7" name="music2">
        <label for="music2-7">classical</label>
        <input type="checkbox" id="music2-8" name="music2">
        <label for="music2-8">K-pop</label>
        <input type="checkbox" id="music2-9" name="music2">
        <label for="music2-9">Country</label>
        <input type="checkbox" id="music2-10" name="music2">
        <label for="music2-10">Metal</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "music"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "music3"),
        ]
    )
);
