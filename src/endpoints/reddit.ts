import {get} from "../index"

export function reddit(subreddit: string, limit?: number) {
  return get("reddit", `subreddit=${subreddit}&limit=${limit}`)
}