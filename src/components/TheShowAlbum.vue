<template>
    <div class="album" >
      <p>{{album.collectionName}}</p>
      <img :src="album.artworkUrl100" alt="">
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Result } from "../types/iTunesTypes.interface";

export default defineComponent({
  props: {
    album: {
      type: Object as PropType<Result>,
      required: true
    }
  },
  setup() {
  
    return {
    
    };
  }
});
</script>

<style scoped>
.album {
  color: black;
  background: rgba(255, 255, 255, 0.671);
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;

}
img {
  width: fit-content}
</style>
