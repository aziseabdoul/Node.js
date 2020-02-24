const dns = require('dns');  
dns.lookup('www.fnac.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  
//console.log(dns.getServers()); 