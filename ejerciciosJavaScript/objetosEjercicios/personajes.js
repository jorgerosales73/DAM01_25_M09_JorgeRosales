class Personaje {
    nombre;
    nivel;
    puntosVida;
    constructor(nombre, nivel, puntosVida) {
        this.nombre = nombre
        this.nivel = nivel
        this.puntosVida = puntosVida
    }
    atacar() { }

}
class Guerrero extends Personaje {
    arma;
    nivelFuerza;
    constructor(nombre, nivel, puntosVida, arma, nivelFuerza) {
        super(nombre, nivel, puntosVida)
        this.arma = arma
        this.nivelFuerza = nivelFuerza
    }
    atacarArma() {
        console.log(`${this.nombre} ataca con su ${this.arma}`)
    }
}
class Hechizero extends Personaje {
    poderMaldito;
    constructor(nombre, nivel, puntosVida, poderMaldito) {
        super(nombre, nivel, puntosVida)
        this.poderMaldito = poderMaldito
    }
    lanzarTecnicaRitual() { }
    toString() {
        return `Nombre: ${this.nombre}, Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosVida}, Poder Maldito: ${this.poderMaldito}`
    }
}
//let togiFushiguro = new Guerrero("Togi Fushiguro", 10, 500, "Espada", 200)
//let satoruGojo = new Hechizero("Satoru Gojo", 20, 1000, "Poder Infinito")
//let megumiFushiguro = new Hechizero("Megumi Fushiguro", 15, 700, "Shikigami")
//let makiZenin = new Guerrero("Maki Zenin", 12, 800, "Lanza", 150)
//let yutaOkkotsu = new Hechizero("Yuta Okkotsu", 18, 800, "Poder de Rika")
//let yujiItadori = new Hechizero("Yuji Itadori", 14, 650, "Puños")
//let subaruMegumi = new Hechizero("Subaru Megumi", 16, 750, "Shikigami Mejorados")
const personajes = [
    new Guerrero("Togi Fushiguro", 10, 500, "Espada", 200),
    new Hechizero("Satoru Gojo", 20, 1000, "Poder Infinito"),
    new Hechizero("Megumi Fushiguro", 15, 700, "Shikigami"),
    new Guerrero("Maki Zenin", 12, 800, "Lanza", 150),
    new Hechizero("Yuta Okkotsu", 18, 800, "Poder de Rika"),
    new Hechizero("Yuji Itadori", 14, 650, "Puños"),
    new Hechizero("Subaru Megumi", 16, 750, "Shikigami Mejorados"),
    new Hechizero("Sukuna", 25, 1200, "Poder Maldito")
]
const personajesHechizeros = personajes.filter(p => p instanceof Hechizero)
const personajesGuerreros = personajes.filter(p => p instanceof Guerrero)
console.log(`Personajes Hechizeros:${personajesHechizeros.map(p => p.nombre).join(", ")}`)
console.log(`Personajes Guerreros:${personajesGuerreros.map(p => p.nombre).join(", ")}`)

//let personajes = [togiFushiguro, satoruGojo, megumiFushiguro, makiZenin, yutaOkkotsu, yujiItadori, subaruMegumi]
//console.log(personajes.sort((a, b) => a.nivel - b.nivel))