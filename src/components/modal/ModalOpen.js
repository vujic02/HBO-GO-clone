import React, { useRef } from "react";
import {
  ModalContainer,
  ModalWrap,
  ModalItem,
  Overlay,
  ModalContent,
} from "./modal-styles";

import {
  TryoutSection,
  NameSection,
  RateSection,
  ImageSection,
} from "./modal-components/index";

const ModalOpen = ({
  showModal,
  selectedMovie,
  setShowModal,
  setSelectedMovie,
  dateSlice,
}) => {
  const modalRef = useRef();
  const imgBaseUrl = "http://image.tmdb.org/t/p/original";

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setSelectedMovie(null);
      document.body.style.overflow = "scroll";
    }
  };

  const closeModalX = () => {
    setShowModal(false);
    setSelectedMovie(null);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      {showModal && (
        <Overlay onClick={closeModal} ref={modalRef}>
          <div className="closeicon" onClick={closeModalX}>
            <span className="icon"></span>
          </div>
          <ModalItem>
            <ModalWrap>
              <ModalContainer>
                <ImageSection
                  imgBaseUrl={imgBaseUrl}
                  selectedMovie={selectedMovie}
                />
                <ModalContent>
                  <NameSection
                    selectedMovie={selectedMovie}
                    dateSlice={dateSlice}
                  />
                  <RateSection selectedMovie={selectedMovie} />
                  <TryoutSection />
                </ModalContent>
              </ModalContainer>
            </ModalWrap>
          </ModalItem>
        </Overlay>
      )}
    </>
  );
};

export default ModalOpen;
