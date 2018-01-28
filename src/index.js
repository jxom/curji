const curji = (emoji, {selector} = {}) => {
  if (typeof emoji !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof emoji}`);
  }
  if (selector && typeof selector !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof selector}`);
  }

  const cssText = `cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" style="font-size:14px"><text y="16">${emoji}</text></svg>'), auto;`;
  if (selector) {
    document.querySelector(selector).style.cssText += cssText;
    return null;
  }
  const headStyle = document.createElement('style');
  headStyle.innerHTML = `html { ${cssText} }`;
  document.head.appendChild(headStyle);
  return null;
};

export default curji;
