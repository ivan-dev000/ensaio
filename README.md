# Ensaiar — primeira versão

Aplicação web responsiva para organizar repertório, prática musical, acordes e ideias. O GuitarFlux foi usado como referência funcional a partir de sua página pública. O painel autenticado não foi acessado, portanto esta versão não pretende reproduzir seu layout exato.

## Funcionalidades

- Painel com indicadores calculados a partir dos registros locais.
- Cadastro e busca de músicas, filtro por status, edição de notas e status.
- Metrônomo audível de 30 a 240 BPM, compasso, subdivisão e tap tempo.
- Rotina de estudo com checklist, cronômetro e registro de sessões.
- Oito diagramas de acordes em afinação padrão com áudio sintetizado.
- Caderno de ideias com conversão em música do repertório.

## Limites desta entrega

Dados ficam no localStorage do navegador. Não há contas, sincronização entre dispositivos, player de Guitar Pro, separação de faixas, gravação, IA ou aplicativo nativo. Três músicas iniciais são exemplos originais para demonstrar a organização. O metrônomo usa temporizador do navegador; prática em segundo plano pode sofrer interrupções. As fontes externas são opcionais: há fontes de sistema como fallback.

## Estrutura

Site estático sem dependências: dist/index.html, dist/style.css e dist/app.js. Publicação pelo manifesto .openai/hosting.json.

## Próximos passos

Validar o painel com o usuário; definir nome oficial, instrumentos e prioridades. Acrescentar contas e sincronização antes de recursos de áudio avançados. Solicitar capturas do painel de referência para uma reprodução visual fiel.

## Versão 2 — áudio e tablaturas

Importação MP3/WAV/M4A até 25 MB e 8 minutos, armazenamento IndexedDB, áudio por trechos fixos de 15 segundos, velocidade 50/75/100%, Basic Pitch no Web Worker para detecção de notas, seleção de melodia para tab e partitura, exportação MusicXML e texto. Leitor alphaTab para Guitar Pro e MusicXML. Whisper tiny quantizado via Transformers.js para letra em português, com timestamps e edição por trecho. O áudio não é enviado a serviço externo; o modelo Whisper é baixado de Hugging Face no primeiro uso.

Transcrição é experimental; não separa os instrumentos de uma mixagem, não identifica versos/refrões e usa BPM manual / 4 por 4 para quantização. Digitação de tab é estimada pela menor casa disponível. A partitura não representa fielmente polifonia, ligações ou ritmo complexo.

Conferência de todos os módulos em “Todos os recursos”, com estados explícitos. Testes de inferência musical com áudio sintético, importação de MusicXML e rotas/dados. Não houve validação visual nem ensaio com MP3 real, canto ou voz no navegador. Separação de faixas, estúdio multitrack, timbres com IA e sincronização continuam pendentes.

Dependências do navegador instaladas com npm_config_ignore_scripts=true: evita baixar binários ONNX nativos, que não são utilizados por este Site estático. Reproduzir: npm_config_ignore_scripts=true node <sites-plugin>/scripts/install-dependencies.mjs; node build.mjs.

## Identidade aprovada — versão 3

Nome oficial: **ënsaio**, em letras minúsculas e trema no ë. Paleta preta e branca, com cinzas neutros para superfícies e texto auxiliar. Logo aprovada aplicada na navegação e no painel, preservando a imagem fornecida sem edição. Superfície neutra por trás da logo mantém as bolinhas pretas visíveis. Registros anteriores preservam as mesmas chaves de armazenamento. URL original mantida.
