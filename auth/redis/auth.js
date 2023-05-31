const redis = require("redis");
const { promisify } = require("util");

// Create a Redis client
const client = redis.createClient();

// Promisify Redis commands to use async/await syntax
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// Define Cred functions
const Cred = {
  async create(key, value) {
    await setAsync(key, JSON.stringify(value));
  },
  async getById(key) {
    const value = await getAsync(key);
    return JSON.parse(value);
  },
};

// Define Key functions
const Key = {
  async create(key, value, type) {
    await setAsync(key, JSON.stringify({ value, type }));
  },
  async getById(key) {
    const data = await getAsync(key);
    return JSON.parse(data);
  },
};

module.exports = { Cred, Key };
