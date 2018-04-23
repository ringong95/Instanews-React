export const FETCHNEWS = 'FETCHNEWS';
export const LOADNEWS = 'LOADNEWS';
export const TOGGLELOADING = 'TOGGLELOADING';
export const CLEARARTICLES = 'CLEARARTICLES';
export const GOTARTICLES = 'HAVEARTICLES';

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
export function ToggleLoading(items){
    return {
        type: TOGGLELOADING,
        payload: items,
    };
}
export function ClearArticles(items){
    return{
        type: CLEARARTICLES,
        payload: items,
    }
}
export function GotArticles(items){
    return{
        type: GOTARTICLES,
        payload: items,
    }
}

const getRequest = {
    method: 'GET',
};
const api = '2cee7ea7b62f4e7d83a741c409dae5e4';
  export const fetchPosts = (category) => (dispatch) => {
    dispatch(ToggleLoading())
    dispatch(ClearArticles())
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${api}`, getRequest)
        .then(response => response.json())
        .then(json => dispatch(LoadNews(json.results)))
    dispatch(ToggleLoading())
    dispatch(GotArticles())
  };

