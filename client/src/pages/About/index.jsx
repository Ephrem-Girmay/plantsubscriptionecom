// import { useNavigate } from 'react-router-dom';
import { Img, Main, Wrapper, Info, Header, H4, P } from './styled';
import logo from '../../public/images/Dark Gray Minimalist Bonsai Shop Business Logo (2).png';

const About = () => {
    // const navigate = useNavigate();
    // navigate('../');

    return (
        <Main>
            <Wrapper>
                <Header>
                    <h2>ABOUT</h2>
                </Header>

                <Img src={logo} alt="logo" />
            </Wrapper>
            <Info>
                <H4>
                    Planteplaneter are small decorative “planets”, designed as
                    an alternative to the ordinary houseplant.
                </H4>
                <P>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </P>
            </Info>
        </Main>
    );
};

export default About;
