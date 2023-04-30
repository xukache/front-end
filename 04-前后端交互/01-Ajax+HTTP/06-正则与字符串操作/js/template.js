function template(id, data) {
    let str = document.getElementById(id).innerHTML
    let pattern = /{{\s*([a-zA-Z]+)\s*}}/

    let patternResult = null
    while (patternResult = pattern.exec(str)) {
        str = str.replace(patternResult[0], data[patternResult[1]])
    }

    return str
}