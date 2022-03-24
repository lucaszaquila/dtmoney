import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useEffect } from "react";
import { api } from "../../services/api";

export function Summary() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])

    return (
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="Entradas" />
               </header>
               <strong>R$1000,00</strong>
           </div>
           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="Saídas" />
               </header>
               <strong>- R$5000,00</strong>
           </div>
           <div className="highlight-background">
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="Total" />
               </header>
               <strong>R$1000,00</strong>
           </div>
       </Container>
    )
}