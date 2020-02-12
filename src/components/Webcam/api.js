import axios from 'axios'
export const getresult = data => {

  return axios.post('http://localhost:5000/result', {
      file: data.file , graph: data.graph , label: data.label} )
      .then(response => {
            const result= response.data
            return result
      })
}

export const setdata = data => {

  return axios.post('http://localhost:5000/upload', data)
      .then(response => {
            const result= response.data
            console.log('saved')
            return result
      })
}
