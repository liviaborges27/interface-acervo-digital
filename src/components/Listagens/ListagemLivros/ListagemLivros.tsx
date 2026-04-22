import { type JSX } from "react";
import { useState, useEffect } from "react";
import type LivroDTO from "../../../dto/LivroDTO";
import LivroRequests from "../../../fetch/LivroRequests";


function ListagemLivros(): JSX.Element {
    const [livros, setLivros] = useState<LivroDTO[]>([]);

    useEffect(() => {
        const buscarLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.obterListaDeLivros();
                setLivros(listaDeLivros);
            } catch (error) {
                console.error(`Erro ao buscar livros. ${error}`);
                alert("Erro ao criar a listagem de livros.");
            }
        }

        buscarLivros();
    }, []);

    return (
        <main className="bg-gray-200 h-[76vh]"> {/* Web Semântica SEO (Search Engine Optimizer) */}
            <div className="w-8/10 flex m-auto p-12">
                <h1 className="w-9/10 text-3xl text-center">Livros</h1>
                <a href="#" className="w-1/10 p-3 text-md bg-slate-700 rounded-md text-center text-white font-bold flex items-center justify-center hover:cursor-pointer">
                    Novo Livro
                </a>
            </div>

            <div className="w-8/10 max-w-[80%] max-h-7/10 overflow-auto overscroll-none m-auto border border-slate-800">
                <table className="table-auto w-full border-collapse text-sm">
                    <thead className="bg-slate-700 sticky top-0 z-10">
                        <tr>
                            <th className="border border-slate-600 text-white">ID</th>
                            <th className="border border-slate-600 text-white p-4">Título</th>
                            <th className="border border-slate-600 text-white">Autor</th>
                            <th className="border border-slate-600 text-white">Editora</th>
                            <th className="border border-slate-600 text-white">Ano de Publicação</th>
                            <th className="border border-slate-600 text-white">Ações</th>
                        </tr>
                    </thead>
                    <tbody> {/* Dados fictícios (por enquanto) */}
                        {livros && livros.length > 0 ? (
                            livros.map((livro) => (
                                <tr className="border-b-2 text-center odd:bg-slate-300 even:bg-slate-100 hover:bg-slate-600 hover:text-white hover:cursor-pointer" key={livro.id_livro}>
                                    <td>{livro.id_livro}</td>
                                    <td className="p-3">{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>{livro.editora}</td>
                                    <td>{livro.ano_publicacao}</td>
                                    <td>
                                        <a href="#" className="inline-block bg-sky-600 p-2 m-2 w-1/5 rounded-md text-white text-center">Detalhes</a>
                                        <a href="#" className="inline-block bg-emerald-400 p-2 m-2 w-1/5 rounded-md text-white">Atualizar</a>
                                        <a href="#" className="inline-block bg-red-600 p-2 m-2 w-1/5 rounded-md text-white">Deletar</a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center p-4">Nenhum livro encontrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default ListagemLivros;