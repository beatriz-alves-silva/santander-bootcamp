
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/beatriz-alves-silva/santander-bootcamp/refs/heads/main/desafios/portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
