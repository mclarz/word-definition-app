import axios from "axios"

let actions = {

    addSearch({commit}, search) {

        axios.post('/api/save_search', search)
            .then(res => {
                commit('ADD_SEARCH',search)
            }).catch(err => {
                console.log('Error Found: ' + err)
            })
    },

    fetchSearchHistory({commit}) {
        axios.get('/api/search_history')
            .then(response => {
                commit('SET_HISTORY',response.data)
            })
            .catch(err => {
                console.log(err)
            })
    },

    async getWordDefinition({commit}, search) {

        const options = {
            method: 'GET',
            url: process.env.MIX_WORDS_API_URL,
            params: {term: search.search_key},
            headers: {
              'x-rapidapi-host': process.env.MIX_WORDS_API_HOST,
              'x-rapidapi-key': process.env.MIX_WORDS_API_KEY
            }
          };
          
        await axios.request(options).then(function (response) {
            commit('FETCH_WORD_DEFINITION_API', response)
        }).catch(function (error) {
            console.error(error);
        });
    }

}

export default actions;