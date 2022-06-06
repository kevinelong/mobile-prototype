const data = [
    {
        id: 123,
        first: "Kevin",
        last: "Long"
    },
    {
        id: 234,
        first: "Kay",
        last: "Long"
    },
    {
        id: 345,
        first: "Nina",
        last: "Marie"
    },
];

const matches = (text, list) =>
    list.filter(v => JSON.stringify(v).indexOf(text) !== -1);
//TESTS
// console.log(JSON.stringify(data[0]));
console.assert(matches("Z", data).length === 0);
console.assert(matches("K", data).length === 2);
console.assert(matches("Marie", data).length === 1);