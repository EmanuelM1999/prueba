<template>
  <div>
    <br />
    <v-card class="mx-auto" max-width="600">
      <v-toolbar dark color="#1f2137">
        <v-toolbar-title class="mx-auto display-1"
          >Sistema de gestion de ingreso</v-toolbar-title
        >
      </v-toolbar>
      <v-form
        ref="form"
        lazy-validation
        class="my-3 mx-2"
        @submit.prevent="guardarIngreso"
      >
        <v-row>
          <v-col cols="12" lg="12" sm="6">
            <v-text-field
              color="#1f2137"
              prepend-icon="mdi-account"
              v-model="codigo"
              label="Codigo interno"
            />
          </v-col>
          <v-col cols="12" lg="12" sm="6">
            <v-select
            v-model="tipoIngreso"
              item-text="nombre"
                item-value="id"
              :items="tiposIngresos"
              label="Tipo ingreso"
              solo
            ></v-select>
          </v-col>
          <v-btn
            color="#1f2137"
            style="color: white"
            x-large
            class="my-3 mx-auto"
            type="submit"
          >
            <span>Ingresar</span>
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  created() {
    this.axios.get("tipo-ingreso").then((response) => {
      this.tiposIngresos = response.data;

    });
  },
  data: () => ({
    codigo: "",
    tiposIngresos: [],
    tipoIngreso: ""
  }),
  methods: {
    guardarIngreso() {
      this.axios
        .post("ingreso", {
          codigo: this.codigo,
          tipo_ingreso: this.tipoIngreso,
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
          }else{
            console.log(error)
          }
        });
    },
  },
};
</script>

<style>
</style>