import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";


const Container = styled.section`
    background-color:rgba(15,23,30);
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Research = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const RenderCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1366px;
`
const CardsImg = styled.img`
    width: 300px;
`
const BoxCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const MoviesApi = axios.create({
    baseURL:
        "  https://api.themoviedb.org/3/movie/popular?api_key=35c82b7e74b0040b3425e82d39c3a4ec "
});

class Movies extends Component {
    state = {
        movies: [],
        filterList: []
    };

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async () => {
        const response = await MoviesApi.get();
        console.log("Filmes:", response.data.results);

        const completeMovies = response.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            };
        });

        this.setState({
            movies: completeMovies,
            filterList: completeMovies
        });
    };

    handleChange = (e) => {
        const { movies } = this.state;
        if (e.target.value === "") {
            this.setState({
                filterList: movies
            });
            return;
        }

        const filterItem = movies.filter((item) => {
            if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true;
            }
            return false;
        });
        this.setState({
            filterList: filterItem
        });
    };

    render() {
        return (
            <Container>
                <Research>
                    <h2>FILMES</h2>
                    <div>
                        <input
                            type="text"
                            placeholder="Pesquisa"
                            onChange={this.handleChange}
                        />
                    </div>
                </Research>
                <RenderCards>
                    {this.state.filterList.slice(0,16).map((item, id) => (
                        <BoxCard key={id}>
                            <CardsImg src={item.poster_path} alt="" />
                            <p>{item.title}</p>
                            <p>{item.vote_average}</p>
                        </BoxCard>
                    ))}
                </RenderCards>
            </Container>
        );
    }
}

export default Movies;
