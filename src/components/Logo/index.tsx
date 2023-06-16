import imgLogo from '../../assets/logo.png';
import { LogoContainer } from './styles';

export default function Logo(){
    return (
        <LogoContainer>
            <a href='#'>
                <img src={imgLogo} />
            </a>
        </LogoContainer>
    )
}