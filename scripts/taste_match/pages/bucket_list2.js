TASTE_MATCH_PAGES.add("bucket_list2", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Familiar Places
        </div>
        <div class="question-control">
            Tell us about a place you are familiar with so we can get to know you
        </div>
        <div class="text-control">
            <input type="text" placeholder="I have been to...">
        </div>
    </div>
    <div class="known-places">
        <div class="known-place">
            Santa Barbara, CA
            <div class="button-plus"></div>
        </div>
            <div class="known-exp">
                Brasil Arts Cafe
                <div class="button-minus"></div>
            </div>
            <div class="known-exp">
                Yoichi's
                <div class="button-minus"></div>
            </div>
        <div class="known-place">
            Oregon
            <div class="button-plus"></div>
        </div>
            <div class="known-exp">
                Haystack Rock
                <div class="button-minus"></div>
            </div>
            <div class="known-exp">
                Rogue Brewery
                <div class="button-minus"></div>
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
