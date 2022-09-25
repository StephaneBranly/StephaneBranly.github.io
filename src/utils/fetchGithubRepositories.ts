const fetchGithubRepositories = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    const json = await res.json()
    return json

}

export default fetchGithubRepositories