export interface Movie {
  movieId: number;
  movieTitle: string;
  movieDescription: string;
  movieImageUrl: string;
  isPopular: boolean;
  datePublished: number;
  categoryId: number;
  relatedVideoUrl: string
}
