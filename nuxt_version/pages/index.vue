<template>
  <v-app>
    <v-simple-table fixed-header height="80vh">
      <thead>
        <tr>
          <th class="pointer" @click="sorting()">{{ header.category }}</th>
          <th class="text-center">{{ header.random }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
          <td>{{ category }}</td>
          <td>
            <ModalComponent :category="category" />
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-app>
</template>

<script>
import ModalComponent from '~/components/ModalComponent.vue';
export default {
  name: "IndexPage",
  components: { ModalComponent },
  data() {
    return ({
      dialog: false,
      header: {
        category: "Category",
        random: "Random Joke",
      },
      categories: [],
    });
  },
  mounted() {
    this.$axios.$get("https://api.chucknorris.io/jokes/categories")
      .then(res => (this.categories = res.sort()));
  },
  methods: {
    sorting() {
      this.categories = [...this.categories].reverse();
    }
  },
}
</script>

<style lang="scss">
  .pointer{
    cursor: pointer;
  }
</style>
