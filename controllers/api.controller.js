
import useApiService from '../services/api.service.js';

import { RESPONSE } from '../constants/global.js';

export const _404 = (req, res) => res.status(404).json({ status: RESPONSE.ERROR, code: 404, error: 'Requested route not found.' })

export const index = async (req, res) => {
    try {
        res.status(200).json({ status: RESPONSE.SUCCESS, code: 200, message: 'Server UP!' })
    } catch (error) {
        res.status(500).json({ status: RESPONSE.ERROR, code: 500, message: error?.message ?? 'Error setting server.', error });
    }
};

export const countriesIndex = async (req, res) => {
    try {
        const { getCountries } = useApiService()

        const countries = await getCountries(req);

        res.status(200).json({ status: RESPONSE.SUCCESS, code: 200, data: countries });
    } catch (error) {
        res.status(500).json({ status: RESPONSE.ERROR, code: 500, message: 'Error getting countries.', error });
    }
};

export const salesRepsIndex = async (req, res) => {
    try {
        const { getSalesRepresentatives } = useApiService()

        const salesRepresentatives = await getSalesRepresentatives();

        res.status(200).json({ status: RESPONSE.SUCCESS, code: 200, data: salesRepresentatives });
    } catch (error) {
        res.status(500).json({ status: RESPONSE.ERROR, code: 500, message: 'Error getting sales representatives.', error });
    }
};

export const optimalIndex = async (req, res) => {
    try {
        const { getOptimalDistributions } = useApiService()

        const optimalDistributions = await getOptimalDistributions();

        res.status(200).json({ status: RESPONSE.SUCCESS, code: 200, data: optimalDistributions });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: RESPONSE.ERROR, code: 500, message: 'Error getting optimal distributions.', error });
    }
};