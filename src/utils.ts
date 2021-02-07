export default class Utils {
    static getRandomFromArray(target: Array<any>) {
        const x: any = target[Math.floor(Math.random() * target.length)];
        return x;
    }
}
