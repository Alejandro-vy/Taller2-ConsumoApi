<template>
  <div class="about">
    <h1>Populars</h1>
    <div v-if="loading" class="text-center my-3 d-flex justify-content-center">
      <b-spinner variant="primary" style="width: 5rem; height: 5rem" />
    </div>
    <div v-else class="row mx-0">
      <MovieCard v-for="mov in movies" :key="mov.title" :movie="mov">
        {{ mov.title }}
      </MovieCard>
    </div>
    <div class="col-12">
        <button class="btn btn-primary m-2" @click="getMovies(currentPage + 1)">
          Ver mas
        </button>
      </div>
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
      currentPage: 1,
      loading: true,
      movies: [],
    };
  },
  mounted() {
    this.getMovies(1);
  },
  methods: {
    async getMovies(currentPage) {
      this.currentPage = currentPage;
      this.loading = true;
      const { data } = await api.getPopular(this.currentPage);
      this.movies = await Promise.all(
        data.results.map((mov) => this.getOneMovie(mov.id))
      );
      this.loading = false;
      
    },
    async getOneMovie(id) {
      const { data } = await api.getMovie(id);
      return new Movie(data);
    },
  },
};
</script>