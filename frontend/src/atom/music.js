<<<<<<< HEAD
import { atom, selector} from 'recoil'

export const nowPlaying = atom({
  key: 'nowPlaying',
  default: [],
})

export const nowPlayingMusic = selector({
  key: 'nowPlayingMusic',
  get: ({ get }) => {
    const music = get(nowPlaying).map((item, i) => {
      return {
        ...item,
        isPlaying: false,
      }
    })
  }
})
=======
import { atom, selector } from 'recoil'

import localStorageEffect from './_local'

export const _now = atom({
  key: '_now_playing',
  default: null,
  effects: [
    localStorageEffect('_now')
  ]
})

export const _nowMusic = atom({
  key: '_nowMusic',
  default: {
    coverImage: '',
    musicName: '',
    musicianName: '',
    playing: false,
  },
})

export const playlistQueue = atom({
  key: 'Queue',
  default: [],
  effects: [
    localStorageEffect('_queue')
  ]
})

export const _nowSelector = selector({
  key: '_nowSelector',
  get: ({ get }) => {
    const getNow = get(playlistQueue)
    const nowMusic = getNow.filter((item) => item.playing)
    // const nowMusic = playlist.filter((item) => item.playing)
    // const { coverImage, musicName, musicianName, musicUrl } = nowMusic[0]
    
    return {
      getNow,
      nowMusic, 
      // coverImage,
      // musicName,
      // musicianName,
      // musicUrl
    }
  },
  set: ({ set }, newValue) => {
    set(playlistQueue, newValue)
    set(playlistQueue, newValue)
  },
  effects: [
    localStorageEffect('_test', _now)
  ]
})


>>>>>>> 364f8e73f2168502381fde9103d8f73d0fb3af35
