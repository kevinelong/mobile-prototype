const toName = name => name.toLowerCase().replace(/[^a-zA-Z0-9À-ž\s]/g, "-").replace(" ","_");

const select = e => {
    [...e.parentElement.children].forEach(s => s.classList.remove('selected'));
    e.classList.add('selected');
}

const selectPage = e => {
    select(e);
    const name = toName(e.id);
    const parts = name.split("-");
    if (parts.length < 2)
        return;
    const part = parts.pop();
    if (part.length < 1)
        return;
    const page = get(`.page.${part}`);

    if (page){
        document.body.setAttribute("page", name);
        const pages = document.getElementsByClassName('page');
        console.log(e);
        [...pages].forEach(s => s.classList.add('hidden'));
        page.classList.remove('hidden');
    }
}

const get = q => document.querySelectorAll(q)[0];

const fire = (eventTypeName, elem = document.body ) => {
    const event = new Event(eventTypeName);
    elem.dispatchEvent(event);
}

const listen = (eventTypeName, handler, elem = document.body) => {
    elem.addEventListener(eventTypeName, handler);
}