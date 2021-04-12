<template>
  <form @submit.prevent="seekTunes(searchQuery)" class="form">
    <h1>Will help You find some tunes bro!</h1>
    <div class="searchbar">
      <input v-model="searchQuery" type="text" placeholder="your search..." />
    </div>
  </form>
  <div v-if="data.results" class="results">
    <TheShowAlbum
      v-for="album in data.results"
      :key="album.artistId"
      :album="album"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { itunesSearch } from "./services/iTunesAPI";
import { iTunesTypes } from "./types/iTunesTypes.interface";
import TheShowAlbum from "./components/TheShowAlbum.vue";

export default defineComponent({
  //defineComponent is must be when using typescript
  name: "App",
  components: {
    TheShowAlbum,
  },
  setup() {
    let searchQuery = ref("");
    let albums = reactive<{ data: iTunesTypes }>({ data: {} });
    const seekTunes = async (searchQuery: string): Promise<void> => {
      const res = await itunesSearch(searchQuery);
      albums.data = res;
      console.log(albums);
    };
    return {
      searchQuery,
      ...toRefs(albums),
      seekTunes,
    };
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
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin:20px auto
}
body {
  background: url("https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}
.form {
  padding: 10px;
  background: rgba(255, 255, 255, 0.541);
  border-radius: 5px;
  border: 2px solid black;
}
.searchbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  background: rgba(255, 255, 255, 0.11);
  height: 50px;
  text-align: center;
  outline: none;
  font-size: 1.2rem;
  width: 90%;
  border: none;
  border-bottom: 2px solid black;
  transition: all 0.3s ease;
}
input:focus {
  border-radius: 15px;
  box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.521);
  cursor: pointer;
  background: white;
}
</style>
