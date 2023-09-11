export const FB_PIXEL_ID = 199599866306511;
// 211503288587752
export const pageview = () => {
  // @ts-ignore
  window.fbq('track', 'PageView');
};

export const view = (options = {}) => {
  // @ts-ignore
  window.fbq('track', 'ViewContent', options);
};
export const AddToCart = (options = {}) => {
  // @ts-ignore
  window.fbq('track', 'AddToCart', options);
};
export const Purchase = (options = {}) => {
  // @ts-ignore
  window.fbq('track', 'AddToCart', Purchase);
};
