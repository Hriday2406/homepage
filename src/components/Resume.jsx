import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.location.href = "https://drive.google.com/file/d/144NiEE5Pb9dqhYSF3_rW1v0gRJzwYZmu/view";
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <p>Redirecting to resume...</p>
    </div>
  );
}
