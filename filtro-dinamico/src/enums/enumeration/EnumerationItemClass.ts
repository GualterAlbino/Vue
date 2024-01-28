export default class EnumerationItemClass {
  public valorBackend: string | number //Campo no banco de dados
  public valorFrontend: string | number // Descrição do campo apresentada ao usuario (LABEL)
  public descricao: string //Explique o que é o campo
  public tipo: string | null //Tipo do campo (STRING, NUMBER, DATE, BOOLEAN, ENUM)

  constructor(
    valorBackend: string | number,
    valorFrontend: string | number,
    descricao: string,
    tipo?: string
  ) {
    this.valorBackend = valorBackend
    this.valorFrontend = valorFrontend
    this.descricao = descricao
    this.tipo = tipo ?? null
  }
}
