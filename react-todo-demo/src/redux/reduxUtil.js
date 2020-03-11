export function actionGenerator(type) {
  return payload=>({
    type,
    payload
  })
}

export function commonReducer({ type, payload },state, initState) {
  const key = type.substring(type.indexOf("_") + 1,type.indexOf("."));
  const operate =  type.substring(type.indexOf(".")+1);
  let data;
  switch (operate) {
    case "set":
      data=payload;
      break;
    case "reset":
      data=initState;
      break;
    case "update":
      data=Object.assign({},state.get(key),payload);
      break;
    case "add":
      data=[...state.get(key),payload];
      break;
    case "remove":
      data=state.get(key).splice(1,payload);
      break;
  }
  return {key,payload:data};
}
