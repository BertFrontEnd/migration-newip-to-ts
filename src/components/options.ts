interface DataNews {
  status: string;
  totalResults: number;
  articles: Array<Text>;
}

interface DataSource{
  status: string;
  sources: Array<Text>;
}

interface GetResp {
  endpoint: string;
  options?: TypeGetResp;
}

interface Result {
  ok: boolean;
  status: number;
  statusText: string | undefined;
  json(): void;
}

type TypeCallback<T> = (data?: T) => void;

type TypeGetResp = {
  sources: string | null | number;
};

export {
  DataNews, DataSource, GetResp, Result, TypeCallback, TypeGetResp,
};
