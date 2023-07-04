//cloning using spread operator

let colors = ['red', 'green', 'blue'];
let rgb = [...colors];
console.log(rgb);

//merging using spread operator

let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
let merge = [...rgb, ...cmyk];
console.log(merge);

//cloning & merging object

const circle = {
    radius : 10
};

const coloredCircle = {
    ...circle,
    color: 'black'
};

const coloredCircle2 = {
    ...circle,
    color: 'white'
};

const mergedCircle = {
    ...coloredCircle,
    ...coloredCircle2
};

console.log(coloredCircle);
console.log(mergedCircle);