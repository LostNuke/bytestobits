import { get } from "../utils/requester"

export function reddit(subreddit: string, limit?: number) {
  return get("reddit", "limit="+limit)
}