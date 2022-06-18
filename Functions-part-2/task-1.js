function mix(...fns) {
    if(!fns.every(fn => typeof fn === 'function'))
        throw new TypeError('The parameter is not a function');
    const first = fns[0];
    let res = first();
    for(let i = 1; i < fns.length; i++) {
        const fn = fns[i];
        res = fn(res);
    }
    return res;
}

const result = mix(
    () => 0, 
    (prev) => prev + 1,
    (prev) => prev * 2
);

console.log(result);