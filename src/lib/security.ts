/**
 * Pre-Launch Security & Sanitization Utilities
 * Compliant with Check 06 (Data Validation) & Check 07 (XSS Prevention)
 */

export function sanitizeText(input: string, maxLength: number = 500): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ''); // Strip dangerous bracket chars
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Optional field
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,8}$/;
  return phoneRegex.test(phone.trim());
}

export function isValidEmail(email: string): boolean {
  if (!email) return true; // Optional field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}
