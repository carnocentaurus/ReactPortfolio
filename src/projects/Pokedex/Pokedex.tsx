// Pokedex.tsx

import { type FC, useState, type ChangeEvent } from "react";

interface PokemonType {
    type: {
        name: string;
    };
}

const Pokedex: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("random");
    const [randomPokemonSprite, setRandomPokemonSprite] = useState<string>("");
    const [randomPokemonInfo, setRandomPokemonInfo] = useState<string>("");

    const [searchPokemonNameOrId, setSearchPokemonNameOrId] = useState<string>("");
    const [searchPokemonSprite, setSearchPokemonSprite] = useState<string>("");
    const [searchPokemonInfo, setSearchPokemonInfo] = useState<string>("");


    function formatPokemonInfo(
        pokemonId: number,
        pokemonName: string,
        pokemonHeight: number,
        pokemonWeight: number,
        pokemonType: PokemonType[]
    ): string {
        pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

        // convert to meters and kg
        pokemonHeight = pokemonHeight / 10;
        pokemonWeight = pokemonWeight / 10;

        // map through each type and join them
        const formattedType: string = pokemonType.map(type => {
            const name: string = type.type.name;
            return name.charAt(0).toUpperCase() + name.slice(1);
        }).join("<br>");

        return `<p class="text-[#f4f4f4] text-[0.7rem] sm:text-base lg:text-[0.6rem]">#${pokemonId}</p>
        <p class="text-[orangered] text-base sm:text-2xl mb-3 sm:mb-5 lg:text-base lg:mb-3">${pokemonName}</p>
        <p class="text-[orangered] text-base sm:text-2xl lg:text-base">Height: ${pokemonHeight}M</p>
        <p class="text-[orangered] text-base sm:text-2xl mb-3 sm:mb-5 lg:text-base lg:mb-3">Weight: ${pokemonWeight}KG</p>
        <label class="text-[#f4f4f4] text-[0.7rem] sm:text-base lg:text-[0.7rem]">Type</label>
        <p class="text-[orangered] text-base sm:text-2xl mb-3 sm:mb-5 lg:text-base">${formattedType}</p>`;
    }


    async function fetchRandomPokemon(): Promise<void> {
        try {
            const min: number = 1;
            const max: number = 1025;

            const randomPokemonId: number = Math.floor(Math.random() * (max - min + 1)) + min;

            const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);

            if (!response.ok) {
                throw new Error();
            }

            const data: any = await response.json();

            const randomPokemonSprite: string = data.sprites.front_default;

            const randomPokemonData = {
                id: data.id,
                name: data.name,
                height: data.height,
                weight: data.weight,
                type: data.types
            }

            setRandomPokemonSprite(randomPokemonSprite);
            setRandomPokemonInfo(formatPokemonInfo(
                randomPokemonData.id,
                randomPokemonData.name,
                randomPokemonData.height,
                randomPokemonData.weight,
                randomPokemonData.type
            ));
        }
        catch (error) {
            alert(error);
        }
    }


    async function fetchPokemonByNameOrId(): Promise<void> {
        try {
            const nameOrId: string | number = searchPokemonNameOrId.toLowerCase();

            if (nameOrId.toString().trim() === "") {
                alert("Enter valid name or ID!");
                return;
            }
            if (Number(nameOrId) < 1) {
                alert("1 is the lowest Pokémon ID!");
                return;
            }
            if (Number(nameOrId) > 1025) {
                alert("1025 is the highest Pokémon ID!");
                return;
            }

            const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);

            if (!response.ok) {
                throw new Error();
            }

            const data: any = await response.json();

            const searchPokemonSprite: string = data.sprites.front_default;

            const searchPokemonData = {
                id: data.id,
                name: data.name,
                height: data.height,
                weight: data.weight,
                type: data.types,
            }

            setSearchPokemonSprite(searchPokemonSprite);
            setSearchPokemonInfo(formatPokemonInfo(
                searchPokemonData.id,
                searchPokemonData.name,
                searchPokemonData.height,
                searchPokemonData.weight,
                searchPokemonData.type,
            ));
        }
        catch (error) {
            alert(error);
        }
    }


    return(
        <main className="
            scrollbar-hide
            bg-[#333]
            border-2 sm:border-4 lg:border-2
            border-[orangered]
            rounded-2xl
            text-center
            mt-10 sm:mt-20 lg:mt-10
            py-5 sm:py-10 lg:py-5
            px-5
            w-70 sm:w-115 lg:w-80
            max-w-70 sm:max-w-115
            h-115
            max-h-120 sm:max-h-200 md:max-h-170 lg:max-h-115
            overflow-y-scroll
        ">
            <p className="
                font-righteous 
              text-[orangered] 
                text-lg sm:text-3xl lg:text-lg
                mb-5 sm:mb-10 lg:mb-5
            ">POKEDEX</p>

            <div className="
                flex 
                justify-evenly 
                font-poppins 
                gap-10 
                mb-5 sm:mb-10 md:mb-5
                text-base sm:text-2xl lg:text-base
            ">
                <p 
                    onClick={() => setActiveTab("random")}
                    className={`${activeTab === "random" ? "text-[orangered] font-bold" : "text-[#f4f4f4] font-bold"}`}
                >
                  Random
                </p>
                
                <p 
                    onClick={() => setActiveTab("search")}
                    className={`${activeTab === "search" ? "text-[orangered] font-bold" : "text-[#f4f4f4] font-bold"}`}
                >
                  Search
                </p>
            </div>


            <div className={`${activeTab === "random" ? "block" : "hidden"}`}>
              <img
                  className="mx-auto w-40 sm:w-60 lg:w-40"
                  src={randomPokemonSprite}
                  alt="Random Pokemon"
              />
              {/* renders html strings in react */}
              <div className="font-poppins" dangerouslySetInnerHTML={{ __html: randomPokemonInfo }} />

              <button 
                  onClick={fetchRandomPokemon}
                  className="
                    bg-[orangered] 
                    text-[#333] 
                      text-lg sm:text-2xl lg:text-base
                      font-poppins 
                      font-bold
                      rounded-full
                      py-1 sm:py-3 lg:py-1
                      px-5 sm:px-10
                      hover:opacity-90
                ">
                  Fetch
              </button>
            </div>


            <div className={`${activeTab === "search" ? "block" : "hidden"}`}>
                <div className="flex justify-center">
                    <input
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchPokemonNameOrId(event.target.value)}
                        value={searchPokemonNameOrId}
                        className="
                            font-poppins
                            text-sm sm:text-2xl lg:text-sm
                            text-[orangered]
                            border-2 sm:border-3 lg:border-2
                          border-[orangered]
                            w-37 sm:w-60 lg:w-40
                            py-[0.2rem] sm:py-2 lg:py-1
                            px-2 sm:px-3 lg:px-2
                            placeholder:text-sm sm:placeholder:text-2xl lg:placeholder:text-sm
                            placeholder:text-[orangered]
                        "
                        type="number"
                        placeholder="Enter Name or ID"
                    />
                    <button 
                        onClick={fetchPokemonByNameOrId}
                        className="
                          bg-[orangered] 
                          text-[#333] 
                            font-poppins 
                            text-base sm:text-2xl lg:text-sm
                            font-semibold
                            px-1 sm:px-3
                        "
                    >
                        Fetch
                    </button>
              </div>

                <img
                    className="mx-auto w-40 sm:w-60 mt-5 lg:w-40 sm:mt-10 lg:mt-5"
                    src={searchPokemonSprite}
                    alt="Pokemon"
                />
                {/* renders html strings in react */}
                <div className="font-poppins" dangerouslySetInnerHTML={{ __html: searchPokemonInfo }} />
            </div>


        </main>
    );
}


export default Pokedex;