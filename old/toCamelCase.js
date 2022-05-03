// let str = "the_stealth_warrior"
let str = "the-stealth-warrior"
// let str = ""

const toCamelCase = (str) => {
    let arr = str.split(/-|_/)
    start = arr.shift()
    arr = arr.map((string) => string.charAt(0).toUpperCase() + string.slice(1))
    arr.unshift(start)
    str = arr.join('')
    return str
}

function toCamelCase2(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}


console.log(toCamelCase(str))
console.log(toCamelCase2(str))

