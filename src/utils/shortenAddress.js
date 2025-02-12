export function shortenAddress(address) {
  
  // 获取前 5 个字符和后 4 个字符
  const start = address.slice(0, 5);
  const end = address.slice(-4);
  
  return `${start}...${end}`;
}


