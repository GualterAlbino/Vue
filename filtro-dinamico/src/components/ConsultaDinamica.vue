<template>
  <v-row justify="center">
    <v-dialog
      v-model="exibirDialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="onClickVoltar()">
          <v-icon>{{ iconeComputado }}</v-icon>
        </v-btn>

        <v-toolbar-title>{{ tituloComputado }}</v-toolbar-title>
      </v-toolbar>

      <v-window v-model="abaAtual">
        <v-window-item>
          <AbaFiltros
            v-model="exibirDialog"
            :titulo="props.titulo"
            :controller="props.controller"
            @onBuscarRegistros="onBuscarRegistros($event)"
          />
        </v-window-item>

        <v-window-item>
          <AbaResultado v-model="exibirDialog" :registros="registros" />
        </v-window-item>
      </v-window>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" setup>
// Vue
import { ref, computed } from "vue"
const emit = defineEmits(["update:modelValue"])

//Componentes
import AbaFiltros from "./AbaFiltros.vue"
import AbaResultado from "./AbaResultado.vue"

//Controller padrão
import Controller from "@/controllers/Controller"

// Props
interface PropTypes {
  /**
   * Define se o DIALOG será exibido ou não.
   * @default false
   */
  modelValue: boolean

  /**
   * Define o titulo do form de consulta.
   */
  titulo?: string

  /**
   * Define o controller que será utilizado para realizar a consulta.
   * -Deve ser utilizado se sua função de consulta for a (controller.BuscarRegistros)
   * @default null
   */
  controller?: Controller<any> | null | undefined
}
const props = withDefaults(defineProps<PropTypes>(), {
  modelValue: false,
  titulo: "Consulta",
  controller: null
})

const abaAtual = ref<number>(0)
const registros = ref<any[]>([])

const exibirDialog = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit("update:modelValue", newValue)
  }
})

const tituloComputado = computed<string>(() => {
  if (abaAtual.value === 0) {
    return props.titulo
  } else if (abaAtual.value === 1) {
    return "Resultado"
  } else {
    return "Consulta"
  }
})

const iconeComputado = computed<string>(() => {
  if (abaAtual.value === 0) {
    return "mdi-close"
  } else if (abaAtual.value === 1) {
    return "mdi-arrow-left"
  } else {
    return "mdi-arrow-right"
  }
})

function onBuscarRegistros(pRegistros: any[]): void {
  registros.value = pRegistros
  abaAtual.value = 1
}

function onClickVoltar(): void {
  if (abaAtual.value === 1) {
    abaAtual.value = 0
  } else {
    exibirDialog.value = false
  }
}
</script>
