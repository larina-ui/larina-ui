import React from 'react';
import styled from 'styled-components';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  color: #666;
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;