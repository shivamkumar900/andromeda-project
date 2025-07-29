import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "BookBlock - Get tokenized books and manuscripts",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
         {
            marketplace:
                "andr1zq3gtgzxese3e8a9j676x6znn9329ywjj3yem73apppaqlaezxnq0rmf7p",
            cw721: "andr1num63l8e6z5fmakpyg9t6m0l7l29h790kvk03hje440r7xf2qw6qpc9p2u",
            name: "Finance Books",
            featured: "BAT",
            type: ICollectionType.MARKETPLACE,
            id: "embeddables-marketplace-1",
        }
    ],
};

export default CONFIG;
