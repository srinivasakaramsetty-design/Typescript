// interface for Person
interface Person {
  name: string;
}

// Employee extends Person
interface Employee extends Person {
  id: number;
}

// object creation
let emp: Employee = {
  name: "Srinivas",
  id: 101
};

console.log(emp);