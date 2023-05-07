import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/actions/categories";
import Select from "react-select";
import {createProduct, updateProduct, uploadCover, uploadImages, uploadTorrent} from "../../redux/actions/upload";
import CoverImage from "../single/CoverImage";
import SmallImages from "../single/SmallImages";
import {toast, ToastContainer} from "react-toastify";
import {useLocation, useParams} from "react-router-dom";
import qs from "query-string";

function ProductsGenerator({role}) {
    const location = useLocation();
    const dispatch = useDispatch();
    const {state} = useParams();
    const categories = useSelector((store) => store.categories.categoriesList);
    const [images, setImages] = useState([]);
    const [torrent, setTorrent] = useState([]);
    const [genre, setGenre] = useState("");
    const [productData, setProductData] = useState({
        name: "",
        desc: "",
        price: "",
        disc_price: "",
        year: "",
        company: "",
        processor: "",
        ram: "",
        op_system: "",
        videocard: "",
        disk_space: "",
    });
    const [torrentStatus, setTorrentStatus] = useState(false);
    const error = useSelector((state) => state.upload.error);
    const cover = useSelector((store) => store.util?.cover?.cover?.cover);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleAddFiles = useCallback((ev) => {
        const [file] = ev.target.files;
        if (ev.target.files.length <= 6) {
            setImages(ev.target.files);
        } else {
            toast.error("You can choose 6 photo", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [images]);

    const handleUploadInfo = useCallback((key, value) => {
        productData[key] = value;
        setProductData({...productData});
    }, []);

    const handleAddTorrent = useCallback((ev) => {
        if (ev.target.accept === "application/x-bittorrent") {
            setTorrent(ev.target.files[0]);
            if (ev.target.files[0]) setTorrentStatus(true);
        }
        if (ev.target.accept !== "application/x-bittorrent") {
            toast.error("Accept file have be only application/x-bittorrent (Torrent)", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [torrent]);

    const handleFormUpload = useCallback((ev) => {
        ev.preventDefault();
        if (state === "create") {
            dispatch(createProduct({productData, genre}));
            dispatch(uploadCover({cover, productData}));
            dispatch(uploadImages({images, productData}));
            dispatch(uploadTorrent({torrent, productData}));
        }
        if (state === "update") {
            const id = +qs.parse(location.search).id;
            dispatch(updateProduct({productData, genre, id}));
            dispatch(uploadCover({cover, productData}));
            dispatch(uploadImages({images, productData}));
            dispatch(uploadTorrent({torrent, productData}));
        }
        setProductData({
            name: "",
            desc: "",
            price: "",
            disc_price: "",
            year: "",
            company: "",
            processor: "",
            ram: "",
            op_system: "",
            videocard: "",
            disk_space: "",
        });
        setTorrent([]);
        setImages([]);
        if (error) {
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.success('Everything Ok', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [cover, productData, images, error, torrent]);

    return (
        <>
            <ToastContainer/>
            <div className="generator-block">
                <div className="images-list">
                    <CoverImage/>
                    <SmallImages images={images}/>
                </div>
                <form className="game-form" onSubmit={(ev) => handleFormUpload(ev)}>
                    <div className="form-req">
                        <label htmlFor="title">Game Title</label>
                        <input onChange={(ev) => handleUploadInfo("name", ev.target.value)} className="game-input"
                               type="text"
                               value={productData.name}
                               id="title"/>
                        <label htmlFor="company">Company</label>
                        <input onChange={(ev) => handleUploadInfo("company", ev.target.value)} className="game-input"
                               type="text"
                               value={productData.company}
                               id="company"/>
                        <label htmlFor="genre">Category</label>
                        <Select classNamePrefix="react-select" getOptionValue={(option) => option.id}
                                getOptionLabel={(option) => option.name}
                                onChange={(ev) => setGenre(ev.name)}
                                options={categories}
                                id="genre"/>
                        <div className="price-box">
                            <div>
                                <label htmlFor="price">Price</label>
                                <input onChange={(ev) => handleUploadInfo("price", ev.target.value)}
                                       className="game-input"
                                       type="number"
                                       name="price" min="0"
                                       step="any"
                                       value={productData.price}
                                       id="price"/>
                            </div>
                            <div>
                                <label htmlFor="disc_price">Disc Price</label>
                                <input onChange={(ev) => handleUploadInfo("disc_price", ev.target.value)}
                                       className="game-input"
                                       type="number"
                                       name="price" min="0"
                                       step="any"
                                       value={productData.disc_price}
                                       id="disc_price"/>
                            </div>
                        </div>
                        <label htmlFor="year">Year</label>
                        <input onChange={(ev) => handleUploadInfo("year", ev.target.value)} className="game-input"
                               type="date"
                               value={productData.year}
                               id="year"/>
                        <label htmlFor="desc">Description</label>
                        <textarea onChange={(ev) => handleUploadInfo("desc", ev.target.value)} className="game-textare"
                                  value={productData.desc}
                                  id="desc"></textarea>
                        <div className="file-btns">
                            <div className="file-btns">
                                <label className="file-lable">
                                    Choose Images
                                    <input
                                        type="file"
                                        multiple
                                        max={6}
                                        className="file-btn"
                                        accept="iamge/*"
                                        onChange={(ev) => handleAddFiles(ev)}
                                    />
                                </label>
                                <label style={{background: torrentStatus ? "green" : ""}} className="file-lable">
                                    Choose Torrent
                                    <input
                                        type="file"
                                        multiple
                                        className="file-btn"
                                        accept="application/x-bittorrent"
                                        onChange={(ev) => handleAddTorrent(ev)}
                                    />
                                </label>
                            </div>
                        </div>
                        <button className="file-lable create"
                                type={"submit"}>{state === "create" ? "Create" : state === "update" ? "Update" : null}</button>
                    </div>
                    <div className="form-req">
                        <label htmlFor="processor">Processor</label>
                        <input onChange={(ev) => handleUploadInfo("processor", ev.target.value)} className="game-input"
                               type="text"
                               value={productData.processor}
                               id="processor"/>
                        <label htmlFor="ram">Ram</label>
                        <input onChange={(ev) => handleUploadInfo("ram", ev.target.value)} className="game-input"
                               value={productData.ram}
                               type="text"
                               id="ram"/>
                        <label htmlFor="op_system">Operating System</label>
                        <input onChange={(ev) => handleUploadInfo("op_system", ev.target.value)} className="game-input"
                               value={productData.op_system}
                               type="text"
                               id="op_system"/>
                        <label htmlFor="videocard">Video card</label>
                        <input onChange={(ev) => handleUploadInfo("videocard", ev.target.value)} className="game-input"
                               value={productData.videocard}
                               type="text"
                               id="videocard"/>
                        <label htmlFor="disk_space">Hard disk space</label>
                        <input onChange={(ev) => handleUploadInfo("disk_space", ev.target.value)} className="game-input"
                               value={productData.disk_space}
                               type="text"
                               id="disk_space"/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProductsGenerator;
