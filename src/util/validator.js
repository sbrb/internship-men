export const isValidBody = (data) => Object.keys(data).length > 0;
export const isValidFullName = (fn) => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fn.trim());
export const isValidEmail = (e) => /^([a-z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/.test(e);
export const isValidMobile = (ph) => /^(\+91[\-\s]?)?(91)?[6789]\d{9}$/.test(ph);
export const isValidAbvr = (n) => /^[a-z.]{2,100}$/.test(n);
export const isValidUrl = (u) => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif|jfif))$/i.test(u);
