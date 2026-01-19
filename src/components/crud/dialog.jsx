import { useState } from "react";

function Dialog({ open, onClose, onSubmit }) {
  const [preview, setPreview] = useState(null);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      description: form.description.value,
      photo: preview,
    };

    onSubmit(data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-black">Add User</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full name */}
            <input
              name="name"
              placeholder="Full name"
              className="border px-3 py-2 rounded"
            />

            {/* Photo with preview */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center border">
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
                className="text-sm"
              />
            </div>

            {/* Description */}
            <textarea
              name="description"
              placeholder="Description"
              className="border px-3 py-2 rounded"
            />

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2">
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
