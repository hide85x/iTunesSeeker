<template>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { itunesSearch } from "./services/iTunesAPI";
import { ItunesTypes } from "./types/ItunesTypes.interface";
import TheShowAlbum from "./components/TheShowAlbum.vue";

export default defineComponent({ //defineComponent is must be when using typescript
  name: "App",
  components: {
    TheShowAlbum
  },
  data: () => {
    return {
      data: {} as ItunesTypes,
      searchText: ""
    };
  },
  methods: {
    async searchItunes(search: string): Promise<void> {
      const value = await itunesSearch(search);
      this.data = value;
      console.log("data", value);
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
