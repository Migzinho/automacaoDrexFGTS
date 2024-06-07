# Testes automatizados para Blog do Agi - Com Cypress

## Descrição
Este projeto contém a automação de testes para dois cenários relevantes encontrados no Blog do Agi.

## Cenários Automatizados
1. Testes de Transferências Interbancárias via Drex.
2. Automação do Processo de Gerenciamento do FGTS Digital.

# Pre-requisitos:
- git (https://github.com/)
- Node.js (https://nodejs.org/en/download)
- npm (https://www.npmjs.com/package/download)
- Google Chorme (https://www.google.com/intl/pt-BR/chrome/)
- Visual Studio Code (https://code.visualstudio.com/download)

# Dependências:

### Github:

1. Baixe o Github:
   - Acesse o site oficial do Git em https://desktop.github.com/.
   - Na página inicial, clique no botão de download para o seu sistema operacional.
   - O download começará automaticamente.

2. Instale o Github:
   - Após o download, execute o instalador.
   - Siga as instruções de instalação padrão para o seu sistema operacional.
   - Durante a instalação, você pode optar por aceitar as configurações padrão ou personalizá-las de acordo com suas preferências.

3. Verifique a instalação:
   - Após a instalação, abra o terminal (ou prompt de comando no Windows).
   - Digite o seguinte comando para verificar se o Git foi instalado corretamente:
      git --version
   - Se a versão do Git for exibida, a instalação foi bem-sucedida.

### Node.js e npm:
1. Baixe o Node.js:

   - Acesse o site oficial do Node.js em https://nodejs.org/.
   - Na página inicial, clique na versão recomendada para baixar.
   - Siga as instruções de instalação para o seu sistema operacional.
     *Observação, o npm, já estara no Node.js*

2. Verifique a instalação:

   - Após a instalação, abra o terminal (ou prompt de comando no Windows).
   - Digite os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:
      node -v
      npm -v
   - Se as versões do Node.js e do npm forem exibidas, a instalação foi bem-sucedida.

### Google Chrome:
1. Baixe o Google Chrome:

   - Acesse o site oficial do Google Chrome em https://www.google.com/intl/pt-BR/chrome/.
   - Clique no botão "Download Chrome".
   - Siga as instruções para baixar e instalar o navegador.

2. Verifique a instalação:

   - Após a instalação, abra o Google Chrome para garantir que foi instalado corretamente.
   
### Visual Studio Code (VSCode):

1. Baixe o Visual Studio Code:

   - Acesse o site oficial do VSCode em https://code.visualstudio.com/download/.
   - Clique no botão "Download for [sistema operacional]".

2. Instale o VSCode:

   - Após o download, execute o instalador.
   - Siga as instruções de instalação padrão para o seu sistema operacional.

3. Instale a extensão Node.js para o VSCode:

   - Abra o VSCode.
   - Na barra lateral esquerda, clique no ícone de extensões (quatro quadrados).
   - Pesquise por "Node.js" na barra de pesquisa de extensões.
   - Clique em "Install" para instalar a extensão.

4. Verifique a instalação:

   - Após a instalação, abra o VSCode.
   - Crie um novo arquivo JavaScript e comece a digitar para garantir que o VSCode esteja funcionando corretamente.
   

## Configuração do Projeto
Para configurar o ambiente de testes, siga os passos abaixo:

1. No VSCode clique em Terminal > New Terminal

2. Clone o repositório:
    
	No Terminal digite	
    git clone https://github.com/Migzinho/automacaoDrexFGTS.git
    
2. Navegue até o diretório do projeto:
    
    cd automacaoDrexFGTS
    
3. Instale as dependências:
    
    npm install
    
## Execução dos Testes
Para executar os testes, use o comando abaixo:

npx cypress open
