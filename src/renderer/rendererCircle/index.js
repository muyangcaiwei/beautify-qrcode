import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';

const schemaBase = yup.object().shape({
    otherColor: yup.string().default('#8ED1FC'),
    posColor: yup.string().default('#0693E3'),
        // 二维码图标
    icon: yup.object().default({}),
    // 二维码标题
    title: yup.object().default({}),
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.otherColor] 圆圈颜色
 * @param {String} [options.posColor] 定位点颜色
 */
const rendererCircle = (qrcode, options) => {
    try {
        options = schemaBase.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = ['otherColor', 'posColor', 'icon', 'title'].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode, params });

    return svg;
};

export default rendererCircle;
