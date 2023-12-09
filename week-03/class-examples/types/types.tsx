export type Forecast = {
  list: [
    {
      dt: number; // Unix timestamp UTC
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
      };
      weather: [
        {
          main: string;
          description: string;
          icon: string;
        }
      ];
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      dt_txt: string; // ISO timestamp UTC
    }
  ];
  city: {
    name: string;
  };
  country: string;
  sunrise: number; // Unix timestamp UTC
  sunset: number; // Unix timestamp UTC
};
