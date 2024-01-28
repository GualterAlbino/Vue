export default abstract class ModelClass {
  //----------------------------------
  // Métodos para consulta de dados da entidade a serem utilizados em componentes de consulta
  // -Os métodos abaixo devem ser implementados em cada controller
  // -Os métodos indicam quais campos devem ser utilizados na consulta
  //----------------------------------

  abstract ObterCodigo(): number | null

  abstract ObterTitulo(): string | null

  abstract ObterDescricao(): string | null

  abstract ObterImagem(): string | null
}
