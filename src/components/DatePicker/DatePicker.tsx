import React, { useState } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = SpaceProps;

const DatePickerContainer = styled.div<DatePickerProps>`
  ${space};
`;

const DatePickerWrapper = styled(DatePicker)`
  display: block;
  width: 100%;
  padding: 8px;
  font-family: inherit;
  font-size: inherit;
  border: 1px solid gray;
`;

const CustomDatePicker: React.FC<DatePickerProps> = ({ ...props }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DatePickerContainer {...props}>
      <DatePickerWrapper selected={selectedDate} onChange={handleDateChange} />
    </DatePickerContainer>
  );
};

export default CustomDatePicker;