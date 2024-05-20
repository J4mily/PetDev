export const Sugestoes = () => {
    return(
        <div>
            <h1>DEIXE SUA SUGESTÃO</h1>
          <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="ESCREVA AQUI SUA SUGESTÃO" />
            </div>
            <input type="enviar" value="ENVIAR" />
          </form>
        </div>
    )
}

export default Sugestoes;