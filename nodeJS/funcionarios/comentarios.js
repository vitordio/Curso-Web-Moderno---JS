/*
    Além de descrever o projeto, um dos grandes objetivos do package.json é ter
    a descrição de todas as dependências que o projeto precisa.

    Para instalar uma dependencia e salvar ela no package.json basta fazer:
    ::::: npm i --save 'nomedadependencia'

    Para iniciar um projeto e já colocar a descrição e informações dele, basta executar,
    dentro da pasta do projeto, o comando:
    ::::: npm init

    Já o arquivo package-lock.json descreve de uma forma mais precisa exatamente a versão
    que foi baixa dos Módulos. Deve ir para o repositório.

    -----------------------------------

    Caso tenhamos excluído a pasta node_modules e tivermos o arquivo package.json que
    contém todas as dependencias do projeto, basta executar o comando "npm i" dentro da pasta no terminal.

    Quando definimos os scripts, uma forma de startar o projeto é executar o comando 'npm "nomeDoComando"',
    e dará um start no arquivo main do projeto ou no arquivo que vc definiu no script.

    Para executar um comando que não é padrão do NODE, como o 'dev' que definimos no package, basta digitar
    o comando: npm run dev

    Para verificar alguns scripts pré definidos do node, acessar: https://docs.npmjs.com/misc/scripts
    
*/