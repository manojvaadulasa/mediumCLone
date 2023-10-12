import { GetFeedResponseInterface } from "./get-feed";

export interface FeedStateInterface {
  isLoading : boolean,
  error : string | null,
  data : GetFeedResponseInterface | null
}
