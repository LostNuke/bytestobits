declare module "bytestobits" {

  export interface madlibsResponse {
    title: string,
    variables: string[],
    text: string,
    questions: number
  }

  interface memeResponse {
    title: string,
    url: string,
    link: string,
    subreddit: string,
    upvotes: number,
    downvotes: number,
    comments: number
  }

  export interface lyricsResponse {
    title: string,
    artist: string,
    lyrics: string
  }
  export interface lyricsError {
    GeniusError: string
  }


  export function lyrics(song: string): Promise<lyricsResponse> | Promise<lyricsError>;
  export function madlibs(): Promise<madlibsResponse>;
  export function meme(): Promise<memeResponse>;
  export function reddit(subreddit: string, limit?: number);
  export function text(): Promise<string>;
  export function word(): Promise<string>;
  /**
   * Set your Authorization Token to contact the API
   * @param token Authorization token
   */
  export function setToken(token: string): void;

}