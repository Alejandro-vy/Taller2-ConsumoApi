<template>
  <div>
    <div v-if="loading" class="text-center my-3 d-flex justify-content-center">
      <b-spinner variant="primary" style="width: 5rem; height: 5rem" />
    </div>

    <MovieCard v-else :movie="movie"  />

    <router-link to="/getPopular">Volver</router-link>
  </div>
</template>

<script>
import Movie from "@/models/Movie";
import MovieCard from "@/components/MovieCard";
import api from "@/services/api.service";
export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      movie: {},
      isLoading: true,
    };
  },
  mounted() {
    this.getOneMovie();
  },
  methods: {
    async getOneMovie(id) {
      console.log(id);
      const { data } = await api.getMovie(id);
      this.movie = new Movie(data);
      this.isLoading = false;
    },
  },
};
</script>