//Infer types (Implicit types)
function names(_a) {
    var name = _a.name;
    return name;
}
console.log(names({ name: "John Doe", age: 49, salary: 2000 }));
