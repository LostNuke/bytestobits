import {get} from "../index"

export function lyrics(song: string) {
  return get("text", `song=${encodeURIComponent(song)}`)
}