export class Produto {

    private _id: number;
    private _nome: string;
    private _valor: number;
    private _quantidade: number;

    constructor(id: number, nome: string, valor:number, quantidade: number) {
        this._id = id;
        this._nome = nome;
        this._valor = valor;
        this._quantidade = quantidade;

    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get valor(): number {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }


    public visualizar(): void {
        console.log(`----------------------------------------`);
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
        console.log(`Quantidade em Estoque: ${this.quantidade}`);
        console.log(`-----------------------------------------`);

    }
 

}