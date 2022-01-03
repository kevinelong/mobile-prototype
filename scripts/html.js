
const tag = (name, className, attrs) => `<${name} class="${className}" ${attrs}>`;
const closedTag = (name, content, className, attrs) => `<${name} class="${className}" ${attrs}>${content}</${name}>`;
const div = (className, content, attrs) => closedTag("div", content, className, attrs);

const a = (text, href, className="") => closedTag("a", text, "",`href="${href}"`);
const img = (className, src = "") => tag("img", `${className} image`, `src="${src}"`);

const label = content => closedTag("label", content);
const input = (name,inputType="text", attrs="") => tag("input", name, `name="${name}" type="${inputType}" ${attrs}`);
