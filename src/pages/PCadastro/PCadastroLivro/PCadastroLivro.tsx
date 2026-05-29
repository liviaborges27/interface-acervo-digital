import { type JSX } from "react";
import Navegacao from "../../../components/Navegacao/Navegacao";
import Rodape from "../../../components/Rodape/Rodape";
import FormALivro from "../../../components/Formularios/FormLivro/FormLivro";

function PCadastroLivro(): JSX.Element {
    return (
        <div className="min-h-screen flex flex-col">
            <Navegacao />
            <FormALivro />
            <Rodape />
        </div>
    );
}

export default PCadastroLivro;