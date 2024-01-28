<template>
  <v-card>
    <v-container :fluid="true" class="card-content">
      <v-col :cols="5">
        <v-row>
          <v-select
            :label="'Campo'"
            :variant="'outlined'"
            :items="campos"
            :item-title="(item) => item.descricao"
            :item-value="(item) => item"
            v-model="campoSelecionado"
          />
        </v-row>

        <v-row>
          <v-select
            :label="'Operador'"
            :variant="'outlined'"
            :items="operadores"
            :item-title="(item) => item.descricao"
            :item-value="(item) => item"
            v-model="operadorSelecionado"
          />
        </v-row>

        <v-row>
          <v-text-field
            :label="'Valor'"
            :variant="'outlined'"
            v-model="valorInput"
          />
        </v-row>

        <v-row justify="center">
          <v-btn
            :color="'primary'"
            :text="'Buscar'"
            @click="onBuscarRegistros"
          />
        </v-row>
      </v-col>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
// Vue
import { ref, computed, onMounted } from "vue"
const emit = defineEmits(["update:modelValue", "onBuscarRegistros"])

//Controller padrão
import Controller from "@/controllers/Controller"

//Interface
import CampoConsultaInterface from "@/interfaces/CampoConsultaInterface"

// Enum
import { TiposEnum } from "@/enums/TipoEnum"

// Props
interface PropTypes {
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
  titulo: "Consulta",
  controller: null
})

//Propriedades Reativas
const campoSelecionado = ref<CampoConsultaInterface>()
const operadorSelecionado = ref<string>()
const valorInput = ref<string>()

async function onBuscarRegistros() {
  try {
    //Monta o filtro
    const filtros = {
      campo: campoSelecionado.value!.campo,
      operador: operadorSelecionado.value,
      valor: valorInput.value
    }

    console.log(filtros)
    const registros = await props.controller?.BuscarRegistros()
    emit("onBuscarRegistros", registros)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  if (props.controller?.camposConsulta) {
    campoSelecionado.value = props.controller.camposConsulta[0]
    operadorSelecionado.value = operadoresPorCampo(
      props.controller.camposConsulta[0].tipo
    )[0].descricao
  }
})

const campos = computed<CampoConsultaInterface[]>(() => {
  if (!props.controller?.camposConsulta) {
    return []
  }
  return props.controller.camposConsulta
})

const operadores = computed(() => {
  if (!campoSelecionado.value) {
    return []
  }
  return operadoresPorCampo(campoSelecionado.value.tipo)
})

function operadoresPorCampo(tipo: string) {
  switch (tipo) {
    case TiposEnum.STRING:
      return [
        { descricao: "Contém", operador: "like" },
        { descricao: "Não Contém", operador: "not like" },
        { descricao: "Igual", operador: "=" },
        { descricao: "Diferente", operador: "<>" },
        { descricao: "Inicia com", operador: "like" },
        { descricao: "Termina com", operador: "like" }
      ]
    case TiposEnum.NUMBER:
      return [
        { descricao: "Igual", operador: "=" },
        { descricao: "Diferente", operador: "<>" },
        { descricao: "Maior que", operador: ">" },
        { descricao: "Menor que", operador: "<" },
        { descricao: "Maior ou igual", operador: ">=" },
        { descricao: "Menor ou igual", operador: "<=" }
      ]
    case TiposEnum.DATE:
      return [
        { descricao: "Igual", operador: "=" },
        { descricao: "Diferente", operador: "<>" },
        { descricao: "Maior que", operador: ">" },
        { descricao: "Menor que", operador: "<" },
        { descricao: "Maior ou igual", operador: ">=" },
        { descricao: "Menor ou igual", operador: "<=" }
      ]
    case TiposEnum.BOOLEAN:
      return [
        { descricao: "Igual", operador: "=" },
        { descricao: "Diferente", operador: "<>" }
      ]
    default:
      return []
  }
}
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}

.card-content {
  margin-top: 10%;
  display: flex;
  justify-content: center;
}
</style>
