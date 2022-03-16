
function onPaneAction(pane) {

    const hide = e => e.classList.add("hidden");
    let panes = document.querySelectorAll(".pane");
    [...panes].forEach(hide);

    if (!pane) {
        return false;
    }

    const show = e => e.classList.remove("hidden");
    let matches = document.querySelectorAll(`.${pane}`);
    [...matches].forEach(show);
    return false;
}

function paneAction(a) {
    let content = a.name;
    let href = `onPaneAction('${a.pane}')`;

    if(a.pane.indexOf(".html") !== -1){
        href = a.pane;
    }

    if (a.name.toLocaleUpperCase() === "NEXT"){
        content = `
<svg style="display:flex;justify-self:center;align-self: center;"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     width="24" height="24" viewBox="0 0 24 24">
    <path fill="white" 
        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
</svg>`;
    }
    else if (a.name.toLocaleUpperCase() === "BACK"){
        content = `
<svg style="display:flex;justify-self:center;align-self: center; transform:rotate(180deg);"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     width="24" height="24" viewBox="0 0 24 24">
    <path fill="white" 
        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
</svg>`;
    }


    return `
<button class="pane-action" onclick="onPaneAction('${a.pane}')"> 
    ${content}                   
</button>`;
}

function pane(name, p, start) {
    const className = start === name ? "start" : "hidden";
    const actionContent = p.actions.reverse().map(paneAction).join("");
    return `
<div class="pane ${name} ${className}">
    <div class="pane-content">${p.content}</div>
    <div class="pane-actions">${actionContent}</div>
</div>`;
}

function panes(data) {
    const keys = Object.keys(data.panes);
    const make = key => pane(key, data.panes[key], data.start);
    let output = keys.map(make);
    return output.join("");
}


function PaneAction(content,destination){
    return{
        name: content,
        pane: destination
    }
}

function Pane(content, actions) {
    return {
        content:content,
        actions:actions
    }
}

function PaneSet(name, start) {
    return {
        name:name,
        start:start,
        panes: panes,
        add: (name, p) => this.panes[name] = p
    }
}