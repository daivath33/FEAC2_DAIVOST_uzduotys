import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  liked: string[];
  toggleLike: (id: string) => void;
  initializeLikes: () => void;
}

const useLikedBusinessesStore = create<StoreState>((set) => ({
  liked: [],
  toggleLike: (id: string) =>
    set((state) => {
      const updatedLikes = state.liked.includes(id)
        ? state.liked.filter((productId) => productId !== id)
        : [...state.liked, id];

      localStorage.setItem('likedBusinesses', JSON.stringify(updatedLikes));

      return { liked: updatedLikes };
    }),
  initializeLikes: () => {
    const storedLikes = localStorage.getItem('likedBusinesses');
    const initialLikes = storedLikes ? JSON.parse(storedLikes) : [];
    set({ liked: initialLikes });
  },
}));


//   const useLikedBusinessesStore =  create(
//   persist<State & Actions>(
//     (set) => ({
//     likedBusinesses: [],
//     toggleLike: (id: string) =>
//       set((state) => {
//         const updatedLikes = state.likedBusinesses.includes(id)
//           ? state.likedBusinesses.filter((businessId) => businessId !== id)
//           : [...state.likedBusinesses, id];

//         localStorage.setItem('likedBusinesses', JSON.stringify(updatedLikes));

//         return { likedBusinesses: updatedLikes };
//       }),
//       initializeLikes: () => {
//         const storedLikes = localStorage.getItem('liked');
//         const initialLikes = storedLikes ? JSON.parse(storedLikes) : [];
//         set({ likedBusinesses: initialLikes });
//       },
//   }), {
//     name: "likedBusinesses",
//   }
// ))

export default useLikedBusinessesStore;
