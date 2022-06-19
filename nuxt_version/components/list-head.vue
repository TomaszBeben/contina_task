<template>
  <v-simple-table>
      <thead sticky>
        <tr>
          <th>{{ header.category }}</th>
          <th>{{ header.random }}</th>
        </tr>
      </thead>
      <tbody>
          <tr
            v-for="joke in jokes"
            :key="joke"
          >
            <td>{{ joke }}</td>
            <td @click="getJoke(joke)">{{joke}}</td>
          </tr>
      </tbody>
  </v-simple-table>
</template>

<script>
export default {
    name: 'ListHead',
    data() {
        return ({
            header: {
                category: "Category",
                random: "Random Joke",
            },
            jokes:[
              'jeden',
              'dwa',
            ]


        });
    },
    methods:{
      getJoke(joke){
        alert(joke)
      }
    },
}
</script>