export default function transformName(string) {
    return string.split(" ").map(el => el[0] + '.').join('');
}