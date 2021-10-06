export class Recipe {
    public name: string;
    public description: string;
    imagePath: string;
    constructor(name: string, desc: string, imagePath:string) {
        this.description = desc;
        this.imagePath = imagePath;
        this.name = name;
    }
}