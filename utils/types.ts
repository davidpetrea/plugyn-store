// Interface to defining our object of response functions
export type ResponseFuncs = {
 GET?: Function;
 POST?: Function;
 PUT?: Function;
 DELETE?: Function;
};

// Interface to define our Server model on the frontend
export type Server = {
 _id: string;
 name: string;
 priceEUR: string;
 amount: string;
 section: string;
};

export type EpvpData = {
 success: boolean;
 error: null | string;
 data: null | {
  id: string;
  username: string;
  ratings: {
   theblackmarket: {
    positive: number;
    neutral: number;
    negative: number;
   };
  };
 };
};
