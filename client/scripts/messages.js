//util functions
// function uuidv4() {
//     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//         (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     );
// }

const now = () => (new Date()).toLocaleString();

// console.log(uuidv4());
//html functions
const div = (text = '', c = '', a = '') => {
    c = c ? ' class="' + c + '"' : '';
    a = a ? ' ' + a : '';
    return `<div${c}${a}>${text}</div>\n`;
};

//display functions
const when = w => div(w, "when");
const who = w => div(w.name, "who");
const text = t => div(t, "text");

const showMessage = m => {
    return div(
        text(m.message) + who(m.from) + when(m.when),
        "message"
    );
};

const showList = list => {
    return list.map(message).join('');
};

class User {
    constructor(name, pw = "") {
        this.name = name;
        this.isLoggedIn = false;
        if (pw) {
            this.login();
        }
    }
}


class Message {
    constructor(
        from = "",
        message = "",
        to = [],
        when = '',
        sent = false
    ) {
        this.from = from;
        this.message = message;
        this.to = to;
        this.when = when ? when : now();
        this.sent = sent;
    }

    send() {
        if (this.sent) {
            return false;
        }
        this.when = now();
        this.handleSend();
    }

    handleSend(response = {}) {
        this.sent = true;
    }
}


class Chat {
    messages = [];
    participants = [];
    title = '';

    constructor(
        user,
        title = "",
        participants = [],
        messages = []
    ) {
        this.user = user;
        this.title = title;
        this.messages = messages;
        //merge user into new list;
        this.participants = [user, ...participants];
    }

    add(text, from = undefined) {
        if (!this.user.isLoggedIn) {
            console.log("User not logged in.");
            return;
        }
        from = undefined == from ? this.user : from;
        const m = new Message(from, text, this.participants);
        this.messages.push(m);
    }

    join(user = {}) {
        this.participants.push(user);
    }
}


class App {
    user = undefined;

    constructor(
        onLogin = () => true,
        onMessage = () => true,
        onJoin = () => true,
    ) {
        this.chat = new Chat();
        this.onLogin = onLogin;
        this.onMessage = onMessage;
        this.onJoin = onJoin;
    }

    login(username, password) {
        //TODO initiate login
        this.handleLogin({username: username, password: password});
    }

    handleLogin(response) {
        this.user = new User(response.username);
        this.user.isLoggedIn = true;
        this.onLogin(this.user);
    }

    send(text, to = []) {
        const m = new Message(this.user, to);
        this.handleSend(m);
    }

    handleSend(response) {
        this.onMessage(response)
    }

    receive(text, to = []) {
        const m = new Message(this.user, to);
        this.handleSend(m);
    }

    handleReceive(response) {
        this.onMessage(response)
    }

    leave(text, to = []) {
        const m = new Message(this.user, to);
        this.handleSend(m);
    }

    handleLeave(response) {
        this.onMessage(response)
    }

    join(text, to = []) {
        const m = new Message(this.user, to);
        this.handleSend(m);
    }

    handleJoin(response) {
        this.onMessage(response)
    }

    command(text) {
        const trimmed = text.trim();

        if (trimmed === "") {
            return; //ignore blank lines
        }

        const parts = trimmed.split(" ");
        const command = parts.shift();

        switch (command) {
            case 'login':
                if (parts.length != 2) {
                    console.log("Login requires two parameters. Username and Password.");
                    return;
                }
                this.login(parts[0], parts[1]);
                break;
            case 'send':
                this.send(...parts);
                break;
            case 'receive':
                this.receive(...parts);
                break;
            case 'leave':
                this.leave(...parts);
                break;
            case 'join':
                this.join(...parts);
                break;
            default:
                console.log('unknown command:', command);
        }
        return true;
    }
}


//test
const app = new App(
    (e) => console.log(e),
    (e) => console.log(showMessage(e)),
    (e) => console.log(e),
);

`
login kevin password
join andrew
join barry
send hello
receive barry hi
receive andrew whats_up?
send welcome!
leave andrew
leave barry
`.split("\n").forEach(c => app.command(c.trim()))
