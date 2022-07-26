TASTE_MATCH_PAGES.add("planning", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Planning
        </div>
        <div class="question-control">
        How do you plan 3-4 night trips outside your home town? Select all that apply.
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="planning-1" name="planning">
        <label for="planning-1">I usually plan at the last minute</label>
        <input type="checkbox" id="planning-2" name="planning">
        <label for="planning-2">I plan 1-2 weeks in advance</label>
        <input type="checkbox" id="planning-3" name="planning">
        <label for="planning-3">I plan 3-4 weeks in advance</label>
        <input type="checkbox" id="planning-4" name="planning">
        <label for="planning-4">I plan 1+ months in advance</label>
        <input type="checkbox" id="planning-5" name="planning">
        <label for="planning-5">I let other people do the planning</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "interests"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "planning2"),
        ]
    )
);
