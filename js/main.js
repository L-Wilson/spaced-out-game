// Initialisation on global variables
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var game



$('#play').click(function () {
  if (game) {
    game.stop()
  }
  game = new Game(ctx)    //(ctx, levels[0].grid)
  game.start()

  window.addEventListener('keydown', function (e) {
    e.preventDefault();
    game.keys = (game.keys || []);
    game.keys[e.keyCode] = (e.type == "keydown");
  })
  window.addEventListener('keyup', function (e) {
    game.keys[e.keyCode] = (e.type == "keydown");
  })
})
























