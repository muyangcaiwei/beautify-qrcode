export default function drawIcon(qrcode, params) {
    if (!qrcode) return [];
    if (!params) return [];
    // console.log(qrcode)
    // console.log(params)

    // const titleColor = params[params.length - 1]
    const title = params[params.length -1]
    const icon = params[params.length - 2]
    // const titleFont = params[params.length - 4]
    const iconScale = 0.33

    const {
        iconImg
    } = icon;

    const {
        name,
        // fontSize,
        // color,
        style
    } = title;

    const fontSize = style['font-size'] || 3
    const fill = style.fill


    if (!icon && !title) return null;
    // const { fontSize, color, verticalAlign, ...titleStyle } = styles.title || {};
    // const {verticalAlign } = styles.title || {};

    // const titleVerticalAlign = titleAlign || verticalAlign || (icon ? "bottom" : "middle");
  
    const nCount = qrcode.getModuleCount();

    const iconScaleR = iconScale > .33 ? .33 : iconScale;
    const iconSize = Number(nCount * iconScaleR);
    const iconXY = (nCount - iconSize) / 2;

    const pointList = [];
    if (Object.keys(icon).length !== 0 ) {
        pointList.push(
            `<rect 
                key="${1}" 
                width="${iconSize -1 }" 
                height="${iconSize -1 }" 
                rx="0.5" 
                ry="0.5" 
                fill="#FFFFFF" 
                x="${iconXY + 0.5}" 
                y="${iconXY + 0.5}" 
            />`
        );
        pointList.push(
            `<image 
                key="${2}" 
                href="${iconImg}" 
                width="${iconSize - 2}" 
                x="${iconXY + 1}" 
                y="${iconXY + 1}" 
             />`
        );
    }

    if (Object.keys(title).length !== 0) {
        // const svgWidth = styles.svg && styles.svg.width ? styles.svg.width.replace("px", "") : 300;
        // const titleFontSize = Number(nCount + nCount / 5 * 2) * (titleSize || fontSize || 12) / svgWidth;
        const titleFontSize = fontSize || 3
        const titleFontColor = fill || "#000000";

        // const fontY =  (icon ? (iconXY + iconSize) : (nCount / 2 + titleFontSize * .5))
        const fontY = nCount + titleFontSize * .9
        const textLength = name.length * titleFontSize
        const fontX = (nCount - textLength) / 2 
        // 针对title需要换行的情况
        const nameDesc = splitTitleName(nCount, name, fontY, fontSize)

        pointList.push(
            `
            <text 
                key="${3}" 
                x="${fontX}" 
                y="${fontY }" 
                ${expandJson(style)} 
                fill="${titleFontColor}" 
                font-size="${titleFontSize}"
                textAnchor="middle"
            >
                ${nameDesc}
            </text>
            `
            )
    }
    // console.log(pointList)
    return pointList;
}

/*
 *  对于标题，最多占两行，多余的内容截断并添加省略号
 */
function splitTitleName(qrcodeWidth, title, titleY, fontSize) {
    // 字号 * 字数 是否比二维码的宽度要大？
    const rate = title.length * fontSize / qrcodeWidth
    // title宽度小于二维码宽度，一行放得下
    if (rate >= 0 && rate <=1) {
        return title
    }
    // title 需要占两行，则需要使用<span>标签
    else if (rate > 1) {
        // 如果比率大于2，也就是两行放不下，则截断，并添加省略号
        if (rate > 2) {
            title = title.substring(0, qrcodeWidth*2/fontSize -3 ) + "..."
        }
        // 第一行放满，剩下放第二行
        const firstLineCnt = qrcodeWidth / fontSize
        const firstLineName = title.substring(0, firstLineCnt)
        const firstSpan = `<tspan x="${(qrcodeWidth - firstLineCnt * fontSize) / 2}" y="${titleY}">${firstLineName}</tspan>`
        // 剩下的放第二行
        var secondLineCnt = title.length - firstLineCnt
        const secondLineName = title.substring(firstLineCnt, title.length)
        if (rate > 2) {
            // 比率>2，最后一定会补上省略号，省略号占1个字符
            secondLineCnt -= 2
        }
        const secondSpan = `<tspan x="${(qrcodeWidth - secondLineCnt*fontSize) / 2}" y="${titleY + fontSize}">${secondLineName}</tspan>`
       
        return  firstSpan + secondSpan
    }else {
        return title
    }
}
/**
 * 展开json 字符串
 */
function expandJson(jsonObj) {
    // console.log(jsonObj)
    // const jsonStr = JSON.stringify(jsonObj)
    var retStr = ``
    for (var k in jsonObj) {
        retStr += (`${k}=${jsonObj[k]} `)
    }
    // console.log(retStr)
    return retStr
}