import axios from 'axios'

const http = axios.create({
  // baseURL: 'http://ec2-52-40-130-216.us-west-2.compute.amazonaws.com:3000'
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
