import api from '../data'

export const fetchData = async () => {
  try {
    const res = await api()
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
