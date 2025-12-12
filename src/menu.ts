import readlinesync = require('readline-sync');

export function main() {

    let opcao: number;

    while (true) {

        console.log(`**************************************************`)
        console.log(`                                                  `)
        console.log(`        BEM VINDO AO SISTEMA DE GERENCIAMENTO     `)
        console.log(`                   OTICA LOHAN                    `)
        console.log(`                                                  `)
        console.log(`**************************************************`)
        console.log(`                                                  `)
        console.log(`         1 - Cadastrar Produto                    `)
        console.log(`         2 - Listar todos os Produtos             `)
        console.log(`         3 - Buscar Produto por ID                `)
        console.log(`         4 - Atualizar Dados do Produto           `)
        console.log(`         5 - Apagar Produto                       `)
        console.log(`         9 - Sair                                 `)
        console.log(`                                                  `)
        console.log(`**************************************************`)
        console.log(`                                                  `)

        console.log(`Entre com a opção desejada: `);
        opcao = readlinesync.questionInt(``);

        if (opcao === 9) {
            console.log(`LOHAN - PARA VOCE SORRIR COM OS OLHOS`);
            console.log(`Programa finalizado.`);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(`Cadastrar Produto`);
                
                keyPress();
                break;
            case 2:
                console.log(`Listar todos os Produtos`);
                
                keyPress()
                break;
            case 3:
                console.log(`Buscar Produto por ID`);

                keyPress()
                break;
            case 4:
                console.log(`Atualizar Dados do Produto`);

                keyPress()
                break;
            case 5:
                console.log(`Apagar Produto`);
                
                keyPress()
                break;
            default:
                console.log(`Opção Inválida! Tente novamente.`);

                keyPress()
                break;
        }
    }

    
}

export function sobre(): void {
    console.log(`**************************************************`)
    console.log(`                                                  `)
    console.log(`               Desenvolvido por:                  `)
    console.log(`              Cesar Henrique - 2025               `)
    console.log(`         https://github.com/cesarhennrique        `)
    console.log(`                                                  `)
    console.log(`**************************************************`)
    }

    function keyPress(): void {
        console.log(`Pressione ENTER para continuar...`);
        readlinesync.question(``);
    }

main();