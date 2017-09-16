const TennisApp = require('./TennisGame.js')

describe('Tennis App',() => {
  describe('When player A gets score',() =>{
    let app
    function repeatPlayerAGetScore(number){
      for(let i =0;i<number; i++){
        app.playerAGetScore()
      }
    }
    beforeEach(()=>{
      app = new TennisApp()
      app.reset()
    })
    it('echo "Love - Love" when game starts', () =>{


      let result = app.echo()

      expect(result).toBe('Love - Love')
    } )
    it('should echo "Fifteen - Love" when score is 15-0',()=>{


      repeatPlayerAGetScore(1)
      let result = app.echo()

      expect(result).toBe('Fifteen - Love')

    })
    it('should echo "Thirthy - Love" when score is 30-0',()=>{


      repeatPlayerAGetScore(2)
      let result = app.echo()

      expect(result).toBe('Thirthy - Love')
    })
    it('should echo "Fourthy - Love" when score is 40-0',()=>{


      repeatPlayerAGetScore(3)
      let result = app.echo()

      expect(result).toBe('Fourthy - Love')
    })
    it('should echo "Player A wins game" when Player A gets next score at 40-0',()=>{


      repeatPlayerAGetScore(4)
      let result = app.echo()

      expect(result).toBe('Player A wins game')
    })
  })

  describe('When Player B gets score',() =>{
    let app
    function repeatPlayerBGetScore(number){
      for(let i =0;i<number; i++){
        app.playerBGetScore()
      }
    }
    beforeEach(()=>{
      app = new TennisApp()
      app.reset()
    })
    it('echo "Love - Love" when game starts', () =>{


      let result = app.echo()

      expect(result).toBe('Love - Love')
    } )
    it('should echo "Love - Fifteen" when score is 0-15',()=>{


      repeatPlayerBGetScore(1)
      let result = app.echo()

      expect(result).toBe('Love - Fifteen')

    })
    it('should echo "Love - Thirthy" when score is 0-30',()=>{

      repeatPlayerBGetScore(2)
      let result = app.echo()

      expect(result).toBe('Love - Thirthy')
    })
    it('should echo "Love - Fourthy" when score is 0-40',()=>{


      repeatPlayerBGetScore(3)
      let result = app.echo()

      expect(result).toBe('Love - Fourthy')
    })
    it('should echo "Player B wins game" when Player B gets next score at 0-40',()=>{


      repeatPlayerBGetScore(4)
      let result = app.echo()

      expect(result).toBe('Player B wins game')
    })

  })
})
