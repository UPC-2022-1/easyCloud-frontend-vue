// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Home',
      icon: 'mdi-home-outline',
      to: '/home',
    },
    {
      title: 'Quotes',
      icon: 'mdi-text-box-plus-outline',
      to: '/quotes',
    },
    {
      title: 'Scalability',
      icon: 'mdi-chart-line',
      to: '/scalability',
    },
    {
      title: 'My Quotes',
      icon: 'mdi-clipboard-text-outline',
      to: '/myquotes',
    },
    {
      title: 'My Account',
      icon: 'mdi-account-outline',
      to: '/profile',
    },
    {
      title: 'Upgrade',
      icon: 'mdi-package-up',
      to: '/upgrade',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
