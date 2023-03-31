import React, {useState} from 'react';
import './App.css';

function App() {
 
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [valorIMC, setValorIMC] = useState(0);
 
 function adicionarValor(elemento){
    setPeso(elemento.target.value);
 }

 function calcularImc(){
  let imc;
  imc = peso / (altura * altura)*10000;
  setValorIMC(imc.toFixed(2))
 }
 
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>Calcule o seu IMC</h1>
            <p>Informe o peso</p>
            <input type='number' name='peso' id='peso' 
            value={peso} onChange={adicionarValor} placeholder='Ex: 120 ' required />
            <p>Informe a altura</p>
            <input type='number' name='altura' id='altura' 
            value={altura} onChange={evt => setAltura(evt.target.value)} placeholder='Ex: 188' required />
            <p>Aperte o botão para calcular</p>
            <button value='calcular' id='botao' onClick={calcularImc} >Botão</button>
            <p className='resultado'>Resultado: {valorIMC}</p> 
          </div>
          <div>
            <ul>
              <li>Menor que 18.5 - Magro</li>
              <li>Entre 18.5 e 24.9 - Normal</li>
              <li>Entre 25 e 29.9 - Sobrepeso</li>
              <li>Entre 30 e 39.9 - Obesidade</li>
              <li> Acima de 40 - Obesidade grave</li>
            </ul>
          </div>
            
      </header>
    </div>
  );
}

export default App;
