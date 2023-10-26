import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'q429asnu',
  dataset: 'production',
  apiVersion: '2022-10-21',
  useCdn: false,
});

export default client
