import {reactive} from 'vue';

export const store = reactive ( {

  apiURL: 'https://rickandmortyapi.com/api/character',
  cardArray: [],

  // per la ricerca dei nomi
  queryParams: {
    name: '',
  },
})
  
  