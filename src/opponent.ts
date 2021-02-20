class Opponent {
    private readonly difficultyLevel: number; // To be implemented.
    private readonly delayTime: number;
    private readonly handleAction: any;
    public moveCount: number;

    public constructor(
        difficultyLevel: number,
        delayTime: number,
        handleAction: any
    ) {
        console.log(
            `Opponent constructor called: constructor(${difficultyLevel}, ${delayTime}, ${handleAction})`
        );

        this.difficultyLevel = difficultyLevel;
        this.delayTime = delayTime;
        this.handleAction = handleAction;

        this.moveCount = 0;
    }

    public makeMove(devByPass: boolean = false) {
        this.moveCount = this.moveCount + 1;

        console.log(`Making move ${this.moveCount}`);

        setTimeout(() => {
            this.handleAction("draw", true);
        }, this.delayTime);
    }
}

export default Opponent;
