export default interface Games {
  id: number;
  name: string;
  released: string;
  background_image: string;
  metacritic: number;
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  }
  reddit_name: string;
  reddit_url: string;
  website: string;
}