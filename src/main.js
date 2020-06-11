import {
    RendererRect,
    RendererRound,
    RendererRandRound,
} from './renderer/RendererBase';
import RendererDSJ from './renderer/RendererDSJ';
import RendererRandRect from './renderer/RendererRandRect';
import Renderer25D from './renderer/Renderer25D';
import RendererImage from './renderer/RendererImage';
import RendererResImage from './renderer/RendererResImage';
import { encodeData } from './utils/qrcodeHandler';

import './style/base.css';

import Rem from './images/Rem.jpg';
const qrcode = encodeData({
    text: 'QRBTF_URL',
    correctLevel: 0,
});
const A1 = RendererRect(qrcode);
const A2 = RendererRound(qrcode);
const A3 = RendererRandRound(qrcode);
const sp1 = RendererDSJ(qrcode);
const sp2 = RendererRandRect(qrcode);
const B1 = Renderer25D(qrcode);
const C1 = RendererImage(qrcode, {
    backgroudImage: Rem,
});
RendererResImage(qrcode).then((res) => {
    document.querySelector('.c2').innerHTML = res;
});

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
