export class Product{

    id:number | 0;
    folio:string | "";
    descripcion:string | "";
    costo:number | 0;
    cantidad:number| 1;
    

    constructor(id:number,folio:string,descripcion:string,precio:number,cantidad:number){
        this.id = id;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.folio = folio;
        this.costo = precio;
    }

    setCantidad(cantidad:number){
        this.cantidad = cantidad;
    }
    getCantidad(){
        console.log(this.folio,this.cantidad);
        return this.cantidad;
    }

}