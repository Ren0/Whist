module.exports = {
  webpack: (config, options) => {
    // Perform customizations to config
    // Important: return the modified config

    // changes the name of the entry point from index -> main.js
    config.entry.main = [
      './server/server.js'
    ]

    return config
  }
}