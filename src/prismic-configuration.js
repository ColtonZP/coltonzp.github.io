import Prismic from 'prismic-javascript'

const apiEndpoint = process.env.REACT_APP_API_URL
const accessToken = ''

export const Client = Prismic.client(apiEndpoint, { accessToken })
