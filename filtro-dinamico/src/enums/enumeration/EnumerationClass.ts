import EnumerationItemClass from "./EnumerationItemClass"

export class EnumerationClass {
  public itens: EnumerationItemClass[]

  constructor(itens: EnumerationItemClass[]) {
    this.itens = itens
  }

  /**
   *
   * @returns Retorna todos os itens da enumeração
   */
  public getItens(): EnumerationItemClass[] {
    return this.itens
  }

  /**
   * Adiciona um item na enumeração
   * @param pValorBackEnd - Valor referencia no banco de dados
   * @param pValorFrontEnd - Valor apresentado ao usuário
   * @param pDescricao - Explicação do que é o valor
   * @param pTipo - Tipo do valor (STRING, NUMBER, DATE, BOOLEAN, ENUM)
   */
  public addItem(
    pValorBackEnd: string | number,
    pValorFrontEnd: string | number,
    pDescricao: string,
    pTipo?: any
  ): void {
    this.itens.push(
      new EnumerationItemClass(pValorBackEnd, pValorFrontEnd, pDescricao, pTipo)
    )
  }

  /**
   * Retorna o item da enumeração que possui o valor de backend igual ao valor passado como parâmetro
   * @param pValorBackEnd
   * @returns
   */
  public getItem(pValorBackEnd: string | number): EnumerationItemClass | null {
    const item = this.itens.find((item) => item.valorBackend === pValorBackEnd)
    return item ?? null
  }
}
