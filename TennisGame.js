function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirthy', 'Fourthy']
    this.playerAScore = 0
    this.playerBScore = 0

    this.reset = () => {
        this.playerAScore = 0
        this.playerBScore = 0
    }

    this.echo = () => {
      if(this.playerAScore==4&& this.playerBScore==0){
        return "Player A wins game"
      }
      if(this.playerAScore==0&&this.playerBScore==4){
        return "Player B wins game"
      }
       if(this.playerAScore==3 && this.playerBScore==3){
      return "Deuce"
    }else{
    return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`

    }
    }

    this.playerAGetScore = () => {
        this.playerAScore++
    }

    this.playerBGetScore = () => {
        this.playerBScore++
    }
}
module.exports = TennisGame
