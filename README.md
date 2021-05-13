# Cowin

## A NodeJS wrapper of [Cowin Public API](https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/). We can win Covid 🤝

### Installation:

```
npm install cowin
```

### Available methods:

- **getState** - _Get all states in India_
- **getListofDistricts** - _Get get all the districts of state_
- **findByPin** - _Get planned vaccination sessions on a specific date in a given pin_
- **findByDistrict** - _Get planned vaccination sessions on a specific date in a given district_
- **calendarByPin** - _Get planned vaccination sessions for 7 days from a specific date in a given pin_,
- **calendarByDistrict** - _Get planned vaccination sessions for 7 days from a specific date in a given district_

Referred to [Cowin API Docs](https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/) for more details.

### Usage:

- Import required modules

```
const {
    getStates,
    getListofDistricts,
    findByPin,
    findByDistrict,
    calendarByPin,
    calendarByDistrict
} = require('cowin')
```

- Write asynchronous function

```
async function fireitup() { /* asynchronous */

    const allstates = await getStates()
    console.log(allstates)

    const alldistricts = await getListofDistricts(36) /* { state_id } */
    console.log(alldistricts)

    const calenderbypin = await calendarByPin(731204, '13-05-2021') /* { pincode, date } */
    console.log(calenderbypin)

    const calenderbydistrict = await calendarByDistrict(713, '13-05-2021') /* district_id, date */
    console.log(calenderbydistrict)

    const findbypin = await findByPin(731204, '13-05-2021') /* { pincode, date } */
    console.log(findbypin)

    const findbydistrict = await findByDistrict(713, '13-05-2021') /* district_id, date */
    console.log(findbydistrict)

}

fireitup()
```

- Response will looks like

```
{
    status: true,
    result: [/* Results */]
}
```

- Exception handling

```
{
    status: false,
    message: "Sorry that's an error"
}
```

### Limitation:

APIs are subject to a rate limit of 100 API calls per 5 minutes per IP

## Crafted with care by [Tuhin](https://github.com/cachecleanerjeet) 💗
