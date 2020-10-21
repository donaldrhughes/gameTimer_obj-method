/* A basic timer using object methods intended for use in games
Freeware - no license required
Donald R. Hughes
*/

let game = {
    timeAlotted: 0,
    timeLeft: 0,
    timer: 0,
    setTimeLeft() {
        this.timeLeft = this.timeAlotted
    },
    setTimeAlotted(amt) {
        this.timeAlotted = amt
    }
}
game.setTimeAlotted(5);
//reset the timeLeft to the timeAlotted
game.setTimeLeft();

//start the timer
timer(game);

//Timer function
function timer(game) {
    game.timeLeft = game.timeAlotted;
    const timer = setInterval(function () {
        game.timeLeft--
        if (game.timeLeft <= 0) {
            clearInterval(timer)
        }
        console.log(game.timeLeft);
    }, 1000);
}