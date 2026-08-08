import { ImageResponse } from "next/og"

export const size = {
  width: 64,
  height: 64,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "64px",
          height: "64px",
          background: "transparent",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "13px",
            top: "11px",
            display: "flex",
            width: "44px",
            height: "44px",
            background: "#211d19",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "5px",
            top: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "46px",
            height: "46px",
            border: "3px solid #211d19",
            background: "#efd34b",
            color: "#211d19",
            fontFamily: "Arial, sans-serif",
            fontSize: "27px",
            fontWeight: 900,
          }}
        >
          B
        </div>
      </div>
    ),
    size
  )
}
