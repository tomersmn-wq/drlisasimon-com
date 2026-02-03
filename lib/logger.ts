/**
 * Structured logging utility for the application
 * Provides consistent logging with environment-aware behavior
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug'

interface LogContext {
  [key: string]: unknown
}

/**
 * Logger utility with structured output
 * In production, these would typically be sent to a monitoring service
 */
export const logger = {
  /**
   * Log informational messages
   * Only outputs in development, should send to monitoring in production
   */
  info: (message: string, context?: LogContext) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[INFO] ${message}`, context || '')
    }
    // TODO: In production, send to monitoring service (e.g., Sentry, LogRocket)
  },

  /**
   * Log warning messages
   * Outputs in all environments, should send to monitoring in production
   */
  warn: (message: string, context?: LogContext) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[WARN] ${message}`, context || '')
    }
    // TODO: In production, send to monitoring service
  },

  /**
   * Log error messages
   * Outputs in all environments, should send to monitoring in production
   */
  error: (message: string, error?: unknown, context?: LogContext) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[ERROR] ${message}`, { error, ...context })
    }
    // TODO: In production, send to error tracking service (e.g., Sentry)
  },

  /**
   * Log debug messages
   * Only outputs in development
   */
  debug: (message: string, context?: LogContext) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, context || '')
    }
  },
}
