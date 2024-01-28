import Controller from "./Controller"
import { TiposEnum } from "@/enums/TipoEnum"
import CampoConsultaInterface from "@/interfaces/CampoConsultaInterface"
import CategoriaClass from "@/services/CategoriaClass"

export default class CategoriaController extends Controller<CategoriaClass> {
  public url: string = "http://localhost:3000/categorias"
  public camposConsulta: CampoConsultaInterface[] = [
    { campo: "id", descricao: "Código", tipo: TiposEnum.NUMBER },
    { campo: "nome", descricao: "Nome", tipo: TiposEnum.STRING },
    { campo: "descricao", descricao: "Descrição", tipo: TiposEnum.STRING },
    { campo: "imagem", descricao: "Imagem", tipo: TiposEnum.BLOB }
  ]
  constructor() {
    super()
  }

  async BuscarRegistros(): Promise<CategoriaClass[]> {
    //const response = await this.rest.get("/")
    const mock = [
      {
        id: 1,
        nome: "Categoria 1",
        descricao: "Descrição da categoria 1",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 2,
        nome: "Categoria 2",
        descricao: "Descrição da categoria 2",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 3,
        nome: "Categoria 3",
        descricao: "Descrição da categoria 3",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 4,
        nome: "Categoria 4",
        descricao: "Descrição da categoria 4",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 5,
        nome: "Categoria 5",
        descricao: "Descrição da categoria 5",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 6,
        nome: "Categoria 6",
        descricao: "Descrição da categoria 6",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 7,
        nome: "Categoria 7",
        descricao: "Descrição da categoria 7",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 8,
        nome: "Categoria 8",
        descricao: "Descrição da categoria 8",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 9,
        nome: "Categoria 9",
        descricao: "Descrição da categoria 9",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 10,
        nome: "Categoria 10",
        descricao: "Descrição da categoria 10",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 11,
        nome: "Categoria 11",
        descricao: "Descrição da categoria 11",
        imagem: "https://picsum.photos/200/300"
      }
    ]
    return mock.map((item) => new CategoriaClass(item))
  }

  async BuscarRegistro(): Promise<CategoriaClass> {
    //const response = await this.rest.get("/")
    const mock = {
      id: 1,
      nome: "Categoria 1",
      descricao: "Descrição da categoria 1",
      imagem: "https://picsum.photos/200/300"
    }

    return new CategoriaClass(mock)
  }
}
