
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Forth4 = () => {

    function myfunk() {
        // alert("the button is working");
        toast("The button is working!");
    }
    return (
        <>

            <div className="box4">
                <h3>Most Popular Institues </h3>
                <h5>Most popular institutes top rated by students

                </h5>

                <div className="multibtn">
                    <button onClick={myfunk} className="btn70">UPSC</button>
                    <button onClick={myfunk} className="btn70">SCC</button>
                    <button onClick={myfunk} className="btn70">SCC</button>
                    <button onClick={myfunk} className="btn70">JEE</button>
                    <button onClick={myfunk} className="btn70">NEET</button>
                    <button onClick={myfunk} className="btn70">Python</button>
                    <button onClick={myfunk} className="btn70">Bank</button>
                    <button onClick={myfunk} className="btn70">Medical</button>
                    <button onClick={myfunk} className="btn70">Defence</button>
                </div>
                <div className="move">



                    <Swiper
                        // spaceBetween={10}
                        slidesPerView={3}
                        spaceBetween={1}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{ width: '430px' }}> <div className="paras">
                            <div className="oggy1">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>

                        <SwiperSlide style={{ width: '430px' }}> <div className="paras">
                            <div className="oggy">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide> <div className="paras">
                            <div className="oggy">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide> <div className="paras">
                            <div className="oggy1">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide> <div className="paras">
                            <div className="oggy">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide> <div className="paras">
                            <div className="oggy">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide> <div className="paras">
                            <div className="oggy">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide> <div className="paras">
                            <div className="oggy">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide> <div className="paras">
                            <div className="oggy">
                                <h6>Mode-Online</h6>
                            </div>

                            <div className="bag">
                                <div className="bag1"></div>
                                <div className="bag2">
                                    <h3>History Optional</h3>
                                    <h5>By manikant singh</h5>

                                    <div className="bagg">
                                        <div className="bag3">⭐ 4.1 </div>
                                        <div className="bag4">
                                            {" "}
                                            <h6> 32.k Review</h6>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hellokaran">
                                <h5> *
                                    Course will be deliverd by Manikant singh in online mode</h5>
                                <h5><span><h4>* validity : 6 Months</h4></span></h5>

                                {/* <h5 className="hellokaran1">Course price</h5> */}
                                <div className="hellokaran1">
                                    <h5>Course Price</h5>
                                    <h3>$ 25,000 (inc. of Taxes) </h3>
                                </div>
                            </div>

                        </div></SwiperSlide>
                    </Swiper>


                </div>
            </div>
            <ToastContainer />



        </>
    )
}
export default Forth4;
