import Country from "../models/country.model.js"

export default function () {
    const getCountries = async (payload) => {
        try {
            const { region } = payload.query;
            const query = region ? { region: new RegExp('^' + region, 'i') } : {}

            return await Country.find(query)
        } catch (e) { throw e }
    }

    return {
        getCountries
    }
}