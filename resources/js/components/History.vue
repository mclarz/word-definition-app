 <template>

 <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
          <div class="card-header bg-info text-white">
              <h2>Search History</h2>
          </div>
          <div class="card-body">
              <table class="table">
                    <thead>
                    <tr>
                        <th scope="col" class="text-center">Keywords</th>
                        <th scope="col" class="text-center">Date Searched</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in histories.data" v-bind:key="data.id">
                            <td class="text-center">{{data.search_key}}</td>
                            <td class="text-center">{{ moment(data.created_at).format('MMMM Do YYYY, h:mm:ss a')}}</td>
                        </tr>
                    </tbody>
                </table>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import moment from 'moment';
    export default {
        name: "History",
        mounted() {
            this.$store.dispatch('fetchSearchHistory')
        },
         methods:{
            moment(arg) {
                return moment(arg);
            }  
        },
        computed: {
            ...mapGetters([
                'histories'
            ])
        }
    }
</script>

<style scoped>

</style>