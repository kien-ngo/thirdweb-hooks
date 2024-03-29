import { AbiParameterToPrimitiveType, BaseTransactionOptions } from "thirdweb";
import { Prettify } from "thirdweb/dist/types/utils/type-utils";
import { useQuery } from "@tanstack/react-query";
import { getNFT } from "thirdweb/extensions/erc721";

export type TokenURIParams = {
  tokenId: AbiParameterToPrimitiveType<{ type: "uint256"; name: "_tokenId" }>;
};

export type GetNFTParams = Prettify<
  TokenURIParams & {
    /**
     * Whether to include the owner of the NFT.
     */
    includeOwner?: boolean;
  }
>;

export function useNFT(options: BaseTransactionOptions<GetNFTParams>) {
  const { contract, tokenId, includeOwner } = options;
  return useQuery({
    queryKey: [`${contract}:${tokenId}:${includeOwner}`],
    queryFn: async () => {
      return getNFT(options);
    },
  });
}
