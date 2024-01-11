
async function fetchProfileData() {
    const url = `https://github.com/gazsoulriper/js-developer-portfolio/blob/main/assets/data/profile.json`;
    const fetching = await fetch(url)
    return await fetching.json()
}


