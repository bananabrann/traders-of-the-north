class Opponent {
    private readonly difficultyLevel: number; // To be implemented.
    private readonly delayTime: number;
    private readonly handleAction: any;
    private readonly endTurn: any;
    public moveCount: number;

    public constructor(
        difficultyLevel: number,
        delayTime: number,
        handleAction: any,
        endTurn: any
    ) {
        console.log(
            `Opponent constructor called`
        );

        this.difficultyLevel = difficultyLevel;
        this.delayTime = delayTime;
        this.handleAction = handleAction;
        this.endTurn = endTurn;

        this.moveCount = 0;
    }

    public async makeMove(devByPass: boolean = false) {
        console.log("BEGIN opponent makeMove()");
        
        this.moveCount = this.moveCount + 1;

        console.log(`Making move ${this.moveCount}`);

        setTimeout(() => {
            this.handleAction("draw", true);
        }, this.delayTime);

        console.log("EXIT opponent makeMove()");

    }
}

export default Opponent;
