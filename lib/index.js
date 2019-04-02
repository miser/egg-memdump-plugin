const MemDump = require('memdump');

module.exports = agentOrApp => {
  const memDump = new MemDump({ type: agentOrApp.type });
  memDump.start();
};
