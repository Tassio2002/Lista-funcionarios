import { render } from '@testing-library/react';
import React, { Component } from 'react'

class Form extends Component {
   initialState = {
      nome: '',
      cargo: '',
      salario: '',
   };

   state = this.initialState

   handleChange = (event) => {
      const {name, value} = event.target
   
      this.setState({
         [name]: value,
      });
   }

   submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
   }

   render() {
      const { nome, cargo, salario } = this.state;
   
      return (
         <form>
            <label htmlFor="nome">Nome</label>
            <input 
            type="text" 
            name="nome" 
            id="nome" 
            value={nome}
            onChange={this.handleChange} 
            />
   
            <label htmlFor="nome">Cargo</label>
            <input 
            type="text" 
            name="cargo" 
            id="cargo" 
            value={cargo}
            onChange={this.handleChange}
            />

            <label htmlFor="nome">Salário</label>
            <input 
            type="text" 
            name="salario" 
            id="salario" 
            value={salario}
            onChange={this.handleChange} 
            />

            <input type="button" value="Enviar" onClick={this.submitForm} />

         </form>
      );
   }
}



export default Form;

