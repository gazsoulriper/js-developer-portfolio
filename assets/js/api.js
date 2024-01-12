
async function fetchProfileData() {
    const url = `https://raw.githubusercontent.com/gazsoulriper/js-developer-portfolio/mainassets/data/profile.json`;
    const fetching = await fetch(url)
    return await fetching.json()
}


