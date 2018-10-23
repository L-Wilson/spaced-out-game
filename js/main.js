// Initialisation on global variables
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var game



$('#play').click(function () {
  if (game) {
    game.stop()
  }
  game = new Game(ctx, levels[0].grid)
  game.start()
})
























