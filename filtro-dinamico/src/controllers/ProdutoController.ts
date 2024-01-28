import Controller from "./Controller"
import { TiposEnum } from "@/enums/TipoEnum"
import CampoConsultaInterface from "@/interfaces/CampoConsultaInterface"
import ProdutoClass from "@/services/ProdutoClass"

export default class ProdutoController extends Controller<ProdutoClass> {
  public url: string = "http://localhost:3000/produtos"
  public camposConsulta: CampoConsultaInterface[] = [
    { campo: "id", descricao: "Código", tipo: TiposEnum.NUMBER },
    { campo: "nome", descricao: "Nome", tipo: TiposEnum.STRING },
    { campo: "preco", descricao: "Preço", tipo: TiposEnum.NUMBER },
    { campo: "descricao", descricao: "Descrição", tipo: TiposEnum.STRING },
    { campo: "categoria", descricao: "Categoria", tipo: TiposEnum.STRING }
  ]

  constructor() {
    super()
  }

  async BuscarRegistros(): Promise<ProdutoClass[]> {
    //const response = await this.rest.get("/")
    const mock = [
      {
        id: 1,
        nome: "Produto 1",
        preco: 100,
        descricao: "Descrição do produto 1",
        categoria: "1",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 2,
        nome: "Produto 2",
        preco: 200,
        descricao: "Descrição do produto 2",
        categoria: "2",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 3,
        nome: "Produto 3",
        preco: 300,
        descricao: "Descrição do produto 3",
        categoria: "3",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 4,
        nome: "Produto 4",
        preco: 400,
        descricao: "Descrição do produto 4",
        categoria: "4",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 5,
        nome: "Produto 5",
        preco: 500,
        descricao: "Descrição do produto 5",
        categoria: "5",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 6,
        nome: "Produto 6",
        preco: 600,
        descricao: "Descrição do produto 6",
        categoria: "6",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 7,
        nome: "Produto 7",
        preco: 700,
        descricao: "Descrição do produto 7",
        categoria: "7",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 8,
        nome: "Produto 8",
        preco: 800,
        descricao: "Descrição do produto 8",
        categoria: "8",
        imagem: "https://picsum.photos/200/300"
      },
      {
        id: 9,
        nome: "Produto 9",
        preco: 900,
        descricao: "Descrição do produto 9",
        categoria: "9",
        imagem: "https://picsum.photos/200/300"
      }
    ]

    return mock.map((item) => new ProdutoClass(item))
  }

  async BuscarRegistro(): Promise<ProdutoClass> {
    //const response = await this.rest.get("/")
    const mock = {
      id: 1,
      nome: "Produto 1",
      preco: 100,
      descricao: "Descrição do produto 1",
      categoria: "1",
      imagem: "https://picsum.photos/200/300"
    }

    return new ProdutoClass(mock)
  }
}
