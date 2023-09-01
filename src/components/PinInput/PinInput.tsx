import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

type PinInputProps = {
  length: number;
  onChange: (pin: string) => void;
};

const PinContainer = styled.div`
  display: flex;
`;

const PinDigit = styled.input`
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
`;

const PinInput: React.FC<PinInputProps> = ({ length, onChange }) => {
  const [pin, setPin] = useState<string>('');
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPin = e.target.value;

    if (newPin.length <= 1) {
      setPin((prevPin) => {
        const updatedPin = prevPin.split('');
        updatedPin[index] = newPin;
        return updatedPin.join('');
      });

      if (newPin.length === 1 && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handlePinBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && !pin[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    onChange(pin);
  }, [pin, onChange]);

  const renderPinDigits = () => {
    const pinDigits = [];

    for (let i = 0; i < length; i++) {
      const pinDigit = (
        <PinDigit
          key={i}
          type="text"
          maxLength={1}
          value={pin[i] || ''}
          onChange={(e) => handlePinChange(e, i)}
          onKeyDown={(e) => handlePinBackspace(e, i)}
          ref={(inputRef) => {
            inputRefs.current[i] = inputRef as HTMLInputElement;
          }}
        />
      );

      pinDigits.push(pinDigit);
    }

    return pinDigits;
  };

  return <PinContainer>{renderPinDigits()}</PinContainer>;
};

export default PinInput;