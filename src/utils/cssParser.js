import postcss from 'postcss';
import stripInlineComments from "postcss-strip-inline-comments";
import discardComments from "postcss-discard-comments";
import shorthandExpand from "postcss-shorthand-expand";
import cssParser from "postcss-scss";

function parseStyle(cssObj) {
  return [...Array(cssObj.length)].reduce((newValue, _, index) => {
    const styleKey = cssObj[index];
    return {
      ...newValue,
      [styleKey]: cssObj[styleKey]
    }
  }, {});
}

function getBoxStyle(code) {
  const styleCode = /[^{}]+(?=})/.exec(code);
  return styleCode[0].trim();
}

function processStyle(styleCode) {
  return postcss([
    stripInlineComments,
    discardComments({removeAllButFirst: true}),
    shorthandExpand()
  ])
    .process(styleCode, { parser: cssParser })
    .then(result => getBoxStyle(result.css));
}

export {
  processStyle,
  parseStyle
}
