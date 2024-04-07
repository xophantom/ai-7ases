# Seguradora IA

## Descrição
Este projeto implementa uma solução de processamento de linguagem natural (NLP) para análise de documentos relacionados a seguros. Utilizando técnicas avançadas de machine learning e NLP, a aplicação extrai, processa e armazena informações cruciais de documentos de seguros, facilitando a recuperação de dados e a análise de textos. A aplicação emprega embeddings do modelo da OpenAi para representações vetoriais de textos, permitindo buscas semânticas e análises profundas dos documentos processados.

## Funcionalidades
Carregamento de Documentos: Importa documentos JSON de um diretório especificado, contendo informações de transcrições relacionadas a seguros.

Processamento de Texto: Divide os textos dos documentos em tokens e processa-os utilizando o modelo OpenAI para gerar embeddings vetoriais.

Armazenamento de Dados: Armazena os embeddings gerados em um banco de dados Redis, permitindo recuperação eficiente e análise posterior.

Análise Semântica: Facilita a realização de buscas semânticas e análises baseadas no conteúdo textual dos documentos processados.

## Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript do lado do servidor.
LangChain: Biblioteca para processamento de documentos e geração de embeddings.
OpenAI Embeddings: Modelo de machine learning para geração de representações vetoriais de textos.
Redis: Banco de dados em memória para armazenamento de embeddings e recuperação rápida de dados.

a aplicação irá processar os documentos JSON no diretório especificado, gerar embeddings para os textos contidos e armazenar esses embeddings no Redis. Os dados armazenados podem ser utilizados para buscas semânticas e análises diversas, dependendo das necessidades específicas relacionadas a seguros.