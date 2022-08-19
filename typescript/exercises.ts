//Basics

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
    );
//exercise11
const typescriptTeacher = (teachers: Teacher[]) =>
  teachers.find(({ subjects }) => subjects.includes(Subject.Typescript));

//Advanced

// exercise1 - Intersection
export function mergeObjects<Obj1, Obj2>(obj1: Obj1, obj2: Obj2): Obj1 & Obj2 {
  return { ...obj1, ...obj2 };
}

const fistNameObject = { fistName: "Leonardo" };
const lastNameObject = { lastName: "Silva" };
const mergedObjects = mergeObjects(fistNameObject, lastNameObject);
console.log("Merged Object Intersection:", mergedObjects);

// exercise2 - Indexed-access-types
export const handlers = {
  click: (target: HTMLElement) => {},
  scroll: (distance: number) => {},
} as const;

export type Handlers = typeof handlers;
export type HandlerTypes = keyof Handlers;

function getHandler<P extends HandlerTypes>(handlerType: P): Handlers[P] {
  return handlers[handlerType];
}
// function getHandler(handlerType: string): Function {
//   return handlers[handlerType as keyof Handlers];
// }

console.log("Is click Indexed-access-types:", getHandler("click"));
console.log("Is Scroll Indexed-access-types:", getHandler("scroll"));

// exercise3 - Generics
// export type ItemText = { valor: string };
// export type ItemNumeric = { valor: number };
export type Item<T> = { valor: T };
export type ItemText = Item<string>;
export type ItemNumeric = Item<number>;

// exercise4 - Type-guard
export interface GuestUser {
  type: "guest";
  name: string;
}

export interface AuthenticatedUser {
  type: "user";
  id: string;
  name: string;
}

export type UserGuard = GuestUser | AuthenticatedUser;

function isGuestUser(user: UserGuard): user is GuestUser {
  return user.type === "guest";
}

function isAuthenticatedUser(user: UserGuard): user is AuthenticatedUser {
  return user.type === "user";
}

function guardOrAuthenticate(user: UserGuard) {
  return isAuthenticatedUser(user) ? user.type : user.type;
}

const guestUser: GuestUser = { type: "guest", name: "Leonardo" };
const authenticatedUser: AuthenticatedUser = {
  type: "user",
  id: "1",
  name: "Leonardo",
};

console.log("Guest User Type-guard:", guardOrAuthenticate(guestUser));
console.log("Authenticated User Type-guard:", guardOrAuthenticate(authenticatedUser));

//# 5 - Type-parameters
// export function editProperty(obj: any, property: string, value: any): void {
//   obj[property] = value;
// }
export function editProperty<O, P extends keyof O, V extends O[P]>(
  obj: O,
  property: P,
  value: V
): void {
  obj[property] = value;
}

editProperty({ name: "string" }, "name", "Leonardo");

// exercise6 - Discriminated-union
// export type UserUnion = {
//   name: string;
//   email?: string;
//   registered: boolean;
// };

export type RegisteredUser = {
  name: string;
  email: string;
  registered: true;
};

export type UnregisteredUser = {
  name: string;
  registered: false;
};

export type UserUnion = RegisteredUser | UnregisteredUser;

function registeredUser(user: UserUnion) {
  return user.registered
    ? [user.email, user.name, user.registered]
    : [user.name, user.registered];
}

const registered: UserUnion = {
  name: "Leonardo",
  email: "Leonardo@email.com",
  registered: true,
};

const unRegistered: UserUnion = {
  name: "Leo",
  registered: false,
};

console.log("Registered user Discriminated-union:", registeredUser(registered));
console.log("Unregistered user Discriminated-union:", registeredUser(unRegistered));

// exercise7 - Utility-types
export type UserUtility = { id: number; name: string; email: string };
// export type UserWithoutId = { name: string; email: string };
export type UserWithoutId = Omit<UserUtility, "id">;
// export type UserWithIdButOptionalRest = {
//   id: number;
//   name?: string;
//   email?: string;
// };
export type UserWithIdButOptionalRest = Pick<UserUtility, "id"> &
  Partial<Omit<UserUtility, "id">>;
// export type UserName = { name: string };
export type UserName = Pick<UserUtility, "name">;

export function getUserWithoutId(user: UserWithoutId) {
  const { email, name } = user;
  return { email, name };
}

export function getUserWithIdButOptionalRest(user: UserWithIdButOptionalRest) {
  const { id, email, name } = user;
  return { id, email, name };
}

export function getUserName(user: UserName): string {
  return user.name;
}

const userUtility = { id: 1, name: "Leonardo", email: "Leonardo@email" };
console.log("User Id Utility-types:", getUserWithoutId(userUtility));
console.log(
  "User Optional Params Utility-types:",
  getUserWithIdButOptionalRest(userUtility)
);
console.log('User Name Utility-types:', getUserName(userUtility));

// exercise8 - Mixins
export type Constructor<T = {}> = new (...args: any[]) => T;
type HasName = { firstName: string; lastName: string };
type HasFullName = { getFullName(): string };

function named<TBase extends Constructor>(
  base: TBase
): TBase & Constructor<HasName> {
  return class extends base {
    firstName: string = "Leonardo";
    lastName: string = "Silva";
  };
}

function fullNamed<TBase extends Constructor<HasName>>(
  base: TBase
): TBase & Constructor<HasFullName> {
  return class extends base {
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
}

class PhysicalPerson {}
const NamedPhysicalPerson = named(PhysicalPerson);
const namedPhysicalPerson = new NamedPhysicalPerson();
const FullNamedPhysicalPerson = fullNamed(NamedPhysicalPerson);
const fullNamedPhysicalPerson = new FullNamedPhysicalPerson();
console.log("Named Physical Person mixin:", namedPhysicalPerson);
console.log(
  "Full Named Physical Person mixin:",
  fullNamedPhysicalPerson.getFullName()
);

// exercise9 - Conditional-types
function isArray<T>(arg: T): T extends Array<any> ? true : false {
  return Array.isArray(arg) as any;
}

console.log("Is array:", isArray([]));
console.log("Isn't array:", isArray(""));
