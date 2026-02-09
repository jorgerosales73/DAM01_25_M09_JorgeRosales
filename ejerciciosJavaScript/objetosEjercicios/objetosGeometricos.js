class FiguraGeometrica{
    nombre;
    constructor(nombre){
        this.nombre=nombre
    }
    calcularArea(){}
}
class Rectangulo extends FiguraGeometrica{
    base;
    altura;
    constructor(nombre, base, altura){
        super(nombre)
        this.base=base
        this.altura=altura
    }
    calcularArea(){
        return this.base*this.altura
    }
}
class Triangulo extends FiguraGeometrica{
    base;
    altuera;
    constructor(nombre, base, altura){
        super(nombre)
        this.base=base
        this.altura=altura
    }
    calcularArea(){
        return (this.base*this.altura)/2
    }
}
class Circulo extends FiguraGeometrica{
    radio;
    constructor(nombre, radio){
        super(nombre)
        this.radio=radio
    }
    calcularArea(){
        return Math.PI*this.radio**2
    }
}
let rectangulo1=new Rectangulo("campo", 5, 3)
rectangulo1.calcularArea()
console.log(rectangulo1.calcularArea())
let triangulo1=new Triangulo("triangulo", 4, 6)
triangulo1.calcularArea()
console.log(triangulo1.calcularArea())
let circulo1=new Circulo("circulo", 2)
circulo1.calcularArea()
console.log(circulo1.calcularArea())
