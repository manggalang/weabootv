export interface IAnimesData {
  title: string;
  title_japanese: string;
  rating: string;
  url: string;
  episodes: number;
  mal_id: any;
  key: number;
  score: number;
  synopsis: string;
  trailer: {
    embed_url: string;
  };
  images: {
    webp: {
      large_image_url: string;
    };
  };
  producers: [
    {
      name: string;
    }
  ];
  licensors: [
    {
      name: string;
    }
  ];
  studios: [
    {
      name: string;
    }
  ];
}

export interface AnimeDataFromAPI {
  data: IAnimesData[];
  pagination: any;
}
