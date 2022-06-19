<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template #activator={on} >
        <v-btn color="green lighten-2" light @click="getJoke(category)" v-on="on"  >
          GET ONE
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ category }}
        </v-card-title>
        <v-card-text>
          {{ randomJoke }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      randomJoke: ''
    }
  },
  methods: {
    async getJoke(category) {
        const joke = await this.$axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        this.randomJoke = joke.data.value;
    },
  }
}

</script>
