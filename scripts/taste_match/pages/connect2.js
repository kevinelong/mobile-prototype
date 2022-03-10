const contactsList = CONTACTS.map(s => checkboxControl(s)).join("\n");

TASTE_MATCH_PAGES.add("connect2", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
           Choose Contacts
        </div>
    </div>
    <div class="interests-list">
        ${contactsList}
    </div>
</div>
`,
        [
            PaneAction("BACK", "connect"),
            PaneAction("SKIP", "thanks"),
            PaneAction("NEXT", "connect3"),
        ]
    )
);
