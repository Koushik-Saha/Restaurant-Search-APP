import axios from 'axios'

export default axios.create({
    baseUrl: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer VXwM1YpTcmpiqnKttexTh6lDZuBuoF_eszdgW56R277Y-9BR-qp1BtDjSNvXVlmcA6zrFsZ-b71NcDgFHC02EwQi62C2LJVy49IWMO452CXIx7YwuJn8A-QcEMa3X3Yx'
    }
});
