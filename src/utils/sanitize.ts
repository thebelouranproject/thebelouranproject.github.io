/**
 * Sanitizes a string for safe display or handling.
 */
export function sanitizeString(input: string): string {
    if (!input) return '';
    return input
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

/**
 * Validates product slug to prevent malformed queries or injection attempts.
 */
export function isValidSlug(slug: string): boolean {
    if (!slug || typeof slug !== 'string') return false;
    return /^[a-z0-9-]+$/.test(slug);
}
