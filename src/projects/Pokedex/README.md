# Pokedex
A responsive, interactive Pokédex web application built with React, TypeScript, and Tailwind CSS. The app uses the PokéAPI to fetch and display Pokémon data such as name, ID, type, height, weight, and sprite images. Users can either fetch a random Pokémon or search by name or ID through a tab-based interface.

## Features
- Fetch a random Pokémon (ID 1–1025)
- Search Pokémon by name or ID
- Tab-based UI (Random / Search)
- Real-time data fetched from PokéAPI
- Displays Pokémon sprite, ID, name, height, weight, and type(s)
- Input validation with basic error handling
- Responsive layout for mobile, tablet, and desktop

## Tech Stack
| Technology | Purpose |
|------------|---------|
| React | UI rendering and component structure |
| TypeScript | Static typing and type safety |
| Tailwind CSS | Styling and responsive layout |
| Fetch API | HTTP requests to external API |
| PokéAPI | Pokémon data source |

## How It Works
1. The user selects a tab:
   - **Random**: Fetches a randomly generated Pokémon ID.
   - **Search**: Fetches a Pokémon by name or ID entered by the user.
2. JavaScript triggers a `fetch()` request to the PokéAPI endpoint: 
   - https://pokeapi.co/api/v2/pokemon/{id or name}
3. The API response provides:
- Pokémon ID and name
- Height and weight (converted to meters and kilograms)
- One or more Pokémon types
- Front-facing sprite image
4. Data is formatted and rendered dynamically in the UI.
5. Invalid inputs (empty values or out-of-range IDs) trigger validation alerts.

## Screenshots
- [Random Tab](PokedexRandomTab.png)
- [Search Tab](PokedexSearchTab.png)

## How to Run
1. Navigate to the project directory:
```bash
cd src/projects/Pokedex
```
2. Install dependencies
`npm run dev`
3. Start the development server
`npm run dev`
4. Open the provided local url in your browser

## Future Improvements
- Display Pokémon stats (HP, Attack, Defense, etc.)
- Show evolution chains
- Add type-based filtering
- Improve error handling UI (custom error messages)
- Replace dangerouslySetInnerHTML with fully component-based rendering

## API Reference
This project uses the PokéAPI, a free RESTful API that provides comprehensive Pokémon data.