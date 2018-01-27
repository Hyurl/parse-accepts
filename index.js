/**
 * Parses fields like `Accept`, `Accept-Language`, etc. orders them by 
 * qualities high to low.
 */
function parse(str) {
    if (!str) return [];

    var accepts = [],
        values = str.split(/\s*,\s*/);

    for (let i in values) {
        let accept = values[i].split(/\s*;\s*q=/),
            quality = accept[1] ? parseFloat(accept[1]) : 1;

        values[i] = {
            value: accept[0],
            quality
        };
    }

    values.sort((a, b) => {
        return a.quality < b.quality ? 1 : -1;
    });

    return values;
}

/**
 * Parses fields like `Accept`, `Accept-Language`, etc. orders them by 
 * qualities high to low, and only return values.
 */
function parseValue(str){
    var values = parse(str);
    for(let i in values){
        values[i] = values[i].value;
    }
    return values;
}

exports.parse = parse;
exports.parseValue = parseValue;