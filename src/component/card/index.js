import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 0.5rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    margin: 0.5rem;

    :hover {
        background: #f9f9f9;
    }
`;

const DeleteContainer = styled.div`
    text-align: end;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    cursor: pointer
`;

const IconContainer = styled.div`
    display: flex;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem
`;

const Item = styled.div`
    margin: 0.2rem
`;


const Card = props => {
    const [movies, setMovies] = useState(props.data);
    const [movie, setMovie] = useState(props.movie);

    const handleDelete = () => {
        const match = movies.filter(item => item.id !== movie.id);
        props.setData(match);
    };

    const handleLike = () => {
        setMovie(prestate => ({
            ...prestate, likes: prestate.likes + 1}
        ));
    };

    const handleDislike = () => {
        setMovie(prestate => ({
            ...prestate, dislikes: prestate.dislikes - 1}
        ));
    };

    return (
        <Container>
            <DeleteContainer>
                <Image src="/delete.png" alt="delete icon" onClick={handleDelete} />
            </DeleteContainer>
                <BodyContainer>
                    <h2>{movie.title}</h2>
                    <p>{movie.category}</p>
                        <IconContainer>
                            <Content>
                                <Item>
                                    <Image src="/like.png" alt="likes icon" width={20} height={20} onClick={handleLike} />
                                </Item>
                                <Item>
                                    <p>{movie.likes}</p>
                                </Item>
                            </Content>
                            <Content>
                                <Item>
                                    <Image src="/dislike.png" alt="dislikes icon" width={20} height={20} onClick={handleDislike} />
                                </Item>
                                <Item>
                                    <p>{movie.dislikes}</p>   
                                </Item>
                            </Content>
                    </IconContainer>
                </BodyContainer>
        </Container>
    );
};

export default Card;