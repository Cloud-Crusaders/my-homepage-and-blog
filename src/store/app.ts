// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //,
    currentTrack: {
      name: 'None',
      artist: 'None',
      album: 'None',

      links: [

      ]
    },

  }),
  getters: {
    currentTrack: (state) => state.currentTrack,export const useAppStore = defineStore('app', {
      state: () => ({
        //,
        currentTrack: {
          name: 'None',
          artist: 'None',
          album: 'None',
          links: [
            ''
          ]
        },

      }),
      getters: {
        currentTrack: (state) => state.currentTrack,
      },
      actions: {},
    })

  },
  actions: {},
  mutations: {},
})
><
