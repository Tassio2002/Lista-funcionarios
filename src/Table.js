import React, { Component } from 'react';

//Esse componente simples é o head da tábela
const TableHeader = () => {
   return (
      <thead>
         <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Salário</th>
            <th>Remover</th>
         </tr>
      </thead>
   )
}

const TableBody = props => { 
   const rows = props.characterData.map((row, index) => {
       return (
           <tr key={index}>
               <td>{row.nome}</td>
               <td>{row.cargo}</td>
               <td>{row.salario}</td>
               <td><button onClick={() => props.removeCharacter(index)}>Deletar</button></td>
           </tr>
       );
   });

   return <tbody>{rows}</tbody>;
}

const Table = (props) => {
   const {characterData, removeCharacter} = props
 
   return (
      <table>
         <TableHeader />
         <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
   ); 
 }



export default Table;