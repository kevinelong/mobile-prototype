def internal_tag(name="img", class_names="", attrs=""):
    return ' '.join([name, 'class="' + class_names + '"' if class_names else '', attrs])


def solo_tag(name="img", class_names="", attrs=""):
    return f"<{internal_tag(name, class_names, attrs)} />"


def closed_tag(name="div", content="", class_names="", attrs=""):
    return f"""<{internal_tag(name, class_names, attrs)}>{content}</{name}>"""


# SOLO TAGS
Img = lambda class_names="", attrs="": solo_tag("img", class_names, attrs)
Br = lambda class_names="", attrs="": solo_tag("br", class_names, attrs)
Input = lambda name="", value="", input_type="input", attrs="": solo_tag(
    "input", name, f'name="{name}" value="{value}" type="{input_type}" ' + attrs
)
Submit = lambda name="Submit", attrs="": Input(name, name, "submit", attrs)
Password = lambda name="password", attrs="": Input(name, "", "password", attrs)

# CLOSED TAGS
A = lambda content="", class_names="", attrs="": closed_tag("a", content, class_names, attrs)
Div = lambda content="", class_names="", attrs="": closed_tag("div", content, class_names, attrs)
Form = lambda content="", attrs="": closed_tag("form", content, "", attrs)
Label = lambda content="", class_names="", attrs="": closed_tag("label", content, class_names, attrs)

# Replaces each key in curly braces from the dict with the corresponding value.
Template = lambda template_text="", key_value_pairs={}: template_text.format(**key_value_pairs)

if __name__ == "__main__":
    result = closed_tag("div", "content", "cool bean", f'''id="123" onclick="doIt("or don't");"''')
    assert (result == '''<div class="cool bean" id="123" onclick="doIt("or don't");">content</div>''')
    assert (Template("Hello {name}; Goodbye {name}.", {"name": "Kevin"}) == "Hello Kevin; Goodbye Kevin.")
