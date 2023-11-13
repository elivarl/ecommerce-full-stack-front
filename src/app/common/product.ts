export class Product {
    constructor(
        public id:number,
        public name:string,
        public code:string,
        public description:string,
        public price:number,
        public urlImage:string,
        public image:File,
        public userId:string,
        public categoryId:string
    ){}
}
