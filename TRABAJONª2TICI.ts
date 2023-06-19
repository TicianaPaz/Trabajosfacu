//eje 1//


class auto {
    marca: string;
    modelo: string;
    potencia: number;
    vel_max: number;

    constructor(marca:string, modelo:string, potencia: number, vel_max:number){
        this.marca= marca
        this.modelo= modelo
        this.potencia= potencia
        this. vel_max= vel_max }

    imprimir()
    { console.log(`El vehiculo ${this.marca} modelo ${this.modelo} con una potencia de ${this.potencia} y con una velocidad maxima de ${this.vel_max}]`)}

    calcular_tiempo(distance:number){
        
        let vel: number = this.vel_max
        let tiempo: number = distance / vel
        let x :number = Math.trunc(tiempo)
        let y :number = Math.trunc(60 *(tiempo - Math.trunc(tiempo)))
        console.log(`Tardardará en recorrer ${distance}: ${x} horas ${y} minutos`)}
      
    }

let auto1: auto= new auto("Fiat","Cronos",450,190)
auto1.imprimir()
auto1.calcular_tiempo(200)
let auto2: auto=new auto("Volkswagen","Gol Trend",347,150) 
auto2.imprimir()
auto2.calcular_tiempo(200)
let auto3: auto=new auto("Renault","Logan",130,180)
auto3.imprimir()
auto3.calcular_tiempo(200)
let auto4:auto=new auto("Peugeot","308",300,210)
auto4.imprimir()
auto4.calcular_tiempo(200)
let auto5:auto=new auto("Audi","R8",500,350)
auto5.imprimir()
auto5.calcular_tiempo(200)


//eje2//

class escuela{
    nombrecurso: string
     constructor(nombrecurso:string){
        this.nombrecurso = this.nombrecurso }

    imprimir(){
        console.log(this.nombrecurso)}
}
class alumno extends escuela{
    alumn_name: string

    constructor(nombrecurso:string,alumn_name:string){
        super(nombrecurso)
        this.alumn_name=alumn_name}

    imprimir(){
        console.log(this.alumn_name,this.nombrecurso)}
}

let curso_1:escuela= new escuela("Derecho")
let curso_2:escuela=new escuela("Biologia")
let alumno1:alumno=new alumno("Biologia","Tina")
let alumno2:alumno=new alumno("Biologia","Mateo")
let alumno3:alumno=new alumno("Derecho","Lionel")
let alumno4:alumno=new alumno("Derecho","Kiara")
alumno1.imprimir()
alumno2.imprimir()
alumno3.imprimir()
alumno4.imprimir()


//eje 3//


class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;}

    public asignarFondos(monto: number): void {
        this.saldo += monto;}

    public retirarFondos(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;}
        else {
            console.log("No hay suficientes fondos disponibles.");}}

    public obtenerSaldo(): number {
        return this.saldo;}

}

const cuenta = new CuentaBancaria(69500);
console.log("Saldo inicial es de:", cuenta.obtenerSaldo());

cuenta.asignarFondos(5600);
console.log("Saldo actual después de asignar fondos es de:", cuenta.obtenerSaldo());

cuenta.retirarFondos(5000);
console.log("Saldo actual después de retirar fondos es de:", cuenta.obtenerSaldo()); 

cuenta.retirarFondos(2000); 
console.log("Saldo final es de:", cuenta.obtenerSaldo());

