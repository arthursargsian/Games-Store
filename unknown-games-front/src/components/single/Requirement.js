import React from "react";
import moment from "moment/moment";

function Requirement({singleData}) {
    return (<>
            <div className="single__info">
                <div className="info-block">
                    <h5 className="info__item"><span>Title: </span> {singleData.name}</h5>
                    <h5 className="info__item"><span>Genre: </span>{singleData.genres.map((item) => item.name + ",  ")}</h5>
                    <h5 className="info__item">
                        <span>Release date: </span> {moment(singleData.year).format('LL')}
                    </h5>
                    <h5 className="info__item"><span>Developer: </span> Rockstar Games</h5>
                </div>
                <div className="info-block">
                    <h3 className="indo-tit">SYSTEM REQUIREMENTS</h3>
                    <h5 className="info__item"><span>Operating System: </span> {singleData.op_system}</h5>
                    <h5 className="info__item"><span>Processor: </span> {singleData.processor}</h5>
                    <h5 className="info__item"><span>RAM: </span> {singleData.ram}</h5>
                    <h5 className="info__item"><span>Video card: </span> {singleData.videocard}</h5>
                    <h5 className="info__item"><span>Hard disk space: </span> {singleData.disk_space}</h5>
                </div>
            </div>
        </>
    )
        ;
}

export default Requirement;
