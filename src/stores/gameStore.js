import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
  const currentGame = ref({
    game: "Untitled",
    score: { home: 0, away: 0 },
    events: [],
    created: new Date().toISOString()
  });

  const resetGame = () => {
    currentGame.value = {
      game: "Untitled",
      score: { home: 0, away: 0 },
      events: [],
      created: new Date().toISOString()
    };
  };

  const addEvent = (event) => {
    currentGame.value.events.push(event);
  };

  return { currentGame, resetGame, addEvent };
});
