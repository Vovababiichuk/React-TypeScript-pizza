import React, { useState } from 'react';
import { Box, Image, Select } from '@chakra-ui/react';
import './style.css';

const options = [
  { label: 'Піца Європейська', value: 'european', image: 'public/img/hit/1.png' },
  { label: 'Піца з Мяса', value: 'meat', image: 'public/img/hit/2.png' },
  // Додайте інші опції та шляхи до зображень
];

export const SelectWithImages = ({ value, onChange }) => {
  return (
    <Box>
      <Select
      borderColor="orange.300"
        className="select-photo select-style"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Виберіть фото">
        {options.map((option) => (
          <option key={option.value} value={option.value} data-image={option.image}>
            {option.label}
          </option>
        ))}
      </Select>
      {value && (
        <Image
          src={options.find((option) => option.value === value)?.image}
          alt="Selected Option"
          w="70px"
          h="50px"
					backgroundRepeat={"no-repeat"}
					backgroundSize={"cover"}
        />
      )}
    </Box>
  );
};
