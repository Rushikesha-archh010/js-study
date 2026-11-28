//Stack (Primitive) and Heap (Non-primitive)

//The key difference is whether assigning or passing a value gives you an independent copy or a reference to the same underlying data.


//Stack memory concept
// When you assign one variable to another, JavaScript creates a separate copy of the value. Changing one does not change the other.
let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// anothername starts with its own copy of "hiteshchoudharydotcom".

// Reassigning anothername = "chaiaurcode" only modifies anothername, leaving myYoutubename untouched.

//Heap memory Concept

//while the variable name in the stack holds a reference (pointer) to that heap location.

// If you assign that variable to another variable, both variables point to the same object in the heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//userTwo does not duplicate the object—it points to the same heap object as userOne.

// Mutating userTwo.email changes the shared object, so reading userOne.email reflects the update too.
