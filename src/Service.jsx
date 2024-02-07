import React from "react";
import CardImg from "../src/Images/s1.jpg"
import Card from "./Card";
import Sdata from "./SData";

const Service = () => {
    return <>
        <div className="my-5">
            <h1 className="text-center"> Our Service</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((data, index) => {
                                return <Card imgSrc={data.imgsrc} cardTitle={data.title} key={index} />
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Service;