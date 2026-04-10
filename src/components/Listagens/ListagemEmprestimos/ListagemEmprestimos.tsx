function ListagemEmprestimos() {
    return (
        <div className="min-h-screen bg-neutral-50 p-8">
            <main>
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-neutral-800">Empréstimos</h1>
                    <button className="bg-[#1e2d3d] hover:bg-[#2a3f56] text-white text-sm px-4 py-2 rounded-lg transition-colors">
                        + Novo empréstimo
                    </button>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-neutral-200">
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">ID</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Nome</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Nascimento</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Livro</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Data de Empréstimo</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Celular</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Status</th>
                                <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest font-medium text-neutral-400">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                                <td className="px-4 py-3.5 text-neutral-400">1</td>
                                <td className="px-4 py-3.5">
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 text-xs font-medium flex items-center justify-center">L</span>
                                        <span className="text-neutral-800">Lívia</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3.5 text-neutral-500">27/05/2000</td>
                                <td className="px-4 py-3.5 font-medium text-neutral-800">Dom Casmurro</td>
                                <td className="px-4 py-3.5 text-neutral-600">10/05/2026</td>
                                <td className="px-4 py-3.5 text-neutral-600">(16) 99339-9999</td>
                                <td className="px-4 py-3.5">
                                    <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                        Ativo
                                    </span>
                                </td>
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
                                <td className="px-4 py-3.5">
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 text-xs font-medium flex items-center justify-center">G</span>
                                        <span className="text-neutral-800">Gabys</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3.5 text-neutral-500">27/05/1987</td>
                                <td className="px-4 py-3.5 font-medium text-neutral-800">Capitães de Areia</td>
                                <td className="px-4 py-3.5 text-neutral-600">11/05/2026</td>
                                <td className="px-4 py-3.5 text-neutral-600">(16) 99339-9900</td>
                                <td className="px-4 py-3.5">
                                    <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                        Ativo
                                    </span>
                                </td>
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
                                <td className="px-4 py-3.5">
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 text-xs font-medium flex items-center justify-center">J</span>
                                        <span className="text-neutral-800">Jadson</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3.5 text-neutral-500">21/05/1970</td>
                                <td className="px-4 py-3.5 font-medium text-neutral-800">Lima Barreto</td>
                                <td className="px-4 py-3.5 text-neutral-600">11/05/2000</td>
                                <td className="px-4 py-3.5 text-neutral-600">(11) 99349-9900</td>
                                <td className="px-4 py-3.5">
                                    <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                        Ativo
                                    </span>
                                </td>
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

export default ListagemEmprestimos;