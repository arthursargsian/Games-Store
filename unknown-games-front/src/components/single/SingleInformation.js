import React, {useCallback, useState} from "react";
import Modal from "react-modal";

function SingleInformation({singleData}) {
    const [modal, setModal] = useState(false);
    const [modalImg, setModalImg] = useState("");

    const handleOpenModal = useCallback((imageModal, image) => {
        setModal(imageModal);
        setModalImg(image);
    }, [modal, modalImg]);

    return (
        <>
            <div className="single__description">
                <h2 className="desc__title">Description Game</h2>
                <p className="desc">
                    {singleData.desc}
                </p>
            </div>
            <div className="item-screenstop">
                {singleData.small_img.map((item, i) => (
                    <div className="item" onClick={() => handleOpenModal(true, item.name)} key={i}>
                        <img src={`http://localhost:5000/images/small/${item.name}`} alt="x"/>
                    </div>))}
            </div>
            <Modal
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                style={customStyles}
            >
                <img className="modal-img" src={`http://localhost:5000/images/small/${modalImg}`} alt="x"/>
            </Modal>
        </>
    );
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 1600,
        height: 900,
        background: 'transparent',
        border: 0
    },
};

export default SingleInformation;
