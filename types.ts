declare global {
  interface User {
    id: string;
    created_at: number;
  }

  interface Options {
    name: string;
  }

  interface Player {
    id: string;
    name: string;
  }

  interface Score {
    20: number;
    19: number;
    15: number;
    18: number;
    17: number;
    16: number;
    25: number;
    total: number;
  }

  interface ScoreEvent {
    user_id: string;
    hit_value: number;
  }

  interface GameLessID {
    creator_id: string;
    join_id: string;
    players: Array<Player>;
    score_events: Array<ScoreEvent>;
  }

  interface Game extends GameLessID {
    id: string;
  }

  interface Error {
    message: string;
  }
}

// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};
