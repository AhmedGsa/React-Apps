import React from "react";
import { toast } from "react-toastify";
export function SingleColor({ index, value }) {
  const handleCopy = (e) => {
    try {
      navigator.clipboard.writeText(`#${value.hex}`)
      toast.success("copied successfully !")
    } catch (error) {
      toast.error("copy failed !")
    }
  }
  return (
    <div
      className={index > 10 ? "color color-light" : "color"}
      style={{
        backgroundColor: `#${value.hex}`,
      }}
      onClick={handleCopy}
    >
      <p className="percent-value">{value.weight}</p>
      <p className="color-value">#{value.hex}</p>
    </div>
  );
}
