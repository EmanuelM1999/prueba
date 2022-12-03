<template>
  <v-main>
    <v-card class="mx-auto" max-width="900">
      <v-row>
        <v-col cols="12" lg="12" sm="6">
          <v-btn depressed color="error" @click="logout"> Cerrar sesion </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="12" sm="6">
          <span>Ingresos registrados</span>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="ingresos"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-main>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem("auth")) {
      this.axios.get("ingreso").then((response) => {
        this.ingresos = response.data;
      });
    } else {
      this.$router.push({ name: "Login" });
    }
  },
  data: () => ({
    ingresos: [],
    headers: [
      {
        text: "ID registro",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Nombre del colaborador", value: "colaborador.nombre" },
      { text: "Fecha ingreso", value: "fecha_ingreso" },
      { text: "Tipo de ingreso", value: "tipo_ingreso.nombre" },
    ],
  }),
  methods:{
    logout(){
        localStorage.removeItem("auth");
        this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style>
</style>