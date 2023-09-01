import React from 'react';
import styled from 'styled-components';

type AvatarProps = {
  src?: string;
  alt: string;
  size?: number;
  fallbackSrc?: string;
};

const StyledAvatar = styled.img<AvatarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40, fallbackSrc }) => {
  const avatarSrc = src || fallbackSrc;

  return <StyledAvatar src={avatarSrc} alt={alt} size={size} />;
};

export default Avatar;