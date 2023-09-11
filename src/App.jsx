import styled from "styled-components";
import Profile from "./components/Profile";

import UserList from "./components/UserList";

import UserState from "./context/User/UserState";

function App() {
  return (
    <Container>
      <UserState>
        <UserList />
        <Profile />
      </UserState>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 2rem;
  gap: 4rem;
`;

export default App;
