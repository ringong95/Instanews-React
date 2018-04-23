export const FETCHNEWS = 'FETCHNEWS';
export const LOADNEWS = 'LOADNEWS';


export function FetchNews(category) {
    return {
      type: FETCHNEWS,
      payload: category,
    };
  }

export function LoadNews(items) {
    return {
        type: LOADNEWS,
        payload: items,
    };
}


const getRequest = {
    method: 'GET',
};
const api = '2cee7ea7b62f4e7d83a741c409dae5e4';
  export const fetchPosts = (category) => (dispatch) => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${api}`, getRequest)
      .then(response => response.json())
      .then(json => dispatch(LoadNews(json.results)));
  };

