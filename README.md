[marketplace-badge]: https://img.shields.io/github/v/release/seancroach/latest-stable-version-action?label=marketplace&logo=GitHub
[marketplace-url]: https://github.com/marketplace/actions/get-latest-stable-version
[license-url]: https://github.com/seancroach/latest-stable-version-action/blob/latest/LICENSE.md

# Get Latest Stable Version

[![Marketplace Badge][marketplace-badge]][marketplace-url]

This GitHub Action retrives the latest stable version from a GitHub repository's release tags.

## Usage

To use this action in your pipeline, specify the name of this repository with a tag number (`v1` is recommended) as a `step` in your workflow file:

```yml
steps:
  - uses: actions/checkout@v2
  - uses: seancroach/latest-stable-version-action@v1
    id: latest-stable-version
    with:
      owner: <GitHub username>
      repo: <GitHub repository name>
  - run: echo ${{ latest-stable-version.outputs.result }}
```

## Arguments

| **Input** | **Description** | **Required** |
| --- | --- | --- |
| `owner` | The owner of the GitHub `repo`. | `true` |
| `repo` | The GitHub repository to query owned by the `owner`. | `true` |

## License

This package is available as open source under the terms of the [MIT License][license-url].
