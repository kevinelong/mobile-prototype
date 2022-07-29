from dom import *


def dom_datatype(field_name):
    f = field_name.lower()
    if f.startswith("is_") or f.startswith("has_"):
        return "boolean"
    if f.endswith("_date") or f.endswith("_time"):
        return "date"  # date, time, or both
    if f.endswith("_time"):
        return "time"  # date, time, or both
    if f.endswith("_size") or f.endswith("_weight") or f == "id" or f.startswith("fk_") or f.endswith("_id"):
        return "number"
    return "input"  # Default


def form(fields=[], action=".", method="post"):
    return Form("".join([
        "".join([Input(f, "", dom_datatype(f), f'placeholder="{f}"') for f in fields]),
        Submit(),
    ]), f'action="{action}" method="{method}"')
