import ModelClass from "./ModelClass"

export default class ProdutoClass extends ModelClass {
  public id: number = 0
  public nome: string = ""
  public preco: number = 0
  public descricao: string = ""
  public categoria: string = ""
  public imagem: string = ""

  constructor(data?: Partial<ProdutoClass>) {
    super()
    if (data) {
      Object.assign(this, data)
    }
  }

  ObterCodigo(): number | null {
    return this.id
  }

  ObterTitulo(): string | null {
    return this.nome
  }

  ObterDescricao(): string | null {
    return this.descricao
  }

  ObterImagem(): string | null {
    return this.imagem
  }
}
