// Type 1
function printCoord(p:{x:number, y:number}){
    console.log(`x coordinate is ${p.x}`)
    console.log(`y coordinate is ${p.y}`)
}

// Type 2
interface P{
    x: number;
    y: number;
}

function printCoord2(p:P){
    console.log(`x coordinate is ${p.x}`)
    console.log(`y coordinate is ${p.y}`)
}