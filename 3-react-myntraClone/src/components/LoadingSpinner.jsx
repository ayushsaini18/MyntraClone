import React from "react";

function LoadingSpinner() {
  return (
    <div>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
