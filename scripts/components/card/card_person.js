function cardPerson(person) {
  return div(
      "person-icon",
      circle(personItem("person", "connect", person.id, person))
  );
}

function cardPeople(peopleList, showSuffix = false) {
  if(!peopleList || peopleList.length == 0){
      return "";
  }
  return div(
      "card-people",
      [...peopleList].map((p) => cardPerson(p)).join("") +
      (showSuffix ? circle(text(
          `&nbsp;${peopleList.length} ${peopleList.length == 1 ? "Person" : "People"} loved this!&nbsp;`
      )) : "")
  );
}