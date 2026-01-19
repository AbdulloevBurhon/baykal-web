import { useState } from "react";

function Dialog({ open, onClose, onSubmit }) {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      description: form.description.value,
      photo: preview, // из state
    };
    onSubmit(data);
    console.log("FORM DATA:", data);

    // тут можешь отправлять на сервер
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result); // base64 строка
    };

    reader.readAsDataURL(file);
  };
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-xl shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-black">Add User</h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-black ">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                maxLength={20}
                placeholder="Enter full name"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
              />
            </div>

            {/* Photo */}
            <div className="flex items-center gap-4">
              {/* Кружок */}
              <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center border ">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm dark:text-black">
                    No photo
                  </span>
                )}
              </div>

              {/* Input */}
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1 ">Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-[16px] dark:text-black"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Description
              </label>
              <textarea
                rows={4}
                name="description"
                placeholder="About user..."
                className="w-full border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
