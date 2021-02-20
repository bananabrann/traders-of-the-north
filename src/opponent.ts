class Opponent {
    // To be implemented.
    private readonly difficultyLevel: number;
    private readonly delayTime: number;
    private readonly handleAction: any;
    public moveCount: number;

    public constructor(difficultyLevel: number, delayTime: number, handleAction: any) {
        this.difficultyLevel = difficultyLevel;
        this.delayTime = delayTime;
        this.handleAction = handleAction;

        this.moveCount = 0;
    }

    public makeMove(devByPass: boolean = false) {
        this.moveCount = this.moveCount + 1;

        console.log(`Making move ${this.moveCount}`);
        
        // setTimeout(() => {
            this.handleAction("draw");
        // }, this.delayTime)
    }
}

export default Opponent;
