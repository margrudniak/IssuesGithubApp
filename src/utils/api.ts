import {token} from '../../token';

const url =
  'https://api.github.com/repos/facebook/react-native/issues?per_page=20';

interface Issue {
  id: number;
  number: number;
  title: string;
  created_at: string;
  state: string;
  body: string;
}

export const getIssues = async (
  page: number,
  cb1?: Function,
  cb2?: Function,
  cb3?: Function,
) => {
  try {
    const response = await fetch(url + `&page=${page}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${token}`,
      },
    });
    const json = await response.json();
    const arr: Array<Issue> = await json?.map(e => ({
      id: e.id,
      number: e.number,
      title: e.title,
      created_at: e.created_at,
      state: e.state,
      body: e.body,
    }));
    cb1(arr);
    // return arr;
  } catch (error) {
    console.error(error);
    cb2();
  } finally {
    cb3();
  }
};
