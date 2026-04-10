
function listagemAlunos() {
    return (
        <div>
            <main>{/* web semantica */}
                <h1>Alunos</h1>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>RA</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* dados fictíciosdos alunos */}
                        <tr>
                            <td>1</td>
                            <td>123456</td>
                            <td>Felisberto</td>
                            <td>felisberto@email.com</td>
                            <td>(11) 99999-9999</td>
                            <td>
                                <a href="#">Atualizar</a>
                                <a href="#">Detalhes</a>
                                <a href="#">Deletar</a>
                            </td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>145355</td>
                            <td>Lívia</td>
                            <td>livia@email.com</td>
                            <td>(11) 9943-9922</td>
                            <td>
                                <a href="#">Atualizar</a>
                                <a href="#">Detalhes</a>
                                <a href="#">Deletar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default listagemAlunos;