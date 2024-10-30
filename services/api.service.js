import Country from "../models/country.model.js";

export default function () {
    const getCountries = async (payload) => {
        try {
            const { region } = payload.query;
            const query = region ? { region: new RegExp('^' + region, 'i') } : {};

            return await Country.find(query);
        } catch (e) {
            throw e;
        }
    };

    const getRegionsWithCountries = (countries) => {
        const regionsWithCountries = {};

        countries.map(country => regionsWithCountries[country.region]
            ? regionsWithCountries[country.region].push(country.name)
            : regionsWithCountries[country.region] = []
        );

        return regionsWithCountries;
    }

    const getSalesRepresentatives = async () => {
        try {
            const salesReps = [];

            // fetching all countries and group them by region
            const countries = await Country.find({});
            const regionsWithCountries = getRegionsWithCountries(countries);

            Object.entries(regionsWithCountries).forEach(([region, countries]) => {
                countries.forEach((_, i) =>
                    i % 7 === 0 && salesReps.push({
                        region,
                        minSalesReq: 3,
                        maxSalesReq: 7,
                        countries: countries.slice(i, i + 7),
                    })
                );

                const lastRep = salesReps[salesReps.length - 1];
                if (lastRep.countries.length < 3 && salesReps.length > 1) {
                    salesReps[salesReps.length - 2].countries.push(...lastRep.countries);
                    salesReps.pop();
                }
            });

            return salesReps;
        } catch (e) {
            throw e;
        }
    };

    const getOptimalDistributions = async () => {
        try {
            const salesRepsDistribution = [];

            const countries = await Country.find({});
            const regionsWithCountries = getRegionsWithCountries(countries);

            for (const region in regionsWithCountries) {
                const regionCountries = regionsWithCountries[region];
                const countryChunks = [];

                for (let i = 0; i < regionCountries.length; i += 7) {
                    const chunk = regionCountries.slice(i, i + Math.min(7, regionCountries.length - i));

                    if (chunk.length < 3 && countryChunks.length > 0) {
                        countryChunks[countryChunks.length - 1].push(...chunk);
                    } else {
                        countryChunks.push(chunk);
                    }
                }

                countryChunks.forEach(chunk => {
                    salesRepsDistribution.push({
                        region: region,
                        countryList: chunk,
                        countryCount: chunk.length
                    });
                });
            }

            return salesRepsDistribution;
        }
        catch (e) { throw e }
    }

    return {
        getCountries,
        getSalesRepresentatives,
        getOptimalDistributions
    };
}
