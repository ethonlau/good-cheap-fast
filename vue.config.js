module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/good-cheap-fast/dist/'
    : '/'
}