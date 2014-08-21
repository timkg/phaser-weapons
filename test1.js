var mainState = {
  preload: function () {
    game.load.image('tile', 'assets/tile.png');
    game.load.tilemap('grid', 'assets/grid.json', null, Phaser.Tilemap.TILED_JSON);

    game.load.image('sword', 'assets/sword.png');
  },

  create: function () {
    game.stage.backgroundColor = '#ffffff';

    this.grid = game.add.tilemap('grid');
    this.grid.addTilesetImage('tile');
    this.layer = this.grid.createLayer('Tile Layer 1');
    this.layer.resizeWorld();
    this.grid.setCollision(1);

    this.sword = game.add.sprite(game.world.centerX, game.world.centerY, 'sword');
    this.sword.scale.x = 0.5;
    this.sword.scale.y = 0.5;
    this.sword.anchor.setTo(0.5, 0.9);

    game.physics.enable(this.sword);

    this.slash(this.sword);
  },

  update: function () {
    if (this.sword._arc) {
      this.arcMovement(this.sword);
    }
  },

  thrust: function (weapon) {
    var pullBackDistance = weapon.height / 3;
    var thrustDistance = weapon.height / 3;
    var oldY = weapon.y;

    game.add.tween(weapon)
      .to({y: weapon.y + pullBackDistance}, 500)
      .to({y: weapon.y - (pullBackDistance + thrustDistance)}, 400)
      .to({y: oldY}, 500)
      .start();
  },

  slash: function (weapon) {
    weapon._arc = {
      startAngle: 15,
      endAngle: 165,
      radius: 40,
      degreePerSecond: 180,
      counterClockwise: true
    };
  },

  arcMovement: function (obj) {
    if (!obj._arc.currentAngle) {
      if (obj._arc.counterClockwise) {
        obj._arc.startAngle = 360 - obj._arc.startAngle;
        obj._arc.endAngle = 360 - obj._arc.endAngle;
      }

      obj._arc.currentAngle = obj._arc.startAngle;
      obj._arc.deltaAngle = Math.abs(obj._arc.endAngle - obj._arc.startAngle);
      obj.body.x = obj._arc._originX = obj.body.x - (obj._arc.radius) * Math.cos(Phaser.Math.degToRad(obj._arc.currentAngle));
      obj.body.y = obj._arc._originY = obj.body.y + (obj._arc.radius) * Math.sin(Phaser.Math.degToRad(obj._arc.currentAngle));

      var path = game.add.graphics(0, 0);
      path.lineStyle(0);
      path.beginFill('#ccc', 0.5);
      path.drawCircle(obj._arc._originX + obj.width/2, obj._arc._originY + obj.height*0.9, obj._arc.radius);
    }

    obj.body.x = obj._arc._originX + (obj._arc.radius * Math.cos(Phaser.Math.degToRad(obj._arc.currentAngle)));
    obj.body.y = obj._arc._originY + (obj._arc.radius * Math.sin(Phaser.Math.degToRad(obj._arc.currentAngle)));

    var angleIncrement = (obj._arc.degreePerSecond / 60);
    obj._arc.deltaAngle -= angleIncrement;

    if (obj._arc.counterClockwise) {
      obj._arc.currentAngle -= angleIncrement;
    } else {
      obj._arc.currentAngle += angleIncrement;
    }

    if (obj._arc.deltaAngle <= 0) {
      delete obj._arc;
      obj.body.velocity.x = 0;
      obj.body.velocity.y = 0;
    }

  }
};
