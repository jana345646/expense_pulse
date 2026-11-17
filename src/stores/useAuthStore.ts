// this is a function that will create the store

import { create } from "zustand";

// this is a function that will store the states in the local storage

import { persist } from "zustand/middleware";

// this is an interface for the data of each user
// we didin't store the password as it is not secure to be stored in the local storage and ww will not use it again after the login process

interface User {
  email: string;
  name?: string;
}

// this is an interface to the store

// void means that the function will not return a value it will do a task only

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// create returns a hook that we can use to reach data from store

//() to call the function create after we send to it the type of the store , the second () to send to the create function the parameter (store)

// we create the store inside the persist to be stored in the local storage

// persist takes 2 parameters the function that we will use to change in the states (that take the set as a parameter) , and an object with informations about the persist process

// set returns the object that contains the data of the store

// name: this is the name of the key in the locat storage that will save this data under it

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (userData) => set({ user: userData, isAuthenticated: true }),

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "Authentication Data",
    },
  ),
);
