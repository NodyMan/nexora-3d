// Makes the ADMIN_PASSWORD_HASH value checked by functions/routes.mjs:
// pbkdf2$<iterations>$<salt>$<hash>, salt and hash in base64url.

import { webcrypto as crypto } from 'node:crypto';

const ITERATIONS = 210000;

const b64url = (bytes) => Buffer.from(bytes).toString('base64url');

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS }, key, 256);
  return `pbkdf2$${ITERATIONS}$${b64url(salt)}$${b64url(new Uint8Array(bits))}`;
}

// What counts as a strong enough console password.
export function passwordProblems(password) {
  const problems = [];
  if (password.length < 12) problems.push('at least 12 characters');
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) problems.push('both lowercase and uppercase letters');
  if (!/[0-9]/.test(password)) problems.push('at least one digit');
  if (!/[^A-Za-z0-9]/.test(password)) problems.push('at least one symbol, like ! # $ %');
  if (/^(.)\1+$/.test(password) || /(?:0123|1234|2345|3456|4567|5678|6789|abcd|qwer|password)/i.test(password)) {
    problems.push('no simple sequences like 1234, abcd, qwerty or "password"');
  }
  return problems;
}
