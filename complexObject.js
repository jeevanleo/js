let family = [
  {
    firstName: "zero",
    gender: "m",
  },
  {
    firstName: "one",
    gender: "f",
  },
  {
    firstName: "two",
    gender: "m",
  },
  {
    firstName: "three",
    gender: "f",
  },
];
for (let i = 0; i < family.length; i++) {
  if (family[i]["gender"] == "m") console.log(family[i]["firstName"]);
}
