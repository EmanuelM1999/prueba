<template>
  <v-main>
    <v-card class="mx-auto" max-width="600">
      <v-toolbar dark color="#1f2137">
        <v-toolbar-title class="mx-auto display-1"
          >Iniciar Sesión</v-toolbar-title
        >
      </v-toolbar>
      <v-col cols="12" lg="12" sm="6">
        <span style="color: red"
          >Debes loguearte para ver el listado de ingresos</span
        >
      </v-col>
      <v-form
        ref="form"
        lazy-validation
        class="my-3 mx-2"
        @submit.prevent="login"
      >
        <v-row>
          <v-col cols="12" lg="12" sm="6">
            <v-text-field
              color="#1f2137"
              prepend-icon="mdi-account"
              v-model="email"
              label="Correo"
            />
          </v-col>
          <v-col cols="12" lg="12" sm="6">
            <v-text-field
              color="#1f2137"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
              label="Contraseña"
            />
          </v-col>
          <v-btn
            color="#1f2137"
            style="color: white"
            x-large
            class="my-3 mx-auto"
            type="submit"
          >
            <span>Iniciar sesión</span>
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-main>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem("auth")) {
      this.$router.push({ name: "ListadoIngresos" });
    }
  },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      this.axios
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("auth", JSON.stringify(response.data));
          this.$router.push({ name: "ListadoIngresos" });
        })
        .catch((error) => {
          if (error.response.status == 422) {
            alert(error.response.data.message);
          } else {
            console.log(error);
          }
        });
    },
  },
};
</script>

<style>
</style>