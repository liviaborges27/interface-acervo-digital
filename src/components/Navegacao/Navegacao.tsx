import { type JSX, useState } from "react";
import { Menubar } from 'primereact/menubar';
import type { MenuItem } from 'primereact/menuitem';
import AuthRequests from '../../fetch/AuthRequests';

interface CustomMenuItem extends MenuItem {
    badge?: number;
    shortcut?: string;
    items?: CustomMenuItem[];
}

function Navegacao(): JSX.Element {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const isAuth = localStorage.getItem('isAuth');
        const token = localStorage.getItem('token');
        return !!(isAuth && token && AuthRequests.checkTokenExpiry());
    });

    const [email] = useState(() => {
        return localStorage.getItem('email') ?? '';
    });

    const logout = () => {
        AuthRequests.removeToken();
        setIsAuthenticated(false);
    };

    const itemClass = 'text-white/60 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-md text-sm transition-colors';

    const items: CustomMenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            className: itemClass,
            url: "/"
        },
        {
            label: 'Alunos',
            icon: 'pi pi-users',
            className: itemClass,
            url: "/lista/aluno"
        },
        {
            label: 'Livros',
            icon: 'pi pi-book',
            className: itemClass,
            url: "/lista/livro"
        },
        {
            label: 'Empréstimos',
            icon: 'pi pi-sync',
            className: itemClass,
            url: "/lista/emprestimo"
        }
    ];

    const start = (
        <img
            alt="logo"
            src='./src/assets/app-icon.png'
            className="h-8 ml-6 mr-4"
        />
    );

    const end = (
        <div className="flex items-center gap-3 pr-6">
            {isAuthenticated ? (
                <>
                    <p className="text-white/60 text-sm">
                        Olá, <span className="text-white">{email}</span>
                    </p>
                    <button
                        onClick={logout}
                        className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                    >
                        Sair
                    </button>
                </>
            ) : (
                <a
                    href="/login"
                    className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                >
                    Login
                </a>
            )}
        </div>
    );

    return (
        <header className="h-17 bg-[#1e2d3d] flex items-center">
            <Menubar
                model={isAuthenticated ? items : [items[0]]}
                start={start}
                end={end}
                className="w-full bg-transparent border-none shadow-none p-0"
            />
        </header>
    );
}

export default Navegacao;