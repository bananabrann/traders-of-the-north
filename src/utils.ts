export default class Utils {
    static getRandomFromArray(target: Array<any>) {
        const x: any = target[Math.floor(Math.random() * target.length)];
        return x;
    }

    static consoleWarnAboutDevByPassMode() {
        console.warn(
            "A function or event has triggered a developer bypass mode.\nIf this was unintended, check your code for proper processes."
        );
    }
}
