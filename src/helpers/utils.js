export const formatNumber = number => {
  let tmp = number + '';
  tmp = parseInt(tmp.replace(/[\D]+/g, ''));
  tmp = tmp + '';
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");

  if (tmp.length > 6)
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
};