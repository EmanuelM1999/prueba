<template>
  <v-app>
    <v-main>
      <div id="nav">
        <router-link :to="{ name: 'Ingreso' }"
          >Registro de ingresos</router-link
        >
        | <router-link :to="{ name: 'Login' }">Listado de ingresos</router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>
<style>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name: "App",
  data: () => ({
    codigo: "",
  }),
  methods: {
    guardarIngreso() {
      this.axios
        .post("ingreso", {
          codigo: this.codigo,
        })
        .then((response) => {
          alert(
            "Ingreso exitoso " +
              "\n Fecha de ingreso: " +
              response.data.fecha_ingreso +
              "\n Colaborador: " +
              response.data.colaborador.nombre
          );
        })
        .catch((error) => {
          if (error.response.status == 422) {
            alert(error.response.data.message);
          }
        });
    },
  },
};
</script>
