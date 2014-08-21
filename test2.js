function makeSword (x, y, angle) {
  var sprite = game.add.sprite(x, y, 'sword');
  sprite.scale.x = 0.5;
  sprite.scale.y = 0.5;
  sprite.anchor.setTo(0.5, 0.9);

  game.physics.arcade.enable(sprite);

  sprite.angle = angle;
  return sprite;
}

var mainState = {
  preload: function () {
    game.load.image('sword', 'assets/sword.png');
  },

  create: function () {
    game.stage.backgroundColor = '#dddddd';
    game.physics.startSystem('arcade');

    window.sword = this.sword = makeSword(game.world.centerX + 25, game.world.height - 100, 0);
    this.sword.body.setSize(18, 200, 11, 0);

    window.sword2 = this.sword2 = makeSword(game.world.centerX - 25, 100, 180);
    this.sword.body.setSize(18, 200, 11, 0);

  },

  update: function () {
    game.physics.arcade.collide(sword, sword2, function () {
      debugger
    })
  }
};
