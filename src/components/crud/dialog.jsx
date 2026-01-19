import { useState } from "react";

/* 🔥 Сжатие изображения */
const compressImage = (file, maxSizeKB = 400) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    const img = new Image();

    reader.onload = () => (img.src = reader.result);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      let width = img.width;
      let height = img.height;
      let quality = 0.9;

      const compress = () => {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const base64 = canvas.toDataURL("image/jpeg", quality);
        const sizeKB = base64.length / 1024;

        if (sizeKB > maxSizeKB && quality > 0.4) {
          quality -= 0.1;
          width *= 0.9;
          height *= 0.9;
          compress();
        } else {
          resolve(base64);
        }
      };

      compress();
    };

    reader.readAsDataURL(file);
  });
};

function Dialog({ open, onClose, onSubmit }) {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const compressed = await compressImage(file);

      // 🔥 КРИТИЧЕСКИЙ КОНТРОЛЬ
      if (compressed.length > 600_000) {
        alert("Image too large even after compression");
        setLoading(false);
        return;
      }

      setPreview(compressed);
    } catch {
      alert("Image processing failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!preview) return;

    setLoading(true);

    const success = await onSubmit({ photo: preview });

    setLoading(false);

    if (!success) {
      alert("Upload failed. Try another image.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={!loading ? onClose : undefined}
      />

      {/* Modal */}
      <div
        className="relative z-10 bg-white p-4 rounded-xl w-72"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <h2 className="font-semibold mb-3 text-center">Upload photo</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs text-gray-400">No photo</span>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`py-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
