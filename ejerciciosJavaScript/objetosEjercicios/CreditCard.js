class TarjetaCredito{
    //Propiedades
    nombreTitular;
    numeroTarjeta;
    fechaVencimiento;
    #CVV;
    cantidadCredito
    #_tarjetaActiva
    constructor(nombreTitular, numeroTarjeta, fechaVencimiento, CVV, cantidadCredito, tarjetaActiva){
        this.nombreTitular=nombreTitular
        this.numeroTarjeta=numeroTarjeta
        this.fechaVencimiento=fechaVencimiento
        this.#CVV=CVV
        this.cantidadCredito=cantidadCredito
        this.#_tarjetaActiva=tarjetaActiva

    }
    
    //Metodos
    retirarDinero(cantidad){
        if(cantidad>this.cantidadCredito){
            console.log("No tienes suficiente credito")
        }else{
            this.cantidadCredito-=cantidad
            console.log(`Has retirado ${cantidad} te quedan ${this.cantidadCredito}`)
        }       
    }
    pagarCompra(cantidadPago){
        if(cantidadPago>this.cantidadCredito){
            console.log("No tienes suficiente credito")
        }else{
            this.cantidadCredito-=cantidadPago
            console.log(`Has pagado ${cantidadPago} te quedan ${this.cantidadCredito}`)
        }       
    }
    pagarFactura(cantidadPago){
        if(cantidadPago>this.cantidadCredito){
            console.log("No tienes suficiente credito")
        }else{
            this.cantidadCredito-=cantidadPago
            console.log(`Has pagado ${cantidadPago} te quedan ${this.cantidadCredito}`)
        }       
    }

}
console.log("Ejercicio Tarjeta de Credito")
const tarjeta1=new TarjetaCredito("Juan Perez", "1234 5678 9012 3456", "12/25", "123", 5000)
console.log(tarjeta1)
tarjeta1.retirarDinero(1000)
tarjeta1.pagarCompra(2000)
tarjeta1.pagarFactura(1500)
let tarjeta2=new TarjetaCredito("Maria Lopez", "9876 5432 1098 7654", "11/24", "456", 3000)
console.log(tarjeta2)
tarjeta2.retirarDinero(500)
tarjeta2.pagarCompra(1000)
tarjeta2.pagarFactura(2000)