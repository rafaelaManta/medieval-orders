/**
 * Get the value of an environment variable.
 * @param {string} key - The key of the environment variable (e.g., "API_URL").
 * @returns {string} - The value of the environment variable.
 * @throws {Error} - If the key is not found in the environment variables.
 */
export const getEnvValue = (key) => {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Environment variable "${key}" is not defined.`);
  }

  return value;
};
