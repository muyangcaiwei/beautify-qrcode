export function rand(min, max) {
    let seed = 0;
    seed = (seed * 9301 + 49297) % 233280;
    return min + (seed / 233280.0) * (max - min);
}

export function isNull(obj) {
    return Object.keys(obj).length === 0
}