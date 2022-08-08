class Overworld{
	constructor(config){
		this.element = config.element;
		this.canvas = this.element.querySelector(".gameCanvas");
		this.ctx = this.canvas.getContext("2d");
	}

	init(){
		const image = new Image();
		image.onload = () => {
			this.ctx.drawImage(image, 0, 0)
		};
		image.src = "img/mindscape/scapes/DemoLean.png";

		const x = 5;
		const y = 6;

		const shadow = new Image();
		shadow.onload = () => {
			this.ctx.drawImage(shadow, 0, 0, 32, 32, x*16-8, y*16-18, 32, 32);
		}
		shadow.src = "img/mindscape/explos/shadow.png";

		const explo = new Image();
		explo.onload = () => {
			this.ctx.drawImage(explo, 0, 0, 32, 32, x*16-8, y*16-18, 32, 32);
		}
		explo.src = "img/mindscape/explos/exploViewer.png";
	}
}