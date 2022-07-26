TASTE_MATCH_PAGES.add("drink", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Drink
        </div>
        <div class="question-control">
            Select all types of beverages you enjoy...
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="drink-1" name="drink">
        <label for="drink-1">Nonalcoholic</label>
        <input type="checkbox" id="drink-2" name="drink">
        <label for="drink-2">Beer</label>
        <input type="checkbox" id="drink-3" name="drink">
        <label for="drink-3">Wine</label>
        <input type="checkbox" id="drink-4" name="drink">
        <label for="drink-4">Liquor/mixed drinks</label>
        <input type="checkbox" id="drink-5" name="drink">
        <label for="drink-5">Champagne/sparkling wine</label>
        <input type="checkbox" id="drink-6" name="drink">
        <label for="drink-6">Dairy beverages</label>
        <input type="checkbox" id="drink-7" name="drink">
        <label for="drink-7">Apertif</label>
        <input type="checkbox" id="drink-8" name="drink">
        <label for="drink-8">Digestif</label>
        <input type="checkbox" id="drink-9" name="drink">
        <label for="drink-9">Soft drinks</label>
        <input type="checkbox" id="drink-10" name="drink">
        <label for="drink-10">Tea</label>
        <input type="checkbox" id="drink-11" name="drink">
        <label for="drink-11">Coffee</label>
        <input type="checkbox" id="drink-12" name="drink">
        <label for="drink-12">Fermented beverages</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "food2"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "drink2"),
        ]
    )
);
