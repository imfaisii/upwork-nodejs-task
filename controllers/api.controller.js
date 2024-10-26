
import useApiService from '../services/api.service.js';

import { RESPONSE } from '../constants/global.js';

export const index = async (req, res) => {
    try {
        res.status(200).json({ status: RESPONSE.SUCCESS, message: 'Server UP!' })
    } catch (error) {
        res.status(500).json({ status: RESPONSE.ERROR, message: error?.message ?? 'Error setting server.', error });
    }
};

export const countries = async (req, res) => {
    try {
        const { getCountries } = useApiService()

        const countries = await getCountries(req);

        res.status(200).json({ status: RESPONSE.SUCCESS, data: countries });
    } catch (error) {
        res.status(500).json({ status: RESPONSE.ERROR, message: 'Error getting countries.', error });
    }
};