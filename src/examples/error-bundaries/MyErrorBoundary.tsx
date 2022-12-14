import React from "react";

type MyProps = { children: any };
type MyState = { errorInfo: any; error: any };
class ErrorBoundary extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // // can use this or componentDidCatsch
  // static getDerivedStateFromError(error : any) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error: any, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
