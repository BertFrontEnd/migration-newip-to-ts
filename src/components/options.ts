interface DataNews {
  status: string;
  totalResults: number;
  articles: Array<Text>;
}

interface DataSource{
  status: string;
  sources: Array<Text>;
}

export { DataNews, DataSource };
