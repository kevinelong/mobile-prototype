TASTE_MATCH_PAGES.add("bucket_list2", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Familiar places
        </div>
        <div class="question-control">
            Tell us about places you are familiar with so we can get to know you. Add experiences you've had at each place. You may add as many places and experiences as you would like.
        </div>
        TENTATIVE IDEA: SEARCH BAR CAN ADD A NEW PLACE, AS MANY AS DESIRED. MINUS BUTTON REMOVES PLACE. PLUS BUTTON CAN BRING UP SEARCH BAR BELOW IT TO ADD AN EXPERIENCE, AND THIS PROCESS CAN BE REPEATED AS MANY TIMES AS DESIRED FOR EACH PLACE. MINUS BUTTONS REMOVE MISTAKES. USER CAN SCROLL IF OUT OF ROOM, OR WE CAN SPLIT THINGS INTO SEPARATE PAGES.
        <div class="text-control">
            <input type="text" placeholder="I have been to...">
        </div>
    </div>
    <div class="known-places">
        <div class="known-place">
            <button class="button-minus">
                <img src="images/remove_black_24dp.svg">
            </button>
            <div class="known-place-tab">
                Santa Barbara, CA
                <button class="button-plus">
                    <img src="images/add_black_24dp.svg">
                </button>
            </div>
        </div>
        <div class="known-exp">
            <button class="button-minus">
                <img src="images/remove_black_24dp.svg">
            </button>
            <div class="known-exp-tab">
                Brasil Arts Cafe
                <div class="button-minus"></div>
            </div>
        </div>
        <div class="known-exp">
            <button class="button-minus">
                <img src="images/remove_black_24dp.svg">
            </button>
            <div class="known-exp-tab">
                Yoichi's
                <div class="button-minus"></div>
            </div>
        </div>
        <div class="known-place">
            <button class="button-minus">
                <img src="images/remove_black_24dp.svg">
            </button>
            <div class="known-place-tab">
                Oregon 
                <button class="button-plus">
                    <img src="images/add_black_24dp.svg">
                </button>
            </div>
        </div>
        <div class="known-exp">
            <button class="button-minus">
                <img src="images/remove_black_24dp.svg">
            </button>
            <div class="known-exp-tab">
                Haystack Rock
                <div class="button-minus"></div>
            </div>
        </div>
        <div class="known-exp">
            <button class="button-minus">
                <img src="images/remove_black_24dp.svg">
            </button>
            <div class="known-exp-tab">
                Rogue Brewery
                <div class="button-minus"></div>
            </div>
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
