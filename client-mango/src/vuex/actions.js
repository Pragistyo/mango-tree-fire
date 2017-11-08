import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  start ({ commit }, user) {
    http.get('/start', {})
    .then(result => {
      console.log('hahahah' + JSON.stringify(result))
      commit('mangoGrow', result)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
