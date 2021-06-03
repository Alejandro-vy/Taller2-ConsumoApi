<template>
  <div class="col-md-4">
    <router-link :to="`/movies/${movie.id}`">
      <div class="movie-card__right">
        <span> {{ movieId }} </span>
        <img
          class="card-img-top"
          style="max-height: 250px; max-width: 250px"
          :src="movie.backdrop_path"
          :alt="movie.title"
        />
      </div>
      <div :class="`movie-card ${movie.genres[0].title}`">
        <div class="movie-card__left">
          <span>{{ movie.title }}</span>
          <div class="movie-genres">
            <span
              class="movie-genre"
              v-for="genre in movie.genres"
              :key="genre.name"
            >
              {{ genre.name }}
            </span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Movie from "@/models/Movie";
export default {
  props: {
    movie: {
      required: true,
      type: Movie,
    },
  },
};
</script>

<style>
</style>