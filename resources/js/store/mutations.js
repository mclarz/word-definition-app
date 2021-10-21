let mutations = {

    ADD_SEARCH(state, search) {
        return state.search.unshift(search)
    },

    FETCH_WORD_DEFINITION_API(state, results) {
        console.log("histories: ", results.data)
        return state.results = results.data
    },

    SET_HISTORY(state, histories) {
        return state.histories = histories
    }
}

export default mutations;