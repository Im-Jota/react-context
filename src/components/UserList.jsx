import { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";
import styled from "styled-components";

export default function UserList() {
  const { getUsers, getProfile, users } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      {users?.map((row) => {
        return (
            <a href="#!" onClick={() => getProfile(row.id)} key={row.id}>
                <p>{row.first_name}</p>
                <img src={row.avatar} />
            </a>
        );
      })}
    </Container>
  );
}

const Container = styled.div`


    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        justify-content: space-between;
        border-bottom: .1rem solid white;
        border-left: .2rem solid #202020;
        padding: .5rem;
        transition: .5s ease-in;

        &:hover {
            background: gray;
            border-left: .2rem solid white;
        }

        &:first-child {
            border-radius: 1rem 1rem 0 0;
        }
        
        &:last-child {
            border-bottom: none;
            border-radius: 0 0 1rem 1rem;
        }

    }

    img {
        width: 12%;
        border-radius: 50%;
    }
`;