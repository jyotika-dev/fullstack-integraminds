const x = 0;
const y = 0;
const z = 1;

if (++x && ++y && z++ || ++z) {
    console.log("Inside IF", x, y, z);
}

if(++x && ++y &&z++ && y-- && --y && --y && y-- || ++z){
    console.log("Inside IF", x, y, z);
}