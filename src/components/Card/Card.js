import React from 'react';
import PropTypes from 'prop-types';
import Styled from './CardStyle'
// import imageFile from '../../assets/Frame2shies.png'

export default function Card({card: {id,date, title, description, state}}){
    const type = "twitter";
    const image = false;
    return (
        <Styled.Container>
            <Styled.Header>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '16px', lineHeight: '20px', color: 'rgba(0,0,0,0.5)'}} >
                    {date}
                </div>
                {
                    type === "twitter" &&
                    <div>
                        <svg width="24" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M7.53321 19C4.76035 19 2.17558 18.2227 0 16.8816c1.84714.1152 5.10692-.1607 7.1345-2.0246-3.05015-.1349-4.4257-2.3895-4.60512-3.3529.25916.0963 1.49516.2119 2.19291-.0579C1.21363 10.5984.67537 7.63083.79498 6.72515c.65787.44321 1.77427.59737 2.21285.55883C-.26161 5.02941.91459 1.63793 1.49273.90568 3.83899 4.03846 7.35532 5.79795 11.7055 5.89582c-.0821-.3467-.1254-.70765-.1254-1.07838C11.5801 2.15684 13.8115 0 16.564 0c1.4382 0 2.7341.5888 3.6437 1.53061.9611-.21704 2.4074-.72512 3.1145-1.16448-.3564 1.23326-1.466 2.26206-2.1371 2.64337.0055.01297-.0055-.01303 0 0 .5895-.08595 2.1847-.38141 2.8149-.79348-.3116.69284-1.488 1.8448-2.4534 2.48972C21.7262 12.3401 15.6656 19 7.53321 19Z" fill="#000"/></svg>
                    </div>
                }
                {
                    type === 'medium' &&
                    <div>
                        <svg width="20" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.37162 3.05996c.02484-.23193-.06878-.46118-.25211-.61728L.25211.31746V0h5.79831l4.48178 9.28572L14.4725 0H20v.31746l-1.5966 1.44621c-.1377.09912-.206.26203-.1774.42328V12.8131c-.0286.1612.0397.3241.1774.4232l1.5593 1.4462V15h-7.8432v-.3175l1.6153-1.4814c.1588-.15.1588-.194.1588-.4233V4.18871L9.40243 14.9647h-.60691L3.56676 4.18871v7.22219c-.0436.3037.06315.6094.28945.829l2.10084 2.4074v.3174H0v-.3174l2.10084-2.4074c.22465-.22.32517-.5277.27078-.829V3.05996Z" fill="#000" fill-opacity=".5"/></svg>
                    </div>
                }
            </Styled.Header>
            {
                image &&
                <Styled.Image>
                    {/* <img src={imageFile}/> */}
                </Styled.Image>
            }
            <Styled.Title>
                {title}
            </Styled.Title>
            <Styled.Description>
                {description}
            </Styled.Description>
        </Styled.Container>
    );
}