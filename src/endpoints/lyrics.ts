import { get } from "../utils/requester"

export function lyrics(song: string) {
  return get("text", "song="+song.split(" ").join("+"))
}