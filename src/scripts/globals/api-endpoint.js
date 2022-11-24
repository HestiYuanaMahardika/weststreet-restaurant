import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_CUSTOMER: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
