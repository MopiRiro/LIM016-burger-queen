export class Productos {

    constructor (
        public id?:string,
        public description?:string,
        public precio?: number,
        public img?: string,
        public tipo?: string,
        public menu?: []
        ) {}

}