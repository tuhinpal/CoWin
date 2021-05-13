const axios = require('axios')

async function getStates() { /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Metadata%20APIs/states */
    return axios({
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
        .then(function (response) {
            if (response.data.states !== undefined) {
                return {
                    status: true,
                    result: response.data.states
                }
            } else {
                throw 'e'
            }
        })
        .catch(function (error) {
            return {
                status: false,
                message: "Sorry that's an error"
            }
        })
}

async function getListofDistricts(states_id) { /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Metadata%20APIs/districts */
    return axios({
        method: 'get',
        url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${states_id}`,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
        .then(function (response) {
            if (response.data.districts !== undefined) {
                return {
                    status: true,
                    result: response.data.districts
                }
            } else {
                throw 'e'
            }
        })
        .catch(function (error) {
            return {
                status: false,
                message: "Sorry that's an error"
            }
        })
}

async function findByPin(pincode, date) { /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Appointment%20Availability%20APIs/findByPin */
    return axios({
        method: 'get',
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
        .then(function (response) {
            if (response.data.sessions !== undefined) {
                return {
                    status: true,
                    result: response.data.sessions
                }
            } else {
                throw 'e'
            }
        })
        .catch(function (error) {
            return {
                status: false,
                message: "Sorry that's an error"
            }
        })
}

async function findByDistrict(district_id, date) { /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Appointment%20Availability%20APIs/findByDistrict */
    return axios({
        method: 'get',
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
        .then(function (response) {
            if (response.data.sessions !== undefined) {
                return {
                    status: true,
                    result: response.data.sessions
                }
            } else {
                throw 'e'
            }
        })
        .catch(function (error) {
            return {
                status: false,
                message: "Sorry that's an error"
            }
        })
}

async function calendarByPin(pincode, date) { /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Appointment%20Availability%20APIs/calendarByPin */
    return axios({
        method: 'get',
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
        .then(function (response) {
            if (response.data.centers !== undefined) {
                return {
                    status: true,
                    result: response.data.centers
                }
            } else {
                throw 'e'
            }
        })
        .catch(function (error) {
            return {
                status: false,
                message: "Sorry that's an error"
            }
        })
}

async function calendarByDistrict(district_id, date) { /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Appointment%20Availability%20APIs/calendarByDistrict */
    return axios({
        method: 'get',
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'en_US',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        }
    })
        .then(function (response) {
            if (response.data.centers !== undefined) {
                return {
                    status: true,
                    result: response.data.centers
                }
            } else {
                throw 'e'
            }
        })
        .catch(function (error) {
            return {
                status: false,
                message: "Sorry that's an error"
            }
        })
}


module.exports = {
    getStates,
    getListofDistricts,
    findByPin,
    findByDistrict,
    calendarByPin,
    calendarByDistrict
}