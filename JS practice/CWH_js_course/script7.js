//CWH JS #38

let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
console.log(id1)

//elem.matches(css) - returns true if this element that "css" selector
console.log(id1.matches(".square"))
console.log(id1.matches(".box"))

//elem.closest(css) - to look for the nearest ancestor that matches the given "css" selector. The element itself also checked. Returns null if nothing matches
let sp1 = document.getElementById("sp1");
console.log(sp1.closest("#noob"));
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));

//elem.contains(css) - if "css" selector matches then returns true, else returns false
console.log(id1.contains(sp1));
console.log(id1.contains(id2));
