type TypeGetResp = {
  sources: number;
};

type TypeCallback<T> = (data?: T) => void;

interface InterfaceGetResp {
  endpoint: string;
  options?: TypeGetResp;
}

interface InterfaceResult {
  ok: boolean;
  status: number;
  statusText: string | undefined;
  json(): void;
}

class Loader {
  baseLink: string;

  options: { apiKey: string };

  constructor(baseLink: string, options: { apiKey: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: InterfaceGetResp,
    callback = (): void => {
      // eslint-disable-next-line no-console
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  // eslint-disable-next-line class-methods-use-this
  errorHandler(result: InterfaceResult): InterfaceResult {
    if (!result.ok) {
      if (result.status === 401 || result.status === 404) {
        // eslint-disable-next-line no-console
        console.log(
          `Sorry, but there is ${result.status} error: ${result.statusText}`,
        );
      }
      throw Error(result.statusText);
    }

    return result;
  }

  makeUrl(options: TypeGetResp | undefined, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  // eslint-disable-next-line max-len
  load(method: string, endpoint: string, callback: TypeCallback<JSON>, options: TypeGetResp | undefined): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }
}

export default Loader;
