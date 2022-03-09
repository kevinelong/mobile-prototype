TASTE_MATCH_PAGES.add("free_time", Pane( `
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            In my home town when I’m not working I’m…
        </div>
        <div class="question-control">
            Select all that apply
        </div>
    </div>
    TODO SLIDERS: OCCASIONALLY <= => VERY FREQUENTLY
    <div class="checkbox-control">
        <input type="checkbox" id="free_time-1" name="free_time">
        <label for="free_time-1">Relaxing in nature</label>
        <input type="checkbox" id="free_time-2" name="free_time">
        <label for="free_time-2">Exercising</label>
        <input type="checkbox" id="free_time-3" name="free_time">
        <label for="free_time-3">Outdoor adventures</label>
        <input type="checkbox" id="free_time-4" name="free_time">
        <label for="free_time-4">Exploring the local cuisine</label>
        <input type="checkbox" id="free_time-5" name="free_time">
        <label for="free_time-5">Socially drinking with friends</label>
        <input type="checkbox" id="free_time-6" name="free_time">
        <label for="free_time-6">Reading</label>
        <input type="checkbox" id="free_time-7" name="free_time">
        <label for="free_time-7">Shopping</label>
        <input type="checkbox" id="free_time-8" name="free_time">
        <label for="free_time-8">Watching TV/Surfing the web at home</label>
        <input type="checkbox" id="free_time-9" name="free_time">
        <label for="free_time-9">Attending live music shows</label>
        <input type="checkbox" id="free_time-10" name="free_time">
        <label for="free_time-10">Meeting new people/dating</label>
        <input type="checkbox" id="free_time-11" name="free_time">
        <label for="free_time-11">Going to parties</label>
    </div>
</div>
`,
        [
            PaneAction("BACK", "trips4"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "free_time_plan"),
        ]
    )
);
