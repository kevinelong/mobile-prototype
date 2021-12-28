const agendaPage = (selected=false) => page(
    selected,
    "agenda",
    "Agenda",
    [
        "ALL NETWORK",
        "PLANNERS",
        "FRIENDS",
    ],
    "ALL NETWORK",
    simpleList("TODAY",[
        ["12+", "Breakfast at Sunny's", "9:30am", "right"],
        ["4", "Golf on the hill.", "12:30pm", "right"],
    ], "Friday December 12 2022") +
    simpleList("TOMORROW",[
        ["12+", "Breakfast at Sunny's", "9:30am", "right"],
        ["4", "Golf on the hill.", "12:30pm", "right"],
    ], "Saturday December 13 2022")+
    simpleList("SUNDAY",[
        ["12+", "Breakfast at Sunny's", "9:30am", "right"],
        ["4", "Golf on the hill.", "12:30pm", "right"],
    ], "Sunday December 14 2022")+
    simpleList("FRIDAY",[
        ["12+", "Breakfast at Sunny's", "9:30am", "right"],
        ["4", "Golf on the hill.", "12:30pm", "right"],
    ], "Friday December 19 2022"),
    "ALL NETWORK"
);