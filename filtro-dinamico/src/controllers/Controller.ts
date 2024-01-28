import axios, { AxiosInstance } from "axios"
import CampoConsultaInterface from "@/interfaces/CampoConsultaInterface"

export default abstract class Controller<T> {
  abstract url: string
  abstract camposConsulta: CampoConsultaInterface[]

  constructor() {}

  protected get rest(): AxiosInstance {
    const api = axios.create({
      baseURL: this.url,
      headers: {
        Authorization: "",
        "Content-Type": ""
      }
    })

    return api
  }

  /**
   * Busca todos os registros
   */
  abstract BuscarRegistros(): Promise<T[]>

  /**
   * Busca um registro pelo ID
   * @param id
   */
  abstract BuscarRegistro(id: number): Promise<T>


}
