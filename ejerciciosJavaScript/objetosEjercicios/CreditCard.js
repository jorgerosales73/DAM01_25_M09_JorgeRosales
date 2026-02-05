class TarjetaCredito{
    //Propiedades
    nombreTitular;
    numeroTarjeta;
    fechaVencimiento;
    #CVV;
    cantidadCredito
    constructor(nombreTitular, numeroTrajeta, fechaVencimiento, CVV, cantidadCredito){
        this.nombreTitular=nombreTitular
        this.numeroTarjeta=numeroTrajeta
        this.fechaVencimiento=fechaVencimiento
        this.#CVV=CVV
        this.cantidadCredito=cantidadCredito
    }
    
    //Metodos
    retirarDinero(cantidad){
        if(cantidad>this.cantidadCredito){
            console.log("No tienes suficiente credito")
        }else{
            this.cantidadCredito-=cantidad
            console.log(`Has retirado ${cantidad} tu credito restante es de ${this.cantidadCredito}`)
        }       
    }
    pagarCompra(cantidadPago){
        if(cantidadPago>this.cantidadCredito){
            console.log("No tienes suficiente credito")
        }else{
            this.cantidadCredito-=cantidadPago
            console.log(`Has pagado ${cantidadPago} tu credito restante es de ${this.cantidadCredito}`)
        }       
    }
    pagarFactura(cantidadPago){
        if(cantidadPago>this.cantidadCredito){
            console.log("No tienes suficiente credito")
        }else{
            this.cantidadCredito-=cantidadPago
            console.log(`Has pagado ${cantidadPago} tu credito restante es de ${this.cantidadCredito}`)
        }       
    }

}
console.log("Ejercicio Tarjeta de Credito")
const tarjeta1=new TarjetaCredito("Juan Perez", "1234 5678 9012 3456", "12/25", "123", 5000)
console.log(tarjeta1)
tarjeta1.retirarDinero(1000)
tarjeta1.pagarCompra(2000)
tarjeta1.pagarFactura(1500)