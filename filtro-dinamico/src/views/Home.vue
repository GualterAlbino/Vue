<template>
  <v-app>
    <v-app-bar>
      <v-toolbar
        :title="'Exemplo de consulta'"
        :color="'primary'"
        class="text-center"
      />
    </v-app-bar>

    <v-main>
      <ConsultaDinamica
        v-model="exibirDialog"
        :titulo="tituloConsulta"
        :controller="controllerConsulta"
      />

      <div style="margin-top: 30vh">
        <v-row :justify="'center'" class="text-center">
          <v-col :cols="10">
            <v-btn
              :text="'Consulta de Produtos'"
              @click="onAbrirConsultaProdutos"
            />
          </v-col>

          <v-col :cols="10">
            <v-btn
              :text="'Consulta de Categorias'"
              @click="onAbrirConsultaCategorias"
            />
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
//Vue
import { ref } from "vue"
//Componentes
import ConsultaDinamica from "@/components/ConsultaDinamica.vue"

//Controllers
import CategoriaController from "@/controllers/CategoriaController"
import ProdutoController from "@/controllers/ProdutoController"

// Propriedades reativas
const exibirDialog = ref<boolean>(false)
const tituloConsulta = ref<string>("")
const controllerConsulta = ref<any>(null)

function onAbrirConsultaCategorias(): void {
  try {
    controllerConsulta.value = new CategoriaController()
    tituloConsulta.value = "Consulta de Categorias"
    exibirDialog.value = true
  } catch (error) {
    console.error(error)
  }
}

function onAbrirConsultaProdutos(): void {
  try {
    controllerConsulta.value = new ProdutoController()
    tituloConsulta.value = "Consulta de Produtos"
    exibirDialog.value = true
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
.container-main {
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
