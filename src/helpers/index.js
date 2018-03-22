
export function getRandomColor(){
    return `rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
}

export function getRandomPosition(){
    return {
        top: `${randomNumber(90)}%`,
        left: `${randomNumber(90)}%`
    }
}

function randomNumber(max){
    return Math.floor(Math.random()*max);
}
