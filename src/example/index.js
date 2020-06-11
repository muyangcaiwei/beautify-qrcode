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
} from '../../dist/beautifyQrcode';
import {
    defaultResImage,
    QRBTF_URL,
    defaultImage,
} from '@/constant/References';
import '@/style/base.css';

import Rem from '@/images/Rem.jpg';

window.onload = () => {
    const qrcode = encodeData({
        text: QRBTF_URL,
        correctLevel: 0,
    });
    const A1 = rendererRect(qrcode);
    const A2 = rendererRound(qrcode);
    const A3 = rendererRandRound(qrcode);
    const sp1 = rendererDSJ(qrcode);
    const sp2 = rendererRandRect(qrcode);
    const B1 = renderer25D(qrcode);
    const C1 = rendererImage(qrcode, {
        backgroudImage: Rem,
    });
    rendererResImage(qrcode, { backgroudImage: defaultResImage }).then(
        (res) => {
            document.querySelector('.c2').innerHTML = res;
        }
    );

    window.document.body.innerHTML = `<ul>
    <li>${A1}</li>
    <li>${A2}</li>
    <li>${A3}</li>
    <li>${sp1}</li>
    <li>${sp2}</li>
    <li>${B1}</li>
    <li>${C1}</li>
    <li class="c2"></li>
    </ul>`;
};
