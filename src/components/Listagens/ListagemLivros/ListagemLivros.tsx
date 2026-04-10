function ListagemLivros() {
    return (
        <div className="min-h-screen bg-neutral-50 p-8">
            <main>
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-neutral-800">Livros</h1>
                    <button className="bg-[#1e2d3d] hover:bg-[#2a3f56] text-white text-sm px-4 py-2 rounded-lg transition-colors">
                        + Novo livro
                    </button>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-neutral-200">
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">ID</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Título</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Autor</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Editora</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Ano de Publicação</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">ISBN</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                                <td className="px-4 py-3.5 text-neutral-400">1</td>
                                <td className="px-4 py-3.5 font-medium text-neutral-800">Dom Casmurro</td>
                                <td className="px-4 py-3.5 text-neutral-500">Machado de Assis</td>
                                <td className="px-4 py-3.5">
                                    <span className="bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                        Fio de Prosa
                                    </span>
                                </td>
                                <td className="px-4 py-3.5 text-neutral-600">10/05/1987</td>
                                <td className="px-4 py-3.5 font-mono text-xs text-neutral-400">78-85-333-0227-3</td>
                                <td className="px-4 py-3.5">
                                    <div className="flex gap-1.5">
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">Atualizar</a>
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">Detalhes</a>
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors">Deletar</a>
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                                <td className="px-4 py-3.5 text-neutral-400">2</td>
                                <td className="px-4 py-3.5 font-medium text-neutral-800">Capitães de Areia</td>
                                <td className="px-4 py-3.5 text-neutral-500">Jorge Amado</td>
                                <td className="px-4 py-3.5">
                                    <span className="bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                        EstiloTech
                                    </span>
                                </td>
                                <td className="px-4 py-3.5 text-neutral-600">10/05/2000</td>
                                <td className="px-4 py-3.5 font-mono text-xs text-neutral-400">99-85-323-1127-3</td>
                                <td className="px-4 py-3.5">
                                    <div className="flex gap-1.5">
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">Atualizar</a>
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">Detalhes</a>
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors">Deletar</a>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-neutral-50 transition-colors">
                                <td className="px-4 py-3.5 text-neutral-400">3</td>
                                <td className="px-4 py-3.5 font-medium text-neutral-800">O Pequeno Príncipe</td>
                                <td className="px-4 py-3.5 text-neutral-500">Antoine de Saint-Exupéry</td>
                                <td className="px-4 py-3.5">
                                    <span className="bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                        EstiloTech
                                    </span>
                                </td>
                                <td className="px-4 py-3.5 text-neutral-600">12/09/2022</td>
                                <td className="px-4 py-3.5 font-mono text-xs text-neutral-400">98-15-323-1122-3</td>
                                <td className="px-4 py-3.5">
                                    <div className="flex gap-1.5">
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">Atualizar</a>
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 transition-colors">Detalhes</a>
                                        <a href="#" className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors">Deletar</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default ListagemLivros;