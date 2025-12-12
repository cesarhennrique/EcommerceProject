import { Produto } from "../model/Produto";

export interface interfaceProdutoRepository {

    cadastar(produto: Produto): void;

    listar(): Produto[];

    buscarPorId(id: number): Produto | null;

    atualizar(produto: Produto): void;
    
    deletar(id: number): void;
}