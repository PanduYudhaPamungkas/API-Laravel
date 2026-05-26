const express = require('express');
const axios = require('axios');

const router = express.Router();

const URL_SERVICE_MENTOR = process.env.URL_SERVICE_MENTOR;

/**
 * GET /mentor
 * Proxy: Fetch all mentors from the Laravel service.
 */
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(URL_SERVICE_MENTOR);
        return res.json(response.data);
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }
        return res.status(500).json({
            status: 'error',
            message: 'Service Unavailable',
        });
    }
});

/**
 * POST /mentor
 * Proxy: Create a new mentor via the Laravel service.
 */
router.post('/', async (req, res) => {
    try {
        const response = await axios.post(URL_SERVICE_MENTOR, req.body);
        return res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }
        return res.status(500).json({
            status: 'error',
            message: 'Service Unavailable',
        });
    }
});

/**
 * PUT /mentor/:id
 * Proxy: Update a mentor via the Laravel service.
 */
router.put('/:id', async (req, res) => {
    try {
        const response = await axios.put(`${URL_SERVICE_MENTOR}/${req.params.id}`, req.body);
        return res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }
        return res.status(500).json({
            status: 'error',
            message: 'Service Unavailable',
        });
    }
});

/**
 * DELETE /mentor/:id
 * Proxy: Delete a mentor via the Laravel service.
 */
router.delete('/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${URL_SERVICE_MENTOR}/${req.params.id}`);
        return res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json(error.response.data);
        }
        return res.status(500).json({
            status: 'error',
            message: 'Service Unavailable',
        });
    }
});

module.exports = router;
