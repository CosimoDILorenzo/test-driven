export default function sumString(str) {
    return str.split(' ').filter(el => Number(el)).reduce((acc,val) => Number(acc) + Number(val));
}
 