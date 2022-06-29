import { useEffect, useState } from 'react';
import Link from "next/router";
import { useRouter } from 'next/router';
import { FaCalendar, FaShare } from "react-icons/fa";
import convertDate from 'utils/moment';

export default function CardLg({data}) {

    const history = useRouter();
    const [color, setColor] = useState(["red", "green", "yellow", "blue"]);

    const IfNotData = () => {
        if (data?.length < 0) return;
        return (
            <>
                <section>
                    <div className="container">
                        {/* <div className="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div> */}
                        <article className={"postcard " + "color[i]"}>
                    
                            da
                        </article>
                    </div>
                </section>
            </>
        )
    }

    console.info("1111fgjgfhhjhjhjhjg____" ,data);

    if(data != undefined && !data?.length > 0) return "";
    return (
        <div id='sectionLg'>
            {
                data?.map((v, i) => {
                    if (i > 4) return "";
                    return (
                        <section key={"cardlg"+i}>
                            <div className="container">
                                {/* <div className="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div> */}
                                <article className={"postcard " + color[i]}>
                                    <a className="postcard__img_link" href={"/news/" + v?.id || "/news/0"}>
                                        <img className="postcard__img" src={v?.photo64 ? "data:image/jpeg;base64,"+v?.photo64 : "/assets/images/default.png"} alt="Image Title" />
                                    </a>
                                    <div className="postcard__text t-dark">
                                        <div className="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                {convertDate(v?.date)}  <FaCalendar />
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt"> {v?.description}</div>
                                        <ul className="postcard__tagbox">
                                            {/* <li className="tag__item"><FaShare /></li> */}
                                            <li className="tag__item readMore">
                                                <a href={"/news/" + v?.id || "/news/0"}>
                                                    متابعة القراءة
                                                </a>
                                            </li>
                                            {/* <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                          <li className="tag__item play blue">
                                              <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                          </li> */}
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </section>
                    )
                }
                )
            }

            {/* <IfNotData/> */}
          
        </div>
    )
}
