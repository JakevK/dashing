/* Error
 * 404 error page
 */

/* -- imports -- */
import React from "react";
import "../styles/static.css";

// Exported component
export default function History() {
  // return static HTML content
  return (
    <div className="container static">
      <h1>404: this page doesn't exist</h1>
      <p className="center">
        Either this page has been removed, or you typed the URL incorrectly.
      </p>
    </div>
  );
}
