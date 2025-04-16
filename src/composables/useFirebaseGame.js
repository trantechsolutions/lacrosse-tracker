import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const useFirebaseGame = () => {
  const saveGame = async (gameData) => {
    try {
      const docRef = await addDoc(collection(db, "games"), gameData);
      console.log("Game saved with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Failed to save game:", error);
      throw error;
    }
  };

  return { saveGame };
};
