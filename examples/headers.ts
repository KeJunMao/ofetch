import { $fetch } from 'ofetch'

async function main() {
  const response = await $fetch('https://api.github.com/gists', {
    method: 'POST',
    headers: {
      Authorization: `token ${process.env.GH_TOKEN}`,
    },
    body: {
      description: 'This is a gist created by ofetch.',
      public: true,
      files: {
        'unjs.txt': {
          content: 'UnJS is awesome!',
        }
      }
    }
  }) // Be careful, we use the GitHub API directly.

  console.log(response.url)
}

main().catch(console.error)
