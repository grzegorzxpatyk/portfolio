import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { cache } from 'react';

export type pinnedRepo = {
    id: string;
    name: string;
    url: string;
    homepageUrl: string;
    languages: string[];
    description: string;
};

export const getPinnedRepos = cache(async () => {
    const { user } = await requestPinnedRepos();

    const pinnedRepos: pinnedRepo[] = user?.pinnedItems?.edges
        .map(({ node }: { node: { [key: string]: any } }) => node)
        .map((repo: { [key: string]: any }) => ({
            ...repo,
            languages: repo.languages.edges.map(
                (edge: { [key: string]: any }) => edge.node.name
            ),
        }));

    return pinnedRepos;
});

export async function requestPinnedRepos() {
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}`,
            },
        };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
            {
                user(login: "grzegorzxpatyk") {
                    pinnedItems(first: 6) {
                        totalCount
                        edges {
                            node {
                                ... on Repository {
                                    id
                                    name
                                    url
                                    description
                                    homepageUrl
                                    languages(first: 6) {
                                        edges {
                                            node {
                                                ... on Language {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    });

    return data;
}
