//Global Scope
var gv = "Im a Global Variable";
let gl = "Im a Global Variable, but Scoped with let";
const gc = "Im a Global Constant";

{
    //Blocked Scoped
    var bv = "Im a Block-Scoped Variable";
    let bl = "Im a Block-Scoped Let";
    const bc = "Im a Block-Scoped Constant";
}

console.log(gv);
console.log(gl);
console.log(gc);

//Blocked Scope
console.log(bv);
//console.log(bl);
//console.log(bc);

function show(){
    var fv = "Im a block scoped var";
    let fl = "Im a block scoped let";
    const fc = "Im a block scoped const";
}

show();

console.log(fv);
console.log(fl);
console.log(fc);
