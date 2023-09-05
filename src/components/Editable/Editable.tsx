import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const EditableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  ${space};
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  ${space};
`;

const Preview = styled.div`
  padding: 8px;
  border: 1px solid #ccc;
  margin-top: 8px;
`;

export interface EditableProps {
  initialValue: string;
}

export const Editable: FC<EditableProps> = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <EditableContainer>
      <Input value={value} onChange={handleChange} mb={2} />
      <TextArea value={value} onChange={handleChange} rows={4} mb={2} />
      <Preview>{value}</Preview>
    </EditableContainer>
  );
};