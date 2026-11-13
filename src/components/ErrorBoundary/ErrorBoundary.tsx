import React, { Component, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        backgroundColor: 'var(--bg-color)',
                        color: 'var(--accent-color)',
                        fontFamily: 'var(--font-mono)',
                        padding: '2rem',
                        textAlign: 'center',
                    }}>
                        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>
                            SOMETHING WENT WRONG
                        </h2>
                        <p style={{ color: 'var(--accent-dim)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                            An unexpected error occurred in the application.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                background: 'var(--accent-color)',
                                color: 'var(--bg-color)',
                                border: 'none',
                                padding: '0.75rem 1.5rem',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                letterSpacing: '0.1em',
                            }}
                        >
                            RELOAD PAGE
                        </button>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
