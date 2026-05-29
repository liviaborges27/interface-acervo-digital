import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LivroRequests from '../../../fetch/LivroRequests';
import type LivroDTO from '../../../dto/LivroDTO';
import Utilitario from '../../../utils/Utilitario';

function FormALivro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LivroDTO>({
        titulo: '',
        autor: '',
        editora: '',
        ano_publicacao: '',
        isbn: '',
        quant_total: 0,
        quant_disponivel: 0,
        quant_aquisicao: 0,
        valor_aquisicao: 0,
        status_livro_emprestado: '',
        status_livro: true

    });

    // Atualiza o state a partir de qualquer input do formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

				// Verifica se o campo alterado é o celular, se sim irá formatar usando uma expressão regular
        if (name === 'celular') {
            const celularFormatado = Utilitario.formatarTelefone(value);
            setFormData(prev => ({ ...prev, [name]: celularFormatado }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Envia os dados para a requisição
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); // evita o recarregamento da página
        
     // Validação de campos de texto obrigatórios
        if (!formData.titulo.trim() || !formData.autor.trim() || !formData.editora.trim()) {
            alert("Por favor, preencha o Título, Autor e Editora.");
            return;
        }
        // Validação do Ano de Publicação
        const anoRegex = /^\d{4}$/;
        if (!anoRegex.test(formData.ano_publicacao)) {
            alert("Ano de publicação inválido.");
            return;
        }
       //  Validação das Quantidades
        if (formData.quant_total <= 0) {
            alert("A quantidade total deve ser maior que zero.");
            return;
        }

        //  Validação do Valor de Aquisição
        if (formData.valor_aquisicao <= 0) {
            alert("O valor de aquisição deve ser maior que R$ 0,00.");
            return;
        }

        // Validação de ISBN 
        if (formData.isbn.replace(/[- ]/g, '').length < 10) { 
            alert("ISBN inválido. Deve conter pelo menos 10 ou 13 dígitos.");
            return;
        }

        const resposta = await LivroRequests.enviarFormularioLivro(formData);
        if (resposta) {
            alert("Livro cadastrado com sucesso!");
            navigate('/lista/livros'); 
        } else {
            alert("Erro ao cadastrar o livro.");
        }
    };

    return (
        <main className="bg-gray-100 flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 border border-slate-200">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-slate-800 mb-8 sm:mb-12">
                        Cadastro de Livro
                    </h1>

                    <div className="space-y-6 sm:space-y-8">
                        {/* Linha 1: Título e Autor */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-[2]">
                                <label htmlFor="titulo" className="block text-sm font-semibold text-slate-700 mb-2">Título</label>
                                <input
                                    type="text"
                                    name="titulo"
                                    id="titulo"
                                    required
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    placeholder="Digite o título do livro"
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div className="flex-1">
                                <label htmlFor="autor" className="block text-sm font-semibold text-slate-700 mb-2">Autor</label>
                                <input
                                    type="text"
                                    name="autor"
                                    id="autor"
                                    required
                                    value={formData.autor}
                                    onChange={handleChange}
                                    placeholder="Nome do autor"
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Linha 2: Editora, Ano e ISBN */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1">
                                <label htmlFor="editora" className="block text-sm font-semibold text-slate-700 mb-2">Editora</label>
                                <input
                                    type="text"
                                    name="editora"
                                    id="editora"
                                    required
                                    value={formData.editora}
                                    onChange={handleChange}
                                    placeholder="Editora"
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div className="w-full sm:w-32">
                                <label htmlFor="ano_publicacao" className="block text-sm font-semibold text-slate-700 mb-2">Ano</label>
                                <input
                                    type="text"
                                    name="ano_publicacao"
                                    id="ano_publicacao"
                                    required
                                    maxLength={4}
                                    value={formData.ano_publicacao}
                                    onChange={handleChange}
                                    placeholder="AAAA"
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div className="flex-1">
                                <label htmlFor="isbn" className="block text-sm font-semibold text-slate-700 mb-2">ISBN</label>
                                <input
                                    type="text"
                                    name="isbn"
                                    id="isbn"
                                    required
                                    value={formData.isbn}
                                    onChange={handleChange}
                                    placeholder="978-3-16-148410-0"
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Linha 3: Quantidades e Valores Numéricos */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            <div>
                                <label htmlFor="quant_total" className="block text-sm font-semibold text-slate-700 mb-2">Qtd Total</label>
                                <input
                                    type="number"
                                    name="quant_total"
                                    id="quant_total"
                                    required
                                    min={0}
                                    value={formData.quant_total}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="quant_disponivel" className="block text-sm font-semibold text-slate-700 mb-2">Qtd Disp.</label>
                                <input
                                    type="number"
                                    name="quant_disponivel"
                                    id="quant_disponivel"
                                    required
                                    min={0}
                                    value={formData.quant_disponivel}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="quant_aquisicao" className="block text-sm font-semibold text-slate-700 mb-2">Qtd Aq.</label>
                                <input
                                    type="number"
                                    name="quant_aquisicao"
                                    id="quant_aquisicao"
                                    required
                                    min={0}
                                    value={formData.quant_aquisicao}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="valor_aquisicao" className="block text-sm font-semibold text-slate-700 mb-2">Valor Aq. (R$)</label>
                                <input
                                    type="number"
                                    name="valor_aquisicao"
                                    id="valor_aquisicao"
                                    required
                                    min={0}
                                    step="0.01"
                                    value={formData.valor_aquisicao}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-14 space-y-4">
                        <input
                            type="submit"
                            value="CADASTRAR LIVRO"
                            className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold text-lg cursor-pointer hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                        />
                        <button
                            type="button"
                            onClick={() => navigate('/lista/livros')}
                            className="w-full bg-white border-2 border-slate-300 text-slate-600 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-[0.98]"
                        >
                            VOLTAR PARA LISTAGEM
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}


export default FormALivro;