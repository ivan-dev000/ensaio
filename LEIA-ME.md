# ënsaio — abrir no Visual Studio Code

1. Extraia este ZIP.
2. No VS Code, use Arquivo → Abrir Pasta e escolha ensaio-vscode.
3. Instale Node.js LTS se ainda não estiver instalado.
4. Abra Terminal → Novo Terminal e execute `npm start`.
5. Abra http://localhost:3000 no navegador. Não abra index.html diretamente.

O ZIP inclui código, logo aprovada, modelos musicais, dependências do navegador e arquivos já compilados. O primeiro comando não precisa instalar pacotes.

Para modificar o worker, recompilar e executar os testes:

```sh
npm ci --ignore-scripts
npm run build
npm test
npm start
```

## Arquivos para editar

- dist/index.html: estrutura da página.
- dist/style.css: identidade visual em preto, branco e cinza.
- dist/app.js: repertório, estudos, metrônomo e navegação.
- dist/audio.js: importação, trechos, tablatura e partitura.
- dist/resources.js: funcionalidades e seus estados.
- audio-worker.js: código fonte da transcrição.
- dist/assets/ensaio-logo-aprovada.png: logo aprovada.
- build.mjs: recompila worker e copia dependências.
- serve.mjs: servidor local.

## Estado da versão

Repertório e estudos são locais ao navegador. Áudios ficam em IndexedDB. Transcrição de notas e letras é experimental; notas usam Basic Pitch e letras usam Whisper, cujo modelo exige internet no primeiro uso. Não há separação de instrumentos ou transcrição fiel de toda a polifonia. A letra pode ser editada por trecho. Não foram feitos testes visuais completos nem validação de transcrição com uma música real. Este projeto ainda não foi enviado ao GitHub.

O arquivo README.md conserva o histórico do desenvolvimento; use este LEIA-ME para executar localmente.
