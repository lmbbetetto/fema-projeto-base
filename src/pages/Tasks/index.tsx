import {
  Header,
  TasksContainer,
  Wrapper,
  Information,
  TasksList,
  Task,
  EmptyContainer,
} from "./styles";

import femaLogo from "../../assets/fema-logo.png";
import { PlusCircle, Circle, Trash, ClipboardText } from "phosphor-react";

export function Tasks() {
  return (
    <TasksContainer>
      <Header>
        <img src={femaLogo} />
        <h1>
          To
          <strong>Do</strong>
          List
        </h1>
      </Header>

      <Wrapper>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button type="submit">
            Criar <PlusCircle />
          </button>
        </form>

        <Information>
          <input type="text" placeholder="Pesquise por uma tarefa" />

          <div>
            <strong>
              Tarefas Criadas <span className="created">0</span>
            </strong>
            <strong>
              Tarefas Concluídas <span>0</span>
            </strong>
          </div>
        </Information>

        {/* <TasksList>
          <Task>
            <button type="button">
              <Circle />
            </button>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button type="button">
              <Trash />
            </button>
          </Task>

          <Task>Teste</Task>
          <Task>Teste</Task>
        </TasksList> */}

        <EmptyContainer>
          <ClipboardText size={56} />

          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seis itens a fazer
          </p>
        </EmptyContainer>
      </Wrapper>
    </TasksContainer>
  );
}
