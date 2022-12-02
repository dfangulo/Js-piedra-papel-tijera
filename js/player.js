class Player{
    constructor(jugador){
       this.name = jugador;
       this.objeto = this.getObjeto();
    }

    getObjeto()
     {
        const objetos = ['piedra', 'papel', 'tijeras'];
        const index = Math.floor(Math.random() * 3);
        return objetos[index];
    }
    objeto()
    {
        return this.objeto();
    }
    getName()
    {
        return this.name;
    }
}
