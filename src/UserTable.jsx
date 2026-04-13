import React from 'react';
// Importamos los componentes necesarios de Material UI
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

const UserTable = () => {
  // 1. Arreglo con 5 elementos (nombre, apellido, edad)
  // Nota: 2 son menores de edad (17 o menos)
  const usuarios = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 25 },
    { nombre: 'María', apellido: 'García', edad: 17 }, // Menor de edad
    { nombre: 'Carlos', apellido: 'Rodríguez', edad: 30 },
    { nombre: 'Ana', apellido: 'Martínez', edad: 15 }, // Menor de edad
    { nombre: 'Luis', apellido: 'Sánchez', edad: 22 }
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 700, margin: '20px auto', boxShadow: 3 }}>
      <Table aria-label="tabla de usuarios">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#1976d2' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nombre</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Apellido</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 2. Mostramos el resultado usando .map() dentro del JSX */}
          {usuarios.map((usuario, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{usuario.nombre}</TableCell>
              <TableCell>{usuario.apellido}</TableCell>
              <TableCell align="right">{usuario.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;

