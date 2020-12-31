import request from '../../utils/request'
import api from '../data'
// http://filltext.com/?rows=10&id={index}}&address={streetAddress}&city={city}&country={country|abbr3}&date={date}&desc={lorem|32}
//&pretty=true&title_group={lorem|3}&@range_price={rows=5*titile_place={lorem|2}*price={numberRange|500, 7500}*free_places={numberRange|0,100}}

export const fetchData = async ({ rows }) => {
  try {
    // const res = await request({
    //   url: '/',
    //   method: 'get',
    //   params: {
    //     rows: rows,
    //     id: '{index}',
    //     address: '{streetAddress}',
    //     city: '{city}',
    //     country: '{country|abbr3}',
    //     date: '{date}',
    //     desc: '{lorem|32}',
    //     pretty: true,
    //     title_group: '{lorem|3}',
    //   },
    // })
    console.log(api())
    const res = await api()
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
