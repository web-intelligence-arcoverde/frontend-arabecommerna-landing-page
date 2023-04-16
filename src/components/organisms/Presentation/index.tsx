import { Button } from "../.."
import { ICONS } from "../../../assets"
import { PresentationContainer, PresentationDetails, SeeMore } from "./style"



export const Presentation = () => {
    return (
        <PresentationContainer>
            <PresentationDetails>
                <p>APRENDIZADO DE IDIOMA</p>
                <h2>Torne-se fluente em Árabe de um modo <br /> eficiente e descomplicado</h2>
                <p>Somos a primeira metodologia que garante a fluência no <br /> idioma Árabe e te insere de verdade na cultura</p>
                <Button>Começar a aprender</Button>
            </PresentationDetails>
            <SeeMore>
                <p>Arraste para ver mais</p>
            </SeeMore>
        </PresentationContainer>

    )
}