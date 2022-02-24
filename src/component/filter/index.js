import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Select = styled.select`
    width: 12rem;
    height: 3rem;
    background: #8FD3CB;
    border: 1px solid grey;
    border-radius: 30px;
    text-align: center;
    font-size: 1.2rem;
`;

const Option = styled.option`
    border: none;
`;

const Filter = props => {
    return (
        <Select onChange={e => props.handleSearch(e)}>
            {
                props.categories.map(item => (
                    <Option 
                        key={(uuidv4())}>
                        {item}
                    </Option>
                ))
            }
        </Select>
    )
};

export default Filter;