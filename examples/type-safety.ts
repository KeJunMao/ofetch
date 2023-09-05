import { $fetch } from "ofetch"

interface Repo {
  id: number
  name: string
  repo: string
  description: string
  stars: number
}

async function main() {
  const { repo } = await $fetch<{ repo: Repo }>("https://ungh.cc/repos/unjs/ofetch")

  console.log(`The repo ${repo.name} has ${repo.stars} stars.`) // The repo object is now strongly typed.
}

main().catch(console.error)
