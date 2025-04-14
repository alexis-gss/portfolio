export type GithubRepo = {
    name: string;
    description: string;
    homepage: string|null;
    html_url: string;
    full_name: string;
    language: string;
    topics: Array<string>;
    license: {
        name: string
    };
};

export type GithubTag = {
    name: string;
};

export type GraphqlData = {
    data: {
        user: {
            pinnedItems: {
                nodes: GraphqlRepo[]
            }
        }
    }
};

export type GraphqlRepo = {
    name: string,
    description: string,
    url: string,
    forkCount: number,
    stargazerCount: number,
};

export type GraphqlSocialPreview = {
    data: {
        repository: {
            openGraphImageUrl: string,
        }
    }
};