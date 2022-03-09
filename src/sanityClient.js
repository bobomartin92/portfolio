import sanityClient from '@sanity/client'


export default sanityClient({
    projectId: 'qilw02oc',
    dataset: 'production',
    apiVersion: '2022-03-01',
    useCdn: true
})