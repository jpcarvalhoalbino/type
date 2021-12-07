
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
         <h1>
                1.Perfil
            </h1>
            <span>
                Qual o seu <strong> cargo </strong> na empresa?
            </span>
            <select name="opcoes" id="select">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="outro">outro</option>
            </select>

           <input type="Select" />
           
            <span>
            Qual a <strong> area </strong> do seu departamento
            </span>
            <select name="opcoes" id="select">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="outro">outro</option>
            </select>

           <input type="Select" />
           <h1>2.Produto</h1>
            <span>
                por favor informe quais os produtos abaixo que voce possui dentro da <strong> linha RH de TOTVS</strong>
            </span>
           <hr>
            RH RM"
         <hr>
           RH Datasul"
          <hr>
        Nenhuma das opções"
        <hr>
        </Container>
    )
}