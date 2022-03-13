export function requestData(url, action) {
  return (dispatch) => {
    axios.get(url).then((res) => {
      dispatch(action(res.data));
    });
  };
}
