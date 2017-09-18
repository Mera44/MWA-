class baseObject {
    constructor(public width:number=0, public height:number=0) {
    this.width = width;
        this.height = height;
    }
}
class rectangle extends baseObject {
    constructor(width:number, height:number) {
        super(width, height);
    }
    callsize() {
        return this.width * this.height;
    }
}
var recObj = new rectangle(10,30);
console.log(recObj.callsize())