<template>
  <div>
    <b-card title="映画監督" class="mt-4">
      <b-form>
        <b-form-group
          label="監督名"
          label-for="input-director-name"
        >
          <b-form-input
            v-model="form.director.name"
            id="input-director-name"
            type="text"
            placeholder="監督名"
            size="sm"
            required
          />
        </b-form-group>
        <b-form-group
          label="年齢"
          label-for="input-director-age"
        >
          <b-form-input
            v-model="form.director.age"
            id="input-director-age"
            type="number"
            placeholder="年齢"
            size="sm"
            required
          />
        </b-form-group>
        <b-button type="submit" variant="outline-info">
          登録
        </b-button>
      </b-form>
    </b-card>
    <b-card title="映画作品" class="mt-4">
      <b-form @submit.prevent="addMovie">
        <b-form-group
          label="タイトル"
          label-for="input-movie-title"
        >
          <b-form-input
            v-model="form.movie.name"
            id="input-movie-title"
            type="text"
            placeholder="タイトル"
            size="sm"
            required
          />
        </b-form-group>
        <b-form-group
          label="ジャンル"
          label-for="input-movie-genre"
        >
          <b-form-input
            v-model="form.movie.genre"
            id="input-movie-genre"
            type="text"
            placeholder="ジャンル"
            size="sm"
            required
          />
        </b-form-group>
        <b-form-group
          label="監督"
          label-for="input-movie-director"
        >
          <b-form-select
            v-model="form.movie.directorId"
            id="input-movie-director"
            size="sm"
          >
            <b-form-select-option v-for="director in directors" :value="director.id" :key="director.id">
              {{ director.name }}
            </b-form-select-option>
          </b-form-select>
        </b-form-group>
        <b-button type="submit" variant="outline-info">
          登録
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { DIRECTOR_LIST, ADD_MOVIE } from "../graphql/queries";
export default {
  name: "Sidenav",
  apollo: {
    directors: DIRECTOR_LIST
  },
  data() {
    return {
      form: {
        director: {
          name: "",
          age: ""
        },
        movie: {
          name: "",
          genre: "",
          directorId: ""
        }
      }
    }
  },
  methods: {
    addMovie() {
      const {name, genre, directorId} = this.form.movie
      this.$apollo.mutate({
        mutation: ADD_MOVIE,
        variables: {
          name,
          genre,
          directorId
        }
      }).then((data) => {
        console.log(data);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<style>

</style>