import { LogoFooter } from "./logoFooter";

export function Footer(){
    return(
        <footer className="w-full p-5 flex items-center justify-start bg-gray-700 border-t border-gray-600">
            <LogoFooter />
            <div className="w-full m-4 flex justify-between">
                <strong>
                    Rocketseat - Todos os direitos reservados
                </strong>
                <span>
                    Políticas de privacidade
                </span>
            </div>
        </footer>        
    )
}
