export interface DataToServer {
  value: any;
}

export interface DataFromServer {
  value: any;
  result: string;
}

export interface GeneralResponse {
  result: string | null;
}
