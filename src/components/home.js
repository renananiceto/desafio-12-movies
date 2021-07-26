import React from "react";
import styled from "styled-components";

const Container = styled.section`
    background-color:rgba(15,23,30);
    height: 100vh;
    color: #fff;
`

function Home() {
    return (
        <Container>
            <h2>Faça sua tela inicial </h2>
        </Container>

    )

}

export default Home;
