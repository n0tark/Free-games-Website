import React, { Component, ComponentType } from 'react';

interface State {
    hasError: boolean;
}

const withErrorBoundary = <P extends object>(
    WrappedComponent: ComponentType<P>
): React.ComponentType<P> =>
    class ErrorBoundary extends Component<P, State> {
        constructor(props: P) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error: Error) {
            console.error(error);
            return { hasError: true };
        }

        render() {
            if (this.state.hasError) {
                return <p>Something went wrong.</p>;
            }

            return <WrappedComponent {...this.props} />;
        }
    };

export default withErrorBoundary;
