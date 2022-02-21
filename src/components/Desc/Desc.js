import React from 'react';
import PropTypes from 'prop-types';
import Styled from './DescStyle'
import {BsPlayCircle} from 'react-icons/bs'
export default function Desc({desc: {play,icon,title,description,button, buttonTitle}}){
    return(
        <Styled.Container>
            {
                play &&
                <BsPlayCircle size={36}/>
            }
            {
                icon &&
                <>
                </>
            }
            <Styled.Title>
                {title}
            </Styled.Title>
            <Styled.Description>
                {description}
            </Styled.Description>
            {
                button &&
                <Styled.Button>
                    
                </Styled.Button>
            }
        </Styled.Container>
    )
}