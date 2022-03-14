TASTE_MATCH_PAGES.add("bucket_list2", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Bucket-list
        </div>
        <div class="question-control">
            Tell us about a place you are familiar with so we can get to know you
        </div>
        <div class="text-control">
            <input type="text" placeholder="I have been to...">
        </div>
    </div>
    <div class="known-places">
        <div>
            Santa Barbara
            <div>Brasil Arts Cafe</div>
            <div>Yoichi's</div>
        </div>
    </div>
</div>
`,
        [
            PaneAction("BACK", "bucket_list"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "trips"),
        ]
    )
);
