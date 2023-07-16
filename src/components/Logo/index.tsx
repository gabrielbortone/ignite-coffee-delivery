import imgLogo from '../../assets/logo.png';
import { LogoContainer } from './styles';

export default function Logo(){
    return (
        <LogoContainer to="/">
            <span>
                <img src={imgLogo} />
            </span>
        </LogoContainer>
    )
}