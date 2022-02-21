import React from 'react';
import PropTypes from 'prop-types';
import Styled from './CardStyle'
export default function Card({card: {id,date, title, description, state}}){
    return (
        <Styled.Container>
            <Styled.Date>
                {date}
            </Styled.Date>
            <Styled.Title>
                {title}
            </Styled.Title>
            <Styled.Description>
                {description}
            </Styled.Description>
        </Styled.Container>
    );
}