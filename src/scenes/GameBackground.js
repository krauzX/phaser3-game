 class GameBackground extends Phaser.Scene
{
	preload()
	{

	}

	create()
	{

		this.add.line(
			400, 250,
			0, 0,
			0, 500,
			0xffffff, 1
		)
		.setLineWidth(2.5, 2.5)

		this.add.circle(400, 250, 50)
			.setStrokeStyle(5, 0xffffff, 1)
	}
}