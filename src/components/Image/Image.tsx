import React, { useState } from 'react';
import styled from 'styled-components';

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  placeholderSrc?: string;
};

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, placeholderSrc }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <>
      {isLoading && placeholderSrc && <StyledImage src={placeholderSrc} alt="Placeholder" width={width} height={height} />}
      {isLoading && !placeholderSrc && <span>Loading...</span>}
      {isError && <span>Error loading image.</span>}
      {!isLoading && !isError && (
        <StyledImage src={src} alt={alt} width={width} height={height} onLoad={handleLoad} onError={handleError} />
      )}
    </>
  );
};

export default Image;