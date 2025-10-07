const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend'))); // frontend folder

// ===== Use environment variables for Clist.by credentials =====
const CLIST_USERNAME = process.env.CLIST_USERNAME;
const CLIST_API_KEY = process.env.CLIST_API_KEY;


// API to fetch all upcoming contests
app.get('/contests', async (req, res) => {
    try {
        const response = await axios.get('https://clist.by/api/v4/contest/', {
            headers: {
                Authorization: `ApiKey ${CLIST_USERNAME}:${CLIST_API_KEY}`
            },
            params: {
                upcoming: true,
                limit: 100,
                order_by: 'start',
                format: 'json'
            }
        });

        // Map contests to simplified structure
        const contests = response.data.objects.map(c => ({
            name: c.event || c.name,
            startTimeSeconds: new Date(c.start || c.start_time).getTime() / 1000,
            url: c.href || c.url
        }));

        // Sort by start time
        contests.sort((a, b) => a.startTimeSeconds - b.startTimeSeconds);

        res.json(contests);
    } catch (err) {
        console.error("Error fetching contests:", err);
        res.status(500).send("Error fetching contests");
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
