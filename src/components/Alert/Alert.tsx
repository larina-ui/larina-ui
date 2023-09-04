import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps, layout, background, backgroundColor, LayoutProps, variant, VariantArgs, BackgroundProps, BackgroundColorProps } from 'styled-system';

export interface AlertProps extends SpaceProps, LayoutProps, BackgroundColorProps {
  variant: 'success' | 'warning' | 'error';
  statusIcon: ReactNode;
  title: string;
  description?: string;
}

const AlertContainer = styled.div<{ variant: AlertProps['variant'] }>`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  ${variant<VariantArgs>({
    prop: 'variant',
    variants: {
      success: {
        backgroundColor: 'green.50',
        color: 'green.50',
      },
      warning: {
        backgroundColor: 'yellow.100',
        color: 'yellow.900',
      },
      error: {
        backgroundColor: 'red.100',
        color: 'red.900',
      },
    },
  })}
  ${space}
  ${layout}
`;

const StatusIcon = styled.span`
  margin-right: 12px;
`;

const Title = styled.h4`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
`;

const Alert: FC<AlertProps> = ({ variant, statusIcon, title, description, ...rest }) => {
  return (
    <AlertContainer variant={variant} {...rest}>
      {statusIcon && <StatusIcon>{statusIcon}</StatusIcon>}
      <div>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </div>
    </AlertContainer>
  );
};

export default Alert;