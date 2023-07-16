import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled(NavLink)`
    height: 2.5rem;
    width:5.3125rem;
    a {
        cursor: pointer;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;