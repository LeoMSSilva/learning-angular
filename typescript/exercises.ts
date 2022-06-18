//exercise1
type Person = {
  name: string;
  profession: string;
  age: number;
  interests: Array<string>;
};
//exercise2
const Leonardo: Person = {
  name: "Leonardo",
  profession: "Developer",
  age: 27,
  interests: ["music", "programming", "food", "ride"],
};
//exercise3 and exercise4
const myInterests = (person: Person): Array<string> => person.interests;

//exercise5
enum Subject {
  Angular = "Angular",
  Typescript = "Typescript",
  Git = "Git",
}
//exercise6
type Teacher = {
  name: string;
  subjects: Array<Subject>;
};
//exercise7
const alan: Teacher = {
  name: "Alan",
  subjects: [Subject.Angular, Subject.Git, Subject.Typescript],
};
const nathan: Teacher = {
  name: "Nathan",
  subjects: [Subject.Angular, Subject.Git],
};
//exercise8
const teachers: Teacher[] = [alan, nathan];
//exercise9
const teachersName = (teachers: Teacher[]) => teachers.map(({ name }) => name);
//exercise10
const teachersSubjects = (teachers: Teacher[]) =>
  teachers
    .flatMap(({ subjects }) => subjects)
    .sort()
    .filter(
      (currentValue, index, subjects) =>
        subjects.indexOf(currentValue) === index
    )
//exercise11
const typescriptTeacher = (teachers: Teacher[]) =>
  teachers.find(({ subjects }) => subjects.includes(Subject.Typescript));
