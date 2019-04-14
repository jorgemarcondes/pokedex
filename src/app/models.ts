export interface AbilityInfo {
  name: string;
  url: string;
}

export interface Ability {
  ability: AbilityInfo;
  is_hidden: boolean;
  slot: number;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface StatInfo {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: StatInfo;
}

export interface TypeInfo {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: TypeInfo;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}



