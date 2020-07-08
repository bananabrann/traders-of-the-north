abstract class Utility {
  
  public static log(x: string, opt: string = "", optMethod: string = "log") {
    const displayConsoleLogActions: boolean = true;
    if (displayConsoleLogActions && optMethod === "log") console.log(`${x}\n${opt}`);
  }

  public static devLog(x: string, opt: string = "", optMethod: string = "log") {
    const displayDevConsoleLogging: boolean = true;
    if (displayDevConsoleLogging && optMethod === "log") console.log(`${x}\n${opt}`);
  }

  public static playButtonAnimation(name: string, secondsDelayTime: number = 1) {
    // NOTE - Handles the playing of the gif images on 
    // the button selections. This does NOT include the
    // game pieces.

    // NOTE - The reason why I have chosen to not have
    // a Title class method handle this is because 
    // more places other than Title might use this 
    // method, such as action pieces.

    // TODO - Determine what button was selected and
    // what gif to play.
    if (name === "instructions" || name === "play" || name === "about") {
      const pathGif: string = `res/img/buttons-menu/${name}/animate.gif`;
      const staticPath: string = `res/img/buttons-menu/${name}/static.png`;
    } else {
      throw new ReferenceError("Unknown button name called");
    }

    // TODO - Manipulate DOM to play gif.
    let btn = document.getElementById("btn-" + name);

    // TODO - Wait like 3 seconds or so. No callback.
    setTimeout(() => {
      console.log(btn)
      return
    }, 1000)

    // TODO - No return predicted, because this function
    // should manipulate everythig before moving on.
  }

  public static isLegalWindowDimension() {
    let x = window.innerWidth;
    let y = window.innerHeight;
    // NOTE - Dev only
    return false;

    return (y / x >= 0.88 && y / x <= 2.17) ? true : false

  }
}

export default Utility;
