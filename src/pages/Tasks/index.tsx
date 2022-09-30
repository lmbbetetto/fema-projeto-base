import { Wrapper, Header, TaskContainer, Information } from "./styles"
import femaLogo from "../../assets/fema-logo.png"
import { PlusCircle } from "phosphor-react"

export function Tasks(){
    return(
        <TaskContainer>
            <Header>
                <img src={femaLogo} alt="Logo Fema" />
                <h1>To
                    <strong>Do</strong>
                    List
                </h1>
            </Header>

            <Wrapper>
                <form>
                    <input type="text" placeholder="Adicione uma nova tarefa" />

                    <button type="submit">Criar<PlusCircle /></button>
                </form>
                <Information>
                    <input type="text" />
                    <div>
                        <strong>
                            Tarefas criadas <span className="created">0</span>
                        </strong>
                        <strong>
                            Tarefas concluídas <span>0</span>
                            </strong>
                    </div>
                </Information>
            </Wrapper>

        </TaskContainer>
    )
}