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
        // text: 'https://mail.126.com/js6/main.jsp?sid=PAesQllDgNSkaiCDMTDDscKJtJzYgVkh&df=mail163_letter#module=compose.ComposeModule%7C%7B%22type%22%3A%22compose%22%2C%22fullScreen%22%3Atrue%2C%22cid%22%3A%22c%3A1654847557738%22%7D',
        correctLevel: 0,
    });
    const param = {
        type :0,
        posType: 1,
        otherColor: '#445678',
        posColor: '#223344',
        icon: {
            iconImg: defaultImage
        },
        // title中还可以添加其他属性，参考svg <text>标签属性
        title: {
            name: '二维码标题',
            style: {
                'font-size': 4,
                'color': '#12345',
            }
        }
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
