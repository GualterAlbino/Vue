import { TiposEnum } from "@/enums/TipoEnum"

export default interface CampoConsultaInterface {
  campo: string //Campo no banco de dados
  descricao: string // Descrição do campo apresentada ao usuario (LABEL)
  tipo: TiposEnum //Tipo do campo
}
