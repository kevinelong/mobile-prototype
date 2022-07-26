TASTE_MATCH_PAGES.add("music", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Music
        </div>
        <div class="question-control">
            What is your favorite type of music venue?
        </div>
    </div>
    <div class="radio-control">
        <input type="radio" id="music-1" name="music">
        <label for="music-1">I enjoy music festivals</label>
        <input type="radio" id="music-2" name="music">
        <label for="music-2">I enjoy large live music events</label>
        <input type="radio" id="music-3" name="music">
        <label for="music-3">I enjoy small music venues</label>
        <input type="radio" id="music-4" name="music">
        <label for="music-4">No, I don't like live music experiences</label>   
    </div>
</div>
`,
        [
            PaneAction("BACK", "drink2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "music2"),
        ]
    )
);
