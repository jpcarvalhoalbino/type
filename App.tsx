import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { useState } from 'react';


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);


  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <Header 
        onOpenNewTransacionModal={handleOpenNewTransactionModal}
        onIsNewTransactionModalClose={isNewTransactionModalOpen}
        curso="SI"
      />

      <Dashboard />


      <GlobalStyle />
    </div>
  )
}