class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'um ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
const heroi1 = new Heroi("Gandalf", 100, "mago");
heroi1.atacar(); // o mago atacou usando magia

const heroi2 = new Heroi("Naruto", 17, "ninja");
heroi2.atacar(); // o ninja atacou usando shuriken
