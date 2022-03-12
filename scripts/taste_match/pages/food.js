TASTE_MATCH_PAGES.add("food", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Tell us about your eating habits,
        </div>
        <div class="question-control">
             so we can match you with the best food experiences:
        </div>
        <div class="question-control">
            Select all types of food you enjoy eating...
        </div>
    </div>
    <div class="checkbox-control">
        <input type="checkbox" id="food-1" name="food">
        <label for="food-1">Organic</label>
        <input type="checkbox" id="food-2" name="food">
        <label for="food-2">Non-organic</label>
        <input type="checkbox" id="food-3" name="food">
        <label for="food-3">Gluten</label>
        <input type="checkbox" id="food-4" name="food">
        <label for="food-4">Dairy</label>
        <input type="checkbox" id="food-5" name="food">
        <label for="food-5">Vegetarian</label>
        <input type="checkbox" id="food-5" name="food">
        <label for="food-5">Meat</label>
        <input type="checkbox" id="food-5" name="food">
        <label for="food-5">Poultry</label>
        <input type="checkbox" id="food-5" name="food">
        <label for="food-5">Fish</label>
        <input type="checkbox" id="food-5" name="food">
        <label for="food-5">Fast food</label>
        <input type="checkbox" id="food-5" name="food">
        <label for="food-5">Sweets/desserts</label>
    </div>
</div>
`,
    // DEFERRED SLIDERS: OCCASIONALLY <= => EVERY WEEK

    [
            PaneAction("BACK", "free_time_plan6"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "food2"),
        ]
    )
);
