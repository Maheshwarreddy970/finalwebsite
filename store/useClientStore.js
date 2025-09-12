import { create } from 'zustand';

export const useClientStore = create((set) => ({
  clientInfo: null,
  setClientInfo: (info) => set({ clientInfo: info }),
}));
