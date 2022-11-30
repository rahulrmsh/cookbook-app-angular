export class Recipe {
  private name: string;
  private desc: string;
  private imageURL: string;
  constructor(name: string, desc: string, imageURL: string) {
    this.name = name;
    this.desc = desc;
    this.imageURL = imageURL;
  }
  getName() {
    return this.name;
  }
  getDesc() {
    return this.desc;
  }
  getImageURL() {
    return this.imageURL;
  }
}
