TASTE_MATCH_PAGES.add("bucket_list", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Bucket-list
        </div>
        <div class="question-control">
            Tell us at least 1 place you would like to visit
        </div>
        <div class="text-control">
            <input type="text" placeholder="I would like to go to...">
        </div>
        
    </div>
    <div class="place-card">
        <span>Napa Valley, CA</span>
    </div>
    </div>
`,
        [
            PaneAction("BACK", "planning2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "bucket_list2"),
        ]
    )
);
