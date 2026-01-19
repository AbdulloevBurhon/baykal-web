import { useState } from "react";
function Dialog({ open, onClose, onSubmit }) {
  const [preview, setPreview] = useState(null);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    onSubmit({
      name: form.name.value,
      description: form.description.value,
      photo: preview,
    });
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
      <div
        className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between px-5 py-4 border-b">
          <h2>Add User</h2>
          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <input name="name" placeholder="Full name" />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <textarea name="description" placeholder="Description" />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Dialog;
