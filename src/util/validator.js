const isValidBody = (data) => Object.keys(data).length > 0;
const isValidFullName = (fn) => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fn.trim());
const isValidEmail = (e) => /^([a-z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/.test(e);
const isValidMobile = (ph) => /^(\+91[\-\s]?)?(91)?[6789]\d{9}$/.test(ph);
const isValidAbvr = (n) => /^[a-z.]{2,100}$/.test(n);
const isValidUrl = (u) => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif|jfif))$/i.test(u);

module.exports = { isValidBody, isValidFullName, isValidEmail, isValidMobile, isValidAbvr, isValidUrl };