/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
    encodeData,
    renderer25D,
    rendererRect,
    rendererRound,
    rendererRandRound,
    rendererDSJ,
    rendererRandRect,
    rendererImage,
    rendererResImage,
    rendererCircle,
    rendererFuncA,
    rendererFuncB,
    rendererLine,
    rendererLine2,
} from '@/index';
import {
    defaultResImage,
    QRBTF_URL,
    defaultImage,
} from '@/constant/References';
import '@/style/base.css';

import Rem from '@/images/Rem.jpg';

window.onload = () => {
    const qrcode = encodeData({
        text: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image',// QRBTF_URL,
        correctLevel: 0,
    });
    const param = {
        posType: 1, 
        icon: {
            iconImg: defaultImage, 
            // color: 'red'
        }, 
        title: {
            name: '第二季度满意度数字化管理平台欢迎您来参与好家伙一二三四五', 
            // fontSize: 3, 
            // color: '#ffcd43', 
            style: {'font-sizes': 3, 'fill': '#123456'}
            },
    }
    const A1 = rendererRect(qrcode, param);
    // const A1 = rendererRect(qrcode, {icon:'../assests/logo.png',title:'dtmp'});
    const A2 = rendererRound(qrcode, param);
    const A3 = rendererRandRound(qrcode, param);
    const sp1 = rendererDSJ(qrcode, param);
    const sp2 = rendererRandRect(qrcode, param);
    const B1 = renderer25D(qrcode, param);
    const C1 = rendererImage(qrcode, {
        backgroudImage: Rem,
        ...param
    });
    const A_a1 = rendererLine(qrcode, param);
    const A_a2 = rendererLine2(qrcode, param);
    const A_b1 = rendererFuncA(qrcode, param);
    const A_b2 = rendererFuncB(qrcode, param);
    const SP_3 = rendererCircle(qrcode, param);
    // rendererResImage(qrcode, { backgroudImage: defaultResImage }).then(
    //     (res) => {
    //         document.querySelector('.c2').innerHTML = res;
    //     }
    // );

    // window.document.body.innerHTML = `<ul>
    // <li>${A1}</li>
    // <li class="c2"></li>
    // <li>${sp2}</li>
    // </ul>`;
    window.document.body.innerHTML = `<ul>
    <li>${A1}</li>
    <li>${A2}</li>
    <li>${A3}</li>
    <li>${sp1}</li>
    <li>${sp2}</li>
    <li>${B1}</li>
    <li>${C1}</li>
    <li>${A_a1}</li>
    <li>${A_a2}</li>
    <li>${A_b1}</li>
    <li>${A_b2}</li>
    <li>${SP_3}</li>
    <li class="c2"></li>
    </ul>`;
};
