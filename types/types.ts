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
    created_at: string;
    updated_at: string;
    pushed_at: string;
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

export type RepositoryNode = {
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
};

export type GithubPinnedData = {
    data: {
        user: {
            pinnedItems: {
                nodes: RepositoryNode[];
            };
        };
    };
    error?: string;
};

export type GithubPreviews = Record<string, { openGraphImageUrl: string }>;

export type GithubRepoRest = {
    name: string;
    full_name: string;
    homepage: string | null;
    html_url: string;
    description: string | null;
    language: string | null;
    topics: string[];
    license: { name: string } | null;
};