/** Store module to handle TMDb config **/

import Vue from 'vue'

export default {
  namespaced: true,
  // ----------------------------------------------------------------------------------
  state: {
    images: {}
  },
  // ----------------------------------------------------------------------------------
  getters: {
    images: state => state.images
  },
  // ----------------------------------------------------------------------------------
  mutations: {
    setImages: (state, data) => {
      Vue.set(state, 'images', data)
    }
  },
  // ----------------------------------------------------------------------------------
  actions: {
    /** Search for a movies collection matching a string  **/
    get: (context) => {
      const params = { api_key: process.env.VUE_APP_API_KEY }
      // don't forget that an action should return a promise.
      console.log(Vue)
      return Vue.prototype.$axios.get('https://api.themoviedb.org/3/configuration', { params })
        .then(response => {
          console.log(response)
          context.commit('setImages', response.images)
          return Promise.resolve(context.state.movies)
        })
        .catch(error => {
          // in case of error, empties the movies collection
          context.commit('setImages', {})
          return Promise.reject(error)
        })
    }
  }
}
