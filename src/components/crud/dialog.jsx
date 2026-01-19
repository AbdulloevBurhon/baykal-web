import { useState } from "react";

function Dialog({ open, onClose, onSubmit }) {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ❗ лимит 500KB
    if (file.size > 500 * 1024) {
      alert("Image is too large. Max 500KB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!preview) return;

    try {
      setLoading(true);
      await onSubmit({ photo: preview });
    } catch (err) {
      alert("Upload failed");
    } finally {
      setLoading(false); // ❗ ВСЕГДА
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
        <h2 className="font-semibold mb-3">Upload photo</h2>

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

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={loading}
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} disabled={loading}>
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-3 py-1 rounded text-white ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
              }`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
