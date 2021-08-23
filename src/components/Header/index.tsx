import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface headerProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: headerProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}