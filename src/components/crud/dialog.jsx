import { useState } from "react";

/* 🔴 ЗАМЕНИ НА СВОИ ДАННЫЕ ИЗ CLOUDINARY */
const CLOUD_NAME = "drauxtepj";
const UPLOAD_PRESET = "frontend_upload";

function Dialog({ open, onClose, onSubmit }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  // выбор файла
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  // загрузка в Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("Cloudinary error:", err);
      throw new Error("Upload failed");
    }

    const data = await res.json();
    return data.secure_url; // ✅ ВАЖНО
  };

  // submit формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      setLoading(true);

      const imageUrl = await uploadToCloudinary(file);
      const success = await onSubmit({ photo: imageUrl });

      if (!success) {
        alert("Failed to save data");
      }
    } catch (e) {
      alert("Upload failed. Check Cloudinary settings.");
    } finally {
      setLoading(false);
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
        className="relative bg-white w-72 p-4 rounded-xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <h2 className="text-center font-semibold mb-3">Upload photo</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Preview */}
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

          {/* Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={loading}
          />

          {/* Actions */}
          <button
            type="submit"
            disabled={loading}
            className={`py-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            {loading ? "Uploading..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
