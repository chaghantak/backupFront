import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tempImg from "../tempImg.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../attackStyle.css";
import Axios from "axios";
import { BASE_URL, DATA_IMAGE_BASE_URL } from "../api";
import { autoType } from "d3";

const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpped: 2000,
    slidesToShow: 1,
    slidesToscroll: 1,
    centerMode: true,
    centerPadding: '0px',
};

export default function AttackDataDetail({data}) {
    const [toggle, setToggle] = useState(false);
    const [item, setItem] = useState([]);
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(null);
    const handleToggle = () => {
        setToggle((current) => !current);
    };

    const imagesa = [
        { url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" },
        { url: "https://analyticsindiamag.com/wp-content/uploads/2020/08/What-is-Computer-Vision-scaled.jpg" },
        { url: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/107/posts/26488/final_image/41-space-scrolling-background850-2.jpg"}
    ];

    useEffect(()=>{
        Axios({
            method: "POST",
            url: `${BASE_URL}/campaign/campaign-ttps`,
            data:  {
                ttp: data.ttps
            },
        }).then(({data})=>{
            setItem(data.items);
        })
    },[data])

    useEffect(()=>{
        Axios({
            method: "POST",
            url: `${BASE_URL}/campaign/campaign-filename`,
            data: {
                country: data.country,
                time: data.year
            }
        }).then(({ data }) => {
            let result_list = [];
            data.items.forEach(function(url) {
                let dict = {}
                dict['url'] = DATA_IMAGE_BASE_URL + url.url
                result_list.push(dict);
            });
            setImages(result_list);
        });
    }, [data]);

    const headdetail = item.map((info) => {
        return(
            <table>
                <thead>
                    <tr
                        className="tableHeadBack"
                        style={{ border: "1px solid black", width: "15%" }}
                        key={info.id}
                    >
                        <th colSpan='1'>
                            {info.name}<br/>{info.id}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {info.techniques.map((tec) => {
                            const tecId = tec.id
                            return (
                                <>
                                    <tr style={{ border: "1px solid black", width: "15%" }}>
                                        <th className="" key={tec.id}>
                                            {tec.subTechniques.length < 1 ? (
                                            <td>
                                                {tec.name}
                                            </td>
                                            ) : (
                                            `${tec.name}(${tec.subTechniques.length})`
                                            )}
                                            {tec.subTechniques.length > 0 ? (
                                            <td>
                                                <button
                                                    style={{ display: "flex" }}
                                                    onClick={() => {
                                                        setShow(tecId)
                                                        handleToggle();
                                                    }}
                                                >
                                                    =
                                                </button>
                                            </td>
                                            ) : (
                                            ""
                                            )}
                                        </th>
                                    </tr>
                                </>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        );
    });

    const bodydetail = () => {

    }


    // const headdetail = item.map((info) => {
    //     return(
    //         <th
    //             className="tableHeadBack"
    //             style={{ border: "1px solid black", width: "100%" }}
    //             key={info.id}
    //         >
    //             {info.name}<br/>{info.id}
    //         </th>
    //     );
    // });
    // const bodydetail = item.map((info) => {
    //     if (info.techniques.length > 0) {
    //         return(
    //             <>
    //                 <tr key={info.id} style={{ border: "1px solid black", width: "100%" }}>
    //                     {info.techniques.map((tec) => {
    //                         const tecId = tec.id
    //                         return (
    //                             <>
    //                                 <Table style={{ display: "flex" }}>
    //                                     <tr>
    //                                         <td className="" key={tec.id}>
    //                                             {tec.subTechniques.length < 1 ? (
    //                                                 <td>
    //                                                     {tec.name}
    //                                                 </td>
    //                                             ) : (
    //                                                 `${tec.name}(${tec.subTechniques.length})`
    //                                             )}
    //                                             {tec.subTechniques.length > 0 ? (
    //                                                 <td>
    //                                                     <button
    //                                                         style={{ display: "flex" }}
    //                                                         onClick={() => {
    //                                                             setShow(tecId)
    //                                                             handleToggle();}}
    //                                                     >
    //                                                         =
    //                                                     </button>
    //                                                 </td>
    //                                             ) : (
    //                                            ""
    //                                             )}
    //                                         </td>
    //                                     </tr>
    //                                 </Table>
    //                                 {tec.subTechniques.map((sub) => {
    //                                     const subId = tec.id;
    //                                     let cId = subId;
    //                                     if (cId == show && toggle) {
    //                                         return (
    //                                             <>
    //                                                 <tr>
    //                                                     <td key={sub.id}>
    //                                                         {sub.name}
    //                                                         <hr />
    //                                                     </td>
    //                                                 </tr>
    //                                             </>
    //                                         );
    //                                     }
    //                                 })}
    //                             </>
    //                         );
    //                     })}
    //                 </tr>
    //             </>
    //         );
    //     }
    // });

    return (
        <div className="allMargin">
            <h4>Campaign detail</h4>
            <div
                style={{
                    border: "1px solid black",
                    overflow: "auto",
                    height: "50vh",
                    width: "100vh",
                }}>
                <th>
                    {headdetail}
                </th>
                {/* <table className="MainTable">
                    <tbody>
                        <tr style={{display: "flex", top: 0, position: "sticky"}}>
                            {headdetail}
                        </tr>
                        <tr style={{display: "flex",}}>
                            {bodydetail}
                        </tr>
                    </tbody>
                </table> */}
            </div>

            <div className="footer">
                <div className="footerChild2">
                    <p> match (n:TechniqueNode) where n.name contains “Camp{data.index}_” return n</p>
                </div>
                <div className="footerChild" style={{maxHeight: "30vh", maxWidth: "40vh"}}>
                <Slider {...settings}>
                    {images.map((info) => {
                        return (
                            <div className="img">
                                <img src={info.url} width="450vh" height="289vh"/>
                            </div>
                        )
                    })}
                </Slider>
                </div>
            </div>
        </div>
    );
}


