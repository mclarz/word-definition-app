<template>
    <div class="row">
       <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    <h4 class="font-weight-bold">Find Definition</h4>
                </div>
                <div class="card-body">
                    <form action="" @submit="addSearch(search)">
                        <div class="form-group">
                            <input type="text" placeholder="" v-model="search.search_key" class="form-control">
                        </div>
                        <div class="form-group">
                            <button :disabled="!isValid" class="btn btn-block btn-primary" @click.prevent="addSearch(search)">Find
                            </button>
                        </div>
                    </form>
                </div>
            </div>
       </div>
       <div class="col-md-7">
           <div v-if="results.list">
                <div class="card">
                    <div class="card-header">
                        <h4 class="text-center font-weight-bold">Results</h4>
                    </div>
                    <div class="card-body">
                        
                            <div v-for="(result,idx) in results.list" v-bind:key="idx">
                                <div id="accordion">
                                    <div class="card">
                                        <div class="card-header" v-bind:id="'headingOne' + idx">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" v-bind:data-target="'#collapseOne' + idx" aria-expanded="true" v-bind:aria-controls="'#collapseOne' + idx">
                                            Definition # {{ (idx+1) }}
                                            </button>
                                        </h5>
                                        </div>
                                        <div v-bind:id="'#collapseOne' + idx" class="collapse show" v-bind:aria-labelledby="'headingOne' + idx" data-parent="#accordion">
                                        <div class="card-body">
                                            {{result.definition}}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

    export default {
        name: "Search",
        data() {
            return {
                search: {
                    search_key : '',
                },
            }
        },
        methods: {
            addSearch(search) {
                this.$store.dispatch('addSearch', search)
                this.$store.dispatch('getWordDefinition',search)
            }
        },
        computed: {
             ...mapGetters([
                'results'
            ]),
            isValid() {
                return this.search.search_key != ""
            }
            
        }
    }
</script>

<style scoped>

</style>