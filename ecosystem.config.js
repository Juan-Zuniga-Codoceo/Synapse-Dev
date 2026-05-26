module.exports = {
  apps: [{
    name: 'synapse-dev',
    script: './backend/server.js',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    max_memory_restart: '400M',
    autorestart: true,
    watch: false,
    restart_delay: 4000,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};
