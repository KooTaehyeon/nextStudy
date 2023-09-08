export const FB_PIXEL_ID = 211503288587752;

export const pageview = () => {
  // @ts-ignore
  window.fbq('track', 'PageView');
};

export const view = (options = {}) => {
  console.log(options);
  // @ts-ignore
  window.fbq('track', 'ViewContent', options);
};
