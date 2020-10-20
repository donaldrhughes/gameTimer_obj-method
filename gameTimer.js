/* A basic timer intended for use in games
Freeware - no license required
Donald R. Hughes
*/

let game = {};
game = {
    timeAlotted: 0,
    timeLeft: 0,
    time: 0,
    setTimeLeft(){
        this.timeLeft = this.timeAlotted
    },
    setTimeAlotted(amt){
        this.timeAlotted = amt
    },
    timer() {
        this.time = setInterval(() => { 
            this.timeLeft--
            if(this.timeLeft <= 0){
                clearInterval(this.time)
                //emit happens
            }
            console.log(this.timeLeft)
        }, 1000);
        
    }
}
game.setTimeAlotted(10);
//reset the timeLeft to the timeAlotted
game.setTimeLeft();

//start the timer
game.timer();