import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Square ink tile with a paper "P", matching the site's wordmark.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#14120f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f6f4ef",
          fontFamily: "Georgia, serif",
          fontWeight: 400,
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    }
  );
}
