/* A basic timer using object methods intended for use in games
Freeware - no license required
Donald R. Hughes
*/

let game = {
    timeAlotted: 0,
    timeLeft: 0,
    timer: 0,
    setTimeLeft(){
        this.timeLeft = this.timeAlotted
    },
    setTimeAlotted(amt){
        this.timeAlotted = amt
    },
    timer() {
        this.timer = setInterval(() => { 
            this.timeLeft--
            if(this.timeLeft <= 0){
                clearInterval(this.timer)
            }
            console.log(this.timeLeft)
        }, 1000);
        
    }
}
//set the time allotted when calling
game.setTimeAlotted(5);
//reset the timeLeft to the timeAlotted
game.setTimeLeft();

//start the timer
game.timer();