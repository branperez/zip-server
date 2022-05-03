export default {
    Query: {
        zip: (_: any, { country, zipCode }: { country: string, zipCode: string }, 
            { dataSources }: { dataSources: any }) => {
            return dataSources.zipAPI.getZip(country, zipCode)
        }
    },
    Location: {
        places: (parent: any, _: any, { dataSources }: { dataSources: any }) => {
            return dataSources.zipAPI.getPlaces(parent)
        }
    } 
}
