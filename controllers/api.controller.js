
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

export const countries = async (req, res) => {
    try {
        const { getCountries } = useApiService()

        const countries = await getCountries(req);

        res.status(200).json({ status: RESPONSE.SUCCESS, code: 200, data: countries });
    } catch (error) {
        res.status(500).json({ status: RESPONSE.ERROR, code: 500, message: 'Error getting countries.', error });
    }
};

export const salesReps = async (req, res) => {
    try {
        const { getSalesRepresentatives } = useApiService()

        const salesRepresentatives = await getSalesRepresentatives();

        res.status(200).json({ status: RESPONSE.SUCCESS, code: 200, data: salesRepresentatives });
    } catch (error) {
        res.status(500).json({ status: RESPONSE.ERROR, code: 500, message: 'Error getting countries.', error });
    }
};