// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  //projectId: "ga8lllhf",          //John Doe
  projectId: "4g77qcwa",        //Najam Saeed
  dataset: "production",
  apiVersion: "2023-07-30",
  useCdn: false,
};

const client = createClient(config);

export default client;