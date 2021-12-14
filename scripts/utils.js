const toName = name => name.toLowerCase().replace(/[^a-zA-Z0-9À-ž\s]/g, "-").replace(" ","_");

const select = e => {
    const selected = e.parentElement.getElementsByClassName('selected');
    [...e.parentElement.children].forEach(s => s.classList.remove('selected'));
    e.classList.add('selected');
    
    const b = document.body;
    [...b.classList].forEach(c => b.classList.remove(c));
    b.classList.add(`selected-${toName(e.parentElement.id)}-${toName(e.id)}`);
}

const get = q => document.querySelectorAll(q)[0];
