# Pokedex API 
Este projeto é uma Pokédex desenvolvida com base no curso da DIO.me.
Seu objetivo é exibir uma lista de Pokémons e Tipos de Pokemons obtidos de uma API, permitindo que o usuário:
- Visualize informações detalhadas de cada Pokémon ao clicar nele
- Utilize um campo de busca para filtrar a lista pelo nome do Pokémon
- Visualize informações detalhadas de cada Tipo de Pokémon ao clicar nele

## 📌 Tecnologias utilizadas
- [Ionic Framework](https://ionicframework.com/) com Angular 13
- Consumo de API com **HttpClient**
- **Pipe** customizado para filtrar dados
- **Service** dedicado para chamadas à API

## 🔍 Funcionalidades principais
- Consulta de dados a partir de uma API externa
- Filtragem dinâmica dos dados recebidos
- Apresentação dos resultados para o usuário em interface responsiva

## 🛠 Estrutura do projeto
- `src/app/services/` → contém o service para comunicação com a API
- `src/app/pipes/` → contém o pipe para filtragem dos dados
- `src/app/pages/` → telas e componentes de interface

## 🚀 Como executar o projeto
1. Instalar o NodeJS (https://nodejs.org/en/download/) 
2. Instalar o CLI do Ionic
```
npm install -g @ionic/cli
```

Após clonar o projeto, rodar na pasta:
```
npm install
```

Para rodar o app no seu navegador:
```
ionic serve
```

# Preview
<img width="208" height="320" alt="image" src="https://github.com/user-attachments/assets/a8af8817-840e-4a54-b700-1b935463cc44" />
<img width="208" height="320" alt="image" src="https://github.com/user-attachments/assets/3497dfb3-e6ed-4806-9ee5-adaa5c0789f1" />
<img width="208" height="320" alt="image" src="https://github.com/user-attachments/assets/f71a2d47-63fd-4854-92c7-36d9eea26355" />
<img width="208" height="320" alt="image" src="https://github.com/user-attachments/assets/5cfced4a-63e8-4a3c-a22e-e401ac74515b" />
