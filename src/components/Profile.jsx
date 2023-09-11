import { useContext } from "react";
import UserContext from "../context/User/UserContext";
import styled from "styled-components";

export default function Profile() {
  const { selectedUser } = useContext(UserContext);
  return (
    <>
      {selectedUser !== null ? (
        <Container>
          <img src={selectedUser.avatar} />
          <p>{selectedUser.first_name} {selectedUser.last_name}</p>
          <span>{selectedUser.email}</span>
        </Container>
      ) : (
        <h2>Selected User</h2>
      )}
    </>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 21%;
        border-radius: 50%;
    }
`;