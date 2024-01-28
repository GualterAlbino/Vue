<template>
  <v-container class="container" :fluid="true">
    <v-row>
      <v-col
        :md="3"
        v-for="(item, index) in props.registros"
        :key="index"
      >
        <v-card class="mx-auto">
          <v-img
            :src="
              item.ObterImagem() ||
              'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            "
            :lazy-src="
              item.ObterImagem() ||
              'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
            "
            height="200px"
            cover
          ></v-img>
          <v-card-title>{{
            item.ObterCodigo() + " - " + item.ObterTitulo()
          }}</v-card-title>
          <v-card-text>{{ item.ObterDescricao() }}</v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              :variant="'outlined'"
              @click="onSelecionarRegistro(item)"
            >
              Selecionar
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// Vue
const emit = defineEmits(["update:modelValue", "onSelecionarRegistro"])

//Classes
import ModelClass from "@/services/ModelClass"

//==>Props
interface PropTypes {
  /**
   * Define os registros que serão exibidos.
   */
  registros: ModelClass[]

  /**
   * Define o titulo do form de consulta.
   */
  titulo?: string
}
const props = withDefaults(defineProps<PropTypes>(), {
  registros: () => []
})

function onSelecionarRegistro(registro: any): void {
  try {
    console.log(registro)
    emit("onSelecionarRegistro", registro)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
.container {
  max-height: 92vh;
  display: flex;

  background-color: white;
  overflow-y: auto;
}

.container-item {
  margin: 10px;
}
</style>
