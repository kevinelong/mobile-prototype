function grid_format(value, row_index, column_index) {
    const tag = row_index === 0 ? "th" : "td";
    const className = String.fromCharCode(65 + column_index) + row_index.toString();
    const prefix = `<${tag} class="${className}">`;
    const suffix = `</${tag}>`;
    return prefix + value + suffix;
}

function grid_part(part, row_index) {
    const className = `row_${row_index}`;
    const prefix = `<tr class="${className}">`;
    const suffix = "</tr>";
    return prefix + part.map((c, column_index) => {
        return grid_format(c, row_index, column_index)
    }).join("") + suffix;
}

function grid(data, delimiter = "", prefix = "<table>", suffix = "</table>") {
    return prefix + data.map((r, i) => grid_part(r, i)).join(delimiter) + suffix;
}