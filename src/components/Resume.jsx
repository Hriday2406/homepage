import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.location.assign(
      "https://drive.google.com/file/d/144NiEE5Pb9dqhYSF3_rW1v0gRJzwYZmu/view",
    );
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", height: "100dvh" }}>
      <p>Redirecting to resume...</p>
    </div>
  );
}
