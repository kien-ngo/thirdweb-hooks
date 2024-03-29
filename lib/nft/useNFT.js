"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNFT = void 0;
const react_query_1 = require("@tanstack/react-query");
const erc721_1 = require("thirdweb/extensions/erc721");
function useNFT(options) {
    const { contract, tokenId, includeOwner } = options;
    return (0, react_query_1.useQuery)({
        queryKey: [`${contract}:${tokenId}:${includeOwner}`],
        queryFn: async () => {
            return (0, erc721_1.getNFT)(options);
        },
    });
}
exports.useNFT = useNFT;
