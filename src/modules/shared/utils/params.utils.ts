import { dateToISOString } from './objects.utils'

/**
 * Builds query parameters by merging base parameters with optional parameters.
 * Automatically filters out undefined values and converts Date objects to ISO strings.
 *
 * @param baseParams - Base parameters to include in the query
 * @param optionalParams - Optional parameters to conditionally add
 * @returns Merged parameters object with all non-undefined values and dates converted to ISO strings
 *
 * @example
 * ```typescript
 * // Simple merge
 * const params = buildParams({ page: 1 }, { limit: 10 });
 * // { page: 1, limit: 10 }
 *
 * // With undefined values (filtered out)
 * const params = buildParams({ page: 1 }, { limit: undefined, sort: 'asc' });
 * // { page: 1, sort: 'asc' }
 *
 * // With Date objects (converted to ISO strings)
 * const params = buildParams(
 *   { range: '7d' },
 *   { referenceDate: new Date(), timezone: 'Europe/Paris' }
 * );
 * // { range: '7d', referenceDate: '2025-11-03T...', timezone: 'Europe/Paris' }
 * ```
 */

export const buildParams = <T extends Record<string, unknown>>(
  baseParams: Record<string, string | number | boolean | Date>,
  optionalParams?: Record<string, string | number | boolean | Date | undefined>
): T => {
  const params: Record<string, string | number | boolean> = {}

  Object.entries(baseParams).forEach(([key, value]) => {
    params[key] = value instanceof Date ? dateToISOString(value) : value
  })

  if (optionalParams) {
    Object.entries(optionalParams).forEach(([key, value]) => {
      if (value !== undefined) {
        params[key] = value instanceof Date ? dateToISOString(value) : value
      }
    })
  }

  return params as T
}
