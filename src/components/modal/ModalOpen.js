import React, {useRef} from 'react';
import {ImgContainer, ModalContainer, ModalH3, ModalImg, ModalWrap, ModalItem, Overlay, MovieName, MovieText, NameContainer, RateWrapper, RateContainer, StarIcon, IconContainer, RateText, TextContainer, TryoutSection, TryoutContainer, ModalContent, TryoutText ,TryoutLogo, TryoutBtn} from './modal-styles'
import logo from './logo.png'

const ModalOpen = ({showModal, selectedMovie, setShowModal, setSelectedMovie, dateSlice}) => {

    const modalRef = useRef();
    const imgBaseUrl = 'http://image.tmdb.org/t/p/original';


    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            setShowModal(false);
            setSelectedMovie(null);
            console.log('No movie is selected and modal is not active!<br>Show Modal: ', showModal);
            document.body.style.overflow = "scroll";
        }
      }

      const closeModalX = () => {
            setShowModal(false);
            setSelectedMovie(null);
            console.log('No movie is selected and modal is not active!<br>Show Modal: ', showModal);
            document.body.style.overflow = "scroll";
      }


    return (
        <>
            {showModal && (
                <Overlay onClick={closeModal} ref={modalRef}>
                <div className="closeicon" onClick={closeModalX}><span></span></div>
                    <ModalItem>
                        <ModalWrap>
                            <ModalContainer>
                                <ImgContainer>
                                    <ModalImg src={imgBaseUrl + selectedMovie.backdrop_path} />
                                    <ModalH3>{selectedMovie.title || selectedMovie.original_name}</ModalH3>
                                </ImgContainer>
                                <ModalContent>
                                    <NameContainer>
                                        <MovieText><MovieName>{selectedMovie.title || selectedMovie.original_name}</MovieName>     |     {dateSlice(selectedMovie.release_date, selectedMovie.first_air_date)}</MovieText>
                                    </NameContainer>
                                    <RateWrapper>
                                        <RateContainer>
                                            <IconContainer>
                                                <StarIcon />
                                            </IconContainer>
                                            <TextContainer>
                                                <RateText style={{marginLeft: 15}}>
                                                    <span>Rating: </span> {selectedMovie.vote_average} <span>/ 10</span>
                                                </RateText>
                                            </TextContainer>
                                        </RateContainer>
                                    </RateWrapper>
                                    <TryoutSection>
                                        <TryoutContainer>
                                            <TryoutText weight="500" size="1.5rem" resize="1.2rem" resize2="0.9rem">Enjoy over<br/>6500 hours of content</TryoutText>
                                            <TryoutText weight="300" size="1rem" resize="0.9rem" resize2="0.6rem">300 series, 850 movies,<br/> kids shows and documentaries</TryoutText>
                                            <TryoutText weight="300" size="0.8rem" resize="0.8rem" resize2="0.5rem">Only 5.99 € after free trial</TryoutText>
                                        </TryoutContainer>
                                        <TryoutContainer>
                                            <TryoutLogo src={logo} />
                                            <TryoutText weight="400" size="1.5rem" resize="1.2rem" resize2="1rem">Try 7 days for free</TryoutText>
                                        </TryoutContainer>
                                        <TryoutContainer>
                                            <TryoutText weight="400" size="0.8rem"  resize="0.6rem" resize2="0.5rem">
                                            Hit series, local production, hit blockbusters<br/> and cartoons.<br/>
                                            Everything on your local language. Stream on your favourite screen.</TryoutText>
                                            <TryoutBtn resize="0.8rem" resize2="0.5rem">Start Free Trial</TryoutBtn>
                                        </TryoutContainer>
                                    </TryoutSection>
                                </ModalContent>
                            </ModalContainer>
                        </ModalWrap>
                    </ModalItem>
                </Overlay>) 
            }
            </>
    )
}

export default ModalOpen
