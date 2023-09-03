import React, { Children, ReactNode } from "react";
import styled from 'styled-components';
import { space, color, SpaceProps, ColorProps } from 'styled-system';

interface IconProps extends SpaceProps, ColorProps {
    size?: number;
}

interface createIconOptions {
    displayName?: string;
    path: React.JSX.Element;
}

const StyledSVG = styled.svg<IconProps>`
  ${space}
  ${color}
`;

export function createIcon(options: createIconOptions){


   const { displayName, path } = options;

    const com: React.FC<IconProps> = ({ size, ...rest }) =>(
            <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            {...rest}
            >
                {path}
            </StyledSVG>
        );

    com.displayName = displayName


    return com;    

}
