import styled from "styled-components";
import ImageMapper from "react-image-mapper";
import { useEffect, useState } from "react";

import { gsap } from "gsap";
import { useRef } from "react";

const num = 2;
export default function Test() {
  const img1 = useRef();
  const img2 = useRef();
  const [masterplaneMap, setMasterPlaneMap] = useState({
    name: "owest",
    areas: [
      {
        statues: "available",
        shape: "poly",
        coords: [
          835,
          695,
          886,
          748,
          941,
          799,
          905,
          848,
          854,
          889,
          802,
          903,
          738,
          920,
          688,
          932,
          645,
          939,
          639,
          937,
          635,
          920,
          628,
          906,
          705,
          841,
          746,
          805,
          782,
          760,
          787,
          748,
          803,
          721,
        ],
        preFillColor: "rgb(0,189,207,0)",
        fillColor: "rgb(0,189,207,0.2)",
        strokeColor: "rgb(0,189,207,1)",
        lineWidth: 3,
        name: "hillside",
        phaseimageurl: null,
      },
      {
        statues: "available",
        shape: "poly",
        coords: [
          619,
          891,
          572,
          826,
          503,
          746,
          491,
          715,
          488,
          683,
          469,
          657,
          571,
          640,
          706,
          616,
          742,
          611,
          810,
          687,
          819,
          698,
          795,
          730,
          783,
          752,
          761,
          778,
          736,
          811,
          696,
          843,
        ],
        preFillColor: "rgb(0,189,207,0)",
        fillColor: "rgb(0,189,207,0.2)",
        strokeColor: "rgb(0,189,207,1)",
        lineWidth: 3,
        name: "whyte",
        phaseimageurl: null,
      },
      {
        statues: "available",
        shape: "poly",
        coords: [
          956,
          772,
          847,
          674,
          857,
          652,
          918,
          622,
          968,
          619,
          978,
          618,
          985,
          662,
          987,
          693,
          987,
          723,
          982,
          751,
          974,
          769,
        ],
        preFillColor: "rgb(0,189,207,0)",
        fillColor: "rgb(0,189,207,0.2)",
        strokeColor: "rgb(0,189,207,1)",
        lineWidth: 3,
        name: "club res",
        phaseimageurl: null,
      },
      {
        statues: "available",
        shape: "poly",
        coords: [
          582,
          557,
          572,
          466,
          795,
          423,
          846,
          472,
          849,
          481,
          816,
          497,
          756,
          521,
          706,
          543,
        ],
        preFillColor: "rgb(0,189,207,0)",
        fillColor: "rgb(0,189,207,0.2)",
        strokeColor: "rgb(0,189,207,1)",
        lineWidth: 3,
        name: "tulwa",
        phaseimageurl: null,
      },
      {
        statues: "sold",
        shape: "poly",
        coords: [
          1089,
          624.0000152587891,
          1180,
          513.0000152587891,
          1036,
          396.00001525878906,
          948,
          302.00001525878906,
          900,
          268.00001525878906,
          862,
          245.00001525878906,
          853,
          237.00001525878906,
          845,
          238.00001525878906,
          833,
          268.00001525878906,
          830,
          311.00001525878906,
          804,
          399.00001525878906,
          798,
          414.00001525878906,
          832,
          446.00001525878906,
          828,
          454.00001525878906,
          886,
          490.00001525878906,
          914,
          517.0000152587891,
          972,
          533.0000152587891,
          1005,
          548.0000152587891,
          1034,
          569.0000152587891,
          1064,
          599.0000152587891,
        ],
        preFillColor: "rgb(255,58,0,0.1)",
        fillColor: "rgb(255,58,0.4)",
        strokeColor: "rgb(255,58,0,1)",
        lineWidth: 3,
        name: "phase 5",
        phaseimageurl: null,
      },
      {
        statues: "sold",
        shape: "poly",
        coords: [
          641,
          933,
          465,
          1006,
          386,
          913,
          337,
          836,
          307,
          807,
          289,
          769,
          342,
          733,
          358,
          722,
          401,
          694,
          450,
          650,
          460,
          654,
          478,
          676,
          490,
          715,
          501,
          759,
          557,
          829,
          583,
          855,
          616,
          895,
        ],
        preFillColor: "rgb(255,58,0,0.1)",
        fillColor: "rgb(255,58,0.4)",
        strokeColor: "rgb(255,58,0,1)",
        lineWidth: 3,
        name: "phase 6",
        phaseimageurl: null,
      },
      {
        statues: "sold",
        shape: "poly",
        coords: [
          741,
          333,
          738,
          263,
          709,
          232,
          607,
          295,
          553,
          336,
          505,
          375,
          505,
          384,
          535,
          412,
          555,
          423,
          588,
          382,
          619,
          365,
          638,
          346,
          638,
          342,
        ],
        preFillColor: "rgb(255,58,0,0.1)",
        strokeColor: "rgb(255,58,0,1)",
        lineWidth: 3,
        name: "phase 7",
        phaseimageurl: null,
      },
      {
        statues: "under construction",
        shape: "poly",
        coords: [
          412,
          577,
          462,
          567,
          560,
          561,
          855,
          485,
          912,
          524,
          982,
          534,
          1019,
          564,
          1079,
          632,
          1073,
          666,
          1015,
          729,
          995,
          749,
          992,
          752,
          984,
          726,
          985,
          707,
          984,
          651,
          986,
          638,
          982,
          621,
          982,
          615,
          975,
          609,
          949,
          616,
          897,
          624,
          882,
          632,
          867,
          629,
          853,
          612,
          838,
          600,
          824,
          589,
          801,
          596,
          769,
          604,
          702,
          614,
          624,
          630,
          521,
          635,
          462,
          645,
        ],
        preFillColor: "rgb(256,256,256,0.3)",
        fillColor: "rgb(256,256,256,0.2)",
        lineWidth: 3,
        name: "phase 8",
        phaseimageurl: null,
        active: false,
      },
      {
        statues: "under construction",
        shape: "poly",
        coords: [
          572,
          559,
          568,
          466,
          360,
          489,
          325,
          500,
          231,
          562,
          222,
          600,
          228,
          694,
          261,
          749,
          290,
          760,
          446,
          661,
          452,
          628,
          436,
          608,
          409,
          576,
          400,
          568,
        ],
        preFillColor: "rgb(256,256,256,0.3)",
        fillColor: "rgb(256,256,256,0.3)",
        lineWidth: 3,
        name: "phase 9",
        phaseimageurl: null,
        active: false,
      },
      {
        statues: "under construction",
        shape: "poly",
        coords: [
          832,
          674,
          753,
          623,
          805,
          599,
          838,
          604,
          855,
          628,
          860,
          636,
          860,
          645,
        ],
        preFillColor: "rgb(256,256,256,0.3)",
        fillColor: "rgb(256,256,256,0.3)",
        lineWidth: 3,
        name: "phase 10",
        phaseimageurl: null,
        active: false,
      },
      {
        statues: "under construction",
        shape: "poly",
        coords: [
          717,
          221,
          774,
          200,
          826,
          246,
          825,
          328,
          817,
          334,
          792,
          416,
          738,
          437,
          691,
          439,
          604,
          454,
          577,
          457,
          568,
          440,
          561,
          425,
          629,
          353,
          656,
          344,
          706,
          335,
          729,
          334,
          742,
          336,
          743,
          304,
          742,
          280,
        ],
        preFillColor: "rgb(256,256,256,0.3)",
        fillColor: "rgb(256,256,256,0.3)",
        lineWidth: 3,
        name: "phase 11",
        phaseimageurl: null,
        active: "false",
      },
    ],
  });
  const [showareaproperty, setShowAreaProperty] = useState(false);
  const [clickedareaname, setclickedareaname] = useState("");
  const [active, setActive] = useState(true);
  const [clickedpos, setClickedPos] = useState({ top: 0, left: 0 });
  const [properties, setproperties] = useState([]);
  const [filterchange, setfilterchange] = useState([]);
  const [x, setx] = useState(2);
  // console.log("reload");
  const clicked = (area) => {
    const [ax, by] = area.center;
    var tl = gsap.timeline();

    tl.to(img1.current, {
      transformOrigin: `${ax}px ${by}px `,
      transform: "scale(3)",
      duration: 2,
    });
    tl.fromTo(
      img1.current,
      { opacity: 1 },
      { opacity: 0, duration: 0.5 },
      "-=1.5"
    );
    tl.fromTo(
      img2.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=1.5"
    );
    tl.fromTo(img1.current, { zIndex: 10 }, { zIndex: 9 });
    tl.fromTo(img2.current, { zIndex: 9 }, { zIndex: 10 });
  };

  const filterMap = (e) => {
    const bedsnumber = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setfilterchange([...filterchange, bedsnumber]);
    } else {
      setfilterchange(() => {
        const newfilter = filterchange.filter(
          (currfilter) => currfilter != bedsnumber
        );
        return newfilter;
      });
    }
  };

  useEffect(() => {
    console.log(masterplaneMap);
    setActive(false);
    setActive(true);
  }, [masterplaneMap]);

  // useEffect(() => {
  //   console.log(filterchange);
  //   setMasterPlaneMap(() => {
  //     const newmaster = masterplaneMap.areas.map((obj) => {
  //       console.log(obj.beds.includes(filterchange), obj.beds);
  //       if (filterchange.includes(obj.beds)) {
  //         let newobj = {
  //           ...obj,
  //           preFillColor: obj.coolorpre,
  //         };
  //         return newobj;
  //       } else {
  //         let { preFillColor, ...y } = obj;
  //         return y;
  //       }
  //     });
  // console.log(
  //   { ...newmaster, name: "masterplanetest", areas: [...newmaster] },
  //   masterplaneMap
  // );
  // const f = { ...newmaster, name: "aloooo", areas: [...newmaster] };

  // console.log(isEqual(f, masterplaneMap));
  // console.log({ ...masterplaneMap, areas: [...newmaster] });
  //     return { ...masterplaneMap, areas: [...newmaster] };
  //   });
  //   if (x - 1 == 0) {
  //     setx(x + 1);
  //   } else {
  //     setx(x - 1);
  //   }
  // }, [filterchange]);

  return (
    <MainContainer clickedpos={clickedpos}>
      <div className="img1" ref={img1}>
        <ImageMapper
          src={
            "https://i.ibb.co/3dqFHkn/Whats-App-Image-2022-06-01-at-4-28-18-PM.jpg"
          }
          map={masterplaneMap}
          width={1000}
          imgWidth={1280}
          lineWidth={x}
          // onLoad={() => load()}
          onClick={(area) => clicked(area)}
          // onMouseEnter={(area) => enterArea(area)}
          // onMouseLeave={(area) => leaveArea(area)}
          // onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
          // onImageClick={(evt) => clickedOutside(evt)}
          // onImageMouseMove={(evt) => moveOnImage(evt)}
        />
      </div>
      <div className="img" ref={img2}>
        <img src="/assets/imgs/Whyt.jpg" />
      </div>
      {showareaproperty && properties && (
        <div className="tooltip">{clickedareaname}</div>
      )}
      <div className="parent">
        <div className="testt"></div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  @keyframes example {
    0% {
      width: 50px;
    }
    25% {
      width: 100px;
    }
    50% {
      width: 150px;
    }
    100% {
      width: 200px;
    }
  }
  margin: 50px 0px;

  height: 2000px;
  overflow: auto;

  .testt {
    width: 100px;
    height: 100px;
    background-color: gray;
    border-radius: 50%;
    margin: 50px 50px;
  }
  .parent {
    width: 0px;
    height: 200px;
    border: 1px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .tooltip {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: ${(props) =>
      props.clickedpos.left ? props.clickedpos.left + "px" : "unset"};
    top: ${(props) =>
      props.clickedpos.top ? props.clickedpos.top + "px" : "unset"};
    width: 500px;
    padding: 10px;
    /* transform: translate3d(-50%, -50%, 0);  */
    border-radius: 5px;
    pointer-events: none;
    z-index: 999999999;
    background-color: white;
    width: auto;
    height: 30px;

    opacity: 1 !important ;
    .testproperty {
      width: 450px;
    }
  }
  .img1 {
    /* position: absolute;
    top: 0;
    right: 0; */
    z-index: 10;
    opacity: 1;
    float: right;
  }
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 900px;
    height: 743px;
    z-index: 9;
    opacity: 0;
    display: flex;
    img {
      width: 100%;
      margin: auto 0;
      object-fit: cover;
    }
  }
`;
