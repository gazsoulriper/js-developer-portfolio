
async function fetchProfileData() {
    const url = `https://raw.githubusercontent.com/gazsoulriper/js-developer-portfolio/main/assets/data/profile.json?token=GHSAT0AAAAAACMLEIKETQ4OZVG5BPR5FVNOZM7XLEQ`;
    const fetching = await fetch(url)
    return await fetching.json()
}


