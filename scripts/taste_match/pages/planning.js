TASTE_MATCH_PAGES.add("planning", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            How do you plan 3-4 night trips outside your home town?
        </div>
        <div class="question-control">
            Select all that apply
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="checkbox1" name="checkbox">
        <label for="checkbox1">I usually plan at the last minute</label>
        <input type="checkbox" id="checkbox2" name="checkbox">
        <label for="checkbox2">I plan 1-2 weeks in advance</label>
        <input type="checkbox" id="checkbox3" name="checkbox">
        <label for="checkbox3">I plan 3-4 weeks in advance</label>
        <input type="checkbox" id="checkbox4" name="checkbox">
        <label for="checkbox4">I plan 1+ months in advance</label>
        <input type="checkbox" id="checkbox5" name="checkbox">
        <label for="checkbox5">I let other people do the planning</label>
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
