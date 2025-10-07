let contests = [];

const contestContainer = document.getElementById('contestContainer');
const searchInput = document.getElementById('searchInput');

function isEnglish(text) {
    return /^[\x00-\x7F\s.,!@#$%^&*()_+\-={}\[\]:";'<>?/\\|`~]*$/.test(text);
}

async function fetchContests() {
    try {
        const res = await fetch('http://localhost:3000/contests');
        let data = await res.json();

        // Filter English + sort by upcoming
        contests = data
            .filter(c => c.name && isEnglish(c.name))
            .sort((a, b) => a.startTimeSeconds - b.startTimeSeconds);

        displayContests(contests);
    } catch (err) {
        console.error("Error fetching contests:", err);
        contestContainer.innerHTML = "<p>Error fetching contests</p>";
    }
}

function displayContests(list) {
    contestContainer.innerHTML = '';
    if (list.length === 0) {
        contestContainer.innerHTML = '<p>No contests found.</p>';
        return;
    }

    list.forEach(c => {
        const div = document.createElement('div');
        div.className = 'contest-card';
        div.innerHTML = `
            <div class="contest-name">${c.name}</div>
            <div class="contest-date">🕒 ${new Date(c.startTimeSeconds * 1000).toLocaleString()}</div>
            <div class="contest-link"><a href="${c.url}" target="_blank">Join Contest</a></div>
        `;
        contestContainer.appendChild(div);
    });
}

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filtered = contests.filter(c => c.name.toLowerCase().includes(searchText));
    displayContests(filtered);
});

fetchContests();
