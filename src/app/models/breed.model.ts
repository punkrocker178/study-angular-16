import { Image } from "./image.model";

export class Breed {
    public id!: string;
    public name!: string;
    public temperament!: string;
    public origin!: string;
    public life_span!: string;
    public wikipedia_url!: string;
    public image!: Image;
}